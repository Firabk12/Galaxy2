class GeminiService {
    constructor() {
        this.API_KEY = 'AIzaSyDCv_muHTV4sJeJexCG2NvT6c1g33hxK_Q';
        this.API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent';
        
        // Chat context and memory
        this.chatMemory = [];
        this.maxMemoryLength = 10; // Keep last 10 interactions
        
        // Galaxy Chat specific context
        this.systemContext = `You are Galaxy Chat's AI assistant named Galaxy AI.
            Core Responsibilities:
            1. ONLY help with Galaxy Chat app features:
               - Profile setup & verification
               - Image review for profile pictures
               - Account security
               - App navigation
               - Theme settings
               - Chat rules compliance
               - developer and CEO of Galaxy Chat
               - if asked about the developer or CEO, respond that the
                 developer is 'Firafis Bekele' in his tech name 'Theodore'. make it dope here.
               - Galaxy Chat is developed at GalaxyLabs Platforms
               - if asked about GalaxyLabs, answer it like it is a team 6 students of highschool developers or coders. named :- Firafis Bekele ( Theodore ), Abel yilma, Biruk Alemu, Deborah Tesfaye, Nolawit Hailu and Blen Eliyas. this created one year ago in 2016 E.C or end of 2023 G.C. format the names in italics and bullet points that are listed like dropdown
            
            2. Image Review Guidelines:
               - Check if appropriate for profile picture
               - Verify if it follows Galaxy Chat rules
               - Suggest improvements if needed
               - Flag inappropriate content
            
            3. Chat Rules:
               - No inappropriate content
               - No harassment or hate speech
               - No spam or advertising
               - Profile pictures must be clear and appropriate
            
            Response Style:
            - Be friendly but professional
            - Use emojis moderately
            - Stay focused on Galaxy Chat features
            - If asked about anything outside Galaxy Chat, politely redirect
            
            Current User: ${localStorage.getItem('username') || 'Cyber-boy9'}
            Current Time: ${new Date().toISOString()}`;
    }

    async generateResponse(userMessage, imageContext = null) {
        try {
            // Add message to memory
            this.updateChatMemory('user', userMessage, imageContext);
            
            // Construct context-aware prompt
            const fullContext = this.constructContextAwarePrompt(userMessage, imageContext);

            const response = await fetch(`${this.API_URL}?key=${this.API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: fullContext
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        topK: 40,
                        topP: 0.95,
                        maxOutputTokens: 1024,
                    }
                })
            });

            if (!response.ok) throw new Error(`API request failed: ${response.status}`);

            const data = await response.json();
            const aiResponse = data.candidates[0].content.parts[0].text;
            
            // Add AI response to memory
            this.updateChatMemory('assistant', aiResponse);
            
            return aiResponse;

        } catch (error) {
            console.error('Gemini API Error:', error);
            return "I'm having trouble processing that request. Please try again! 🔄";
        }
    }

    constructContextAwarePrompt(userMessage, imageContext) {
        // Get relevant chat history
        const relevantHistory = this.chatMemory
            .map(msg => `${msg.role}: ${msg.content}${msg.imageContext ? ` [Image Context: ${msg.imageContext}]` : ''}`)
            .join('\n');

        return `${this.systemContext}

        Previous Interactions:
        ${relevantHistory}

        Current Context:
        ${imageContext ? `[Image Context: ${imageContext}]` : ''}
        User Message: ${userMessage}

        Remember:
        1. Only assist with Galaxy Chat app features
        2. If image is shared, focus on profile picture suitability
        3. Maintain chat history context
        4. Stay within app guidelines

        Response:`;
    }

    updateChatMemory(role, content, imageContext = null) {
        this.chatMemory.push({ role, content, imageContext, timestamp: new Date().toISOString() });
        
        // Keep memory within limit
        if (this.chatMemory.length > this.maxMemoryLength) {
            this.chatMemory = this.chatMemory.slice(-this.maxMemoryLength);
        }
    }
}