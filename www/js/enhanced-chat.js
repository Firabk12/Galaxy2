class EnhancedChat {
    constructor(aiChat) {
        this.aiChat = aiChat;
        this.isListening = false;
        this.setupVoiceButton();
        this.setupImageButton();
        this.recognition = this.setupSpeechRecognition();
    }

    setupSpeechRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.log("Speech recognition not supported 😢");
            return null;
        }

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const voiceText = event.results[0][0].transcript;
            this.aiChat.input.value = voiceText;
            this.aiChat.sendMessage();
            this.toggleVoiceRecording(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            this.toggleVoiceRecording(false);
            this.showToast('🎤 Could not understand audio, please try again');
        };

        return recognition;
    }

    setupVoiceButton() {
        const voiceBtn = document.createElement('button');
        voiceBtn.className = 'feature-btn voice-btn';
        voiceBtn.innerHTML = `
            <i class="fas fa-microphone"></i>
            <span class="recording-pulse"></span>
        `;
        voiceBtn.setAttribute('title', 'Hold to speak');

        voiceBtn.addEventListener('mousedown', () => this.startVoiceRecording());
        voiceBtn.addEventListener('mouseup', () => this.stopVoiceRecording());
        voiceBtn.addEventListener('mouseleave', () => this.stopVoiceRecording());

        this.aiChat.input.parentElement.insertBefore(voiceBtn, this.aiChat.sendBtn);
    }

    setupImageButton() {
        const imageBtn = document.createElement('button');
        imageBtn.className = 'feature-btn image-btn';
        imageBtn.innerHTML = '<i class="fas fa-image"></i>';
        imageBtn.setAttribute('title', 'Share image');

        const imageInput = document.createElement('input');
        imageInput.type = 'file';
        imageInput.accept = 'image/*';
        imageInput.style.display = 'none';

        imageInput.addEventListener('change', (e) => this.handleImageUpload(e));
        imageBtn.addEventListener('click', () => imageInput.click());

        this.aiChat.input.parentElement.insertBefore(imageBtn, this.aiChat.sendBtn);
        this.aiChat.input.parentElement.appendChild(imageInput);
    }

    async handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        // Validate file
        if (!file.type.startsWith('image/')) {
            this.showToast('❌ Please upload only images');
            return;
        }

        if (file.size > 5 * 1024 * 1024) { // 5MB limit
            this.showToast('❌ Image size should be less than 5MB');
            return;
        }

        try {
            const reader = new FileReader();
            reader.onload = async (e) => {
                // Add image message
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message user-message';
                messageDiv.innerHTML = `
                    <div class="message-content">
                        <div class="image-wrapper">
                            <img src="${e.target.result}" alt="Shared image" class="shared-image">
                            <div class="image-overlay">
                                <span>${file.name}</span>
                                <button class="expand-btn">
                                    <i class="fas fa-expand"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;

                this.aiChat.messagesContainer.appendChild(messageDiv);
                this.aiChat.messagesContainer.scrollTop = this.aiChat.messagesContainer.scrollHeight;

                // Setup image expansion
                const expandBtn = messageDiv.querySelector('.expand-btn');
                expandBtn.onclick = () => this.expandImage(e.target.result);

                // Get AI response about the image
                await this.aiChat.sendMessage(`[User shared an image: ${file.name}] Please acknowledge this and provide any relevant assistance.`);
            };
            reader.readAsDataURL(file);
        } catch (error) {
            this.showToast('❌ Failed to process image');
            console.error('Image upload error:', error);
        }
    }

    startVoiceRecording() {
        if (!this.recognition) {
            this.showToast('🎤 Voice recognition not supported in your browser');
            return;
        }

        if (this.isListening) return;

        this.isListening = true;
        this.toggleVoiceRecording(true);
        this.recognition.start();
    }

    stopVoiceRecording() {
        if (!this.isListening) return;

        this.isListening = false;
        this.toggleVoiceRecording(false);
        this.recognition.stop();
    }

    toggleVoiceRecording(isRecording) {
        const voiceBtn = document.querySelector('.voice-btn');
        if (isRecording) {
            voiceBtn.classList.add('recording');
            this.showToast('🎤 Listening...');
        } else {
            voiceBtn.classList.remove('recording');
        }
    }

    expandImage(src) {
        const overlay = document.createElement('div');
        overlay.className = 'image-expand-overlay';
        overlay.innerHTML = `
            <div class="expanded-image-container">
                <img src="${src}" alt="Expanded image">
                <button class="close-expand"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay || e.target.closest('.close-expand')) {
                overlay.remove();
            }
        });
    }

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'chat-toast';
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }, 100);
    }
}