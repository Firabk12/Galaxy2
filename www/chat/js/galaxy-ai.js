function initGalaxyAI() {
    const mainContainer = document.querySelector('.chat__interface');
    
    const galaxyAIContent = `
        <div class="galaxy-ai__container">
            <!-- Logo and Welcome Section -->
            <div class="galaxy-ai__welcome">
                <div class="galaxy-ai__logo">
                    <img src="img/astronaut.svg" alt="Galaxy AI">
                    <h1>Galaxy AI</h1>
                </div>
                <p class="galaxy-ai__subtitle">Your Cosmic AI Assistant</p>
            </div>

            <!-- Quick Questions Section -->
            <div class="quick-questions">
                <div class="question-box">
                    <i class="ri-code-box-line"></i>
                    <span>How can I implement async/await in JavaScript?</span>
                </div>
                <div class="question-box">
                    <i class="ri-bug-line"></i>
                    <span>Debug my React component's state management</span>
                </div>
                <div class="question-box">
                    <i class="ri-terminal-box-line"></i>
                    <span>Explain Docker containerization basics</span>
                </div>
                <div class="question-box">
                    <i class="ri-robot-line"></i>
                    <span>Help me understand machine learning concepts</span>
                </div>
            </div>

            <!-- Chat Messages Area -->
            <div class="galaxy-ai__messages" id="aiMessages">
                <!-- Messages will appear here -->
            </div>

            <!-- Input Section -->
            <div class="galaxy-ai__input-section">
                <div class="input-container">
                    <textarea 
                        class="query-input" 
                        placeholder="Ask me anything about coding..."
                        rows="1"
                    ></textarea>
                    
                    <div class="input-buttons">
                        <div class="left-buttons">
                            <button class="deep-think-btn" title="Deep Think Mode">
                                <i class="ri-brain-line"></i>
                            </button>
                            <button class="attach-btn" title="Attach File">
                                <i class="ri-attachment-2"></i>
                            </button>
                        </div>
                        <div class="right-buttons">                           
                            <button class="voice-btn active">
                                <i class="ri-mic-line"></i>
                            </button>
                            <button class="send-btn">
                                <i class="ri-send-plane-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    mainContainer.innerHTML = galaxyAIContent;
    initializeAIInterface();
}

function initializeAIInterface() {
    const textarea = document.querySelector('.query-input');
    const voiceBtn = document.querySelector('.voice-btn');
    const sendBtn = document.querySelector('.send-btn');
    const questionBoxes = document.querySelectorAll('.question-box');
    
    // Auto-resize textarea
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
        
        // Toggle voice/send button based on content
        if (this.value.trim()) {
            voiceBtn.classList.remove('active');
            sendBtn.classList.add('active');
        } else {
            voiceBtn.classList.add('active');
            sendBtn.classList.remove('active');
        }
    });

    // Handle question box clicks
    questionBoxes.forEach(box => {
        box.addEventListener('click', () => {
            textarea.value = box.querySelector('span').textContent;
            textarea.dispatchEvent(new Event('input'));
            textarea.focus();
        });
    });

    // Handle send button click
    sendBtn.addEventListener('click', () => {
        if (textarea.value.trim()) {
            // Handle message sending
            console.log('Sending:', textarea.value);
            textarea.value = '';
            textarea.dispatchEvent(new Event('input'));
        }
    });
}