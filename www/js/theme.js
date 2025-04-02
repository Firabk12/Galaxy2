class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.toggleBtn = document.querySelector('.theme-toggle');
        this.init();
    }

    init() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.toggleBtn.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
        
        this.toggleBtn.classList.add('rotate');
        setTimeout(() => this.toggleBtn.classList.remove('rotate'), 300);
    }
}

class AIChat {
    constructor() {
        this.chatInterface = document.querySelector('.ai-chat-interface');
        this.messagesContainer = document.querySelector('.ai-chat-messages');
        this.input = document.querySelector('.ai-chat-input input');
        this.sendBtn = document.querySelector('.send-message');
        this.toggleBtn = document.querySelector('.ai-chat-toggle');
        this.closeBtn = document.querySelector('.close-chat');
        
        // Initialize GeminiService
        this.geminiService = new GeminiService();
        this.conversationHistory = [];
        
        // Initialize EnhancedChat features
        this.enhancedFeatures = new EnhancedChat(this);
        
        this.init();
    }

    init() {
        this.toggleBtn.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.enhancedFeatures.sendMessageWithImage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.enhancedFeatures.sendMessageWithImage();
        });
    }

    toggleChat() {
        this.chatInterface.style.display = 'flex';
        setTimeout(() => this.chatInterface.classList.toggle('open'), 0);
    }

    closeChat() {
        this.chatInterface.classList.remove('open');
        setTimeout(() => this.chatInterface.style.display = 'none', 300);
    }

    async sendMessage(message, imageContext = null) {
        if (!message && !imageContext) return;

        // Add user message to conversation history
        if (message) {
            this.addMessage(message, 'user');
        }

        // Show typing indicator
        this.showTypingIndicator();

        try {
            // Get AI response with context
            const response = await this.geminiService.generateResponse(message, imageContext);
            this.removeTypingIndicator();
            
            // Add AI response
            this.addMessage(response, 'ai');

        } catch (error) {
            console.error('Chat Error:', error);
            this.removeTypingIndicator();
            this.addMessage("I apologize, but I'm having trouble right now. Please try again! 🔄", 'ai');
        }
    }

    addMessage(content, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        messageDiv.innerHTML = type === 'ai' 
            ? `
                <div class="ai-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${content}</p>
                </div>
            `
            : `
                <div class="message-content">
                    <p>${content}</p>
                </div>
            `;

        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        this.messagesContainer.appendChild(indicator);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    }
}

class EnhancedChat {
    constructor(aiChat) {
        this.aiChat = aiChat;
        this.isListening = false;
        this.pendingImage = null;
        this.setupEnhancedInterface();
    }

    setupEnhancedInterface() {
    this.setupVoiceInput();  
    this.setupImageUpload();
}


    setupImageUpload() {
        const imageBtn = document.createElement('button');
        imageBtn.className = 'feature-btn image-btn';
        imageBtn.innerHTML = '<i class="fas fa-image"></i>';
        imageBtn.setAttribute('title', 'Upload profile picture');

        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.accept = 'image/*';
        imageInput.style.display = 'none';

        imageInput.addEventListener('change', (e) => this.handleImageSelection(e));
        imageBtn.addEventListener('click', () => imageInput.click());

        this.aiChat.input.parentElement.insertBefore(imageBtn, this.aiChat.sendBtn);
        this.aiChat.input.parentElement.appendChild(imageInput);
    }
    
    // Add this inside the EnhancedChat class, right after setupImageUpload()

setupVoiceInput() {
    // Create voice button
    const voiceBtn = document.createElement('button');
    voiceBtn.className = 'feature-btn voice-btn';
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
    voiceBtn.setAttribute('title', 'Hold to speak');

    // Add voice button to chat interface
    this.aiChat.input.parentElement.insertBefore(voiceBtn, this.imageBtn);

    // Setup speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';

        // Handle recognition results
        this.recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            this.aiChat.input.value = transcript;
            this.showToast('🎤 Voice captured! Send or continue typing...');
        };

        this.recognition.onerror = (event) => {
            console.error('Voice recognition error:', event.error);
            this.showToast('🎤 Could not understand audio, please try again');
        };

        // Add hold-to-speak functionality
        voiceBtn.addEventListener('mousedown', () => this.startVoiceRecording());
        voiceBtn.addEventListener('mouseup', () => this.stopVoiceRecording());
        voiceBtn.addEventListener('mouseleave', () => this.stopVoiceRecording());
    } else {
        voiceBtn.style.display = 'none';
        console.log('Speech recognition not supported in this browser');
    }
}

startVoiceRecording() {
    if (this.isListening) return;

    try {
        this.isListening = true;
        this.recognition.start();
        document.querySelector('.voice-btn').classList.add('recording');
        this.showToast('🎤 Listening...');
    } catch (error) {
        console.error('Voice recording error:', error);
        this.stopVoiceRecording();
    }
}

stopVoiceRecording() {
    if (!this.isListening) return;

    try {
        this.isListening = false;
        this.recognition.stop();
        document.querySelector('.voice-btn').classList.remove('recording');
    } catch (error) {
        console.error('Voice recording stop error:', error);
    }
}

    async handleImageSelection(event) {
        const file = event.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            this.showToast('❌ Please upload only images');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            this.showToast('❌ Image must be less than 5MB');
            return;
        }

        try {
            this.pendingImage = file;
            this.showImagePreview(file);
            
            this.aiChat.input.focus();
            this.aiChat.input.placeholder = 'Add a message with your image...';
            
            this.showToast('✨ Add a message and press Enter to send');
        } catch (error) {
            console.error('Image handling error:', error);
            this.showToast('❌ Failed to process image');
        }
    }

    showImagePreview(file) {
        const previewContainer = document.createElement('div');
        previewContainer.className = 'pending-image-preview';
        
        const reader = new FileReader();
        reader.onload = (e) => {
            previewContainer.innerHTML = `
                <div class="preview-content">
                    <img src="${e.target.result}" alt="Selected image">
                    <button class="remove-image">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            previewContainer.querySelector('.remove-image').onclick = () => {
                this.pendingImage = null;
                previewContainer.remove();
                this.aiChat.input.placeholder = 'Ask me anything about Galaxy Chat...';
            };
        };
        
        reader.readAsDataURL(file);
        this.aiChat.input.parentElement.insertBefore(previewContainer, this.aiChat.input);
    }

    async sendMessageWithImage() {
        const message = this.aiChat.input.value.trim();
        const image = this.pendingImage;
        
        if (!image && !message) return;

        try {
            if (image) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'message user-message';
                    messageDiv.innerHTML = `
                        <div class="message-content">
                            ${message ? `<p class="message-text">${message}</p>` : ''}
                            <div class="image-wrapper">
                                <img src="${e.target.result}" alt="Shared image" class="shared-image">
                            </div>
                        </div>
                    `;
                    
                    this.aiChat.messagesContainer.appendChild(messageDiv);
                    this.aiChat.messagesContainer.scrollTop = this.aiChat.messagesContainer.scrollHeight;

                    const imageContext = `User shared an image${message ? ` with message: "${message}"` : ''} for profile picture review.`;
                    await this.aiChat.sendMessage(message || "Please review this image for my profile", imageContext);

                    this.pendingImage = null;
                    document.querySelector('.pending-image-preview')?.remove();
                };
                reader.readAsDataURL(image);
            } else {
                await this.aiChat.sendMessage(message);
            }

            this.aiChat.input.value = '';
            this.aiChat.input.placeholder = 'Ask me anything about Galaxy Chat...';

        } catch (error) {
            console.error('Send message error:', error);
            this.showToast('❌ Failed to send message');
        }
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'chat-toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize when document loads
document.addEventListener('DOMContentLoaded', () => {
    const themeManager = new ThemeManager();
    const aiChat = new AIChat();
});