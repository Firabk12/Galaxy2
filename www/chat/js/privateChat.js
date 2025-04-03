import { mediaEditorUI } from './mediaEditor.js';

const privateChatUI = {
    moreMenuOptions: [
        {
            icon: 'ri-notification-line',
            label: 'Notifications',
            action: 'notifications',
            subMenu: [
                { icon: 'ri-volume-up-line', label: 'Sound & Vibration', action: 'sound-settings' },
                { icon: 'ri-timer-line', label: 'Quiet Hours', action: 'quiet-hours' },
                { icon: 'ri-notification-badge-line', label: 'Preview Settings', action: 'preview-settings' }
            ]
        },
        {
            icon: 'ri-delete-bin-line',
            label: 'Clear Chat',
            action: 'clear',
            subMenu: [
                { icon: 'ri-delete-bin-2-line', label: 'Clear Messages', action: 'clear-messages' },
                { icon: 'ri-file-shred-line', label: 'Clear Media', action: 'clear-media' },
                { icon: 'ri-eraser-line', label: 'Clear All', action: 'clear-all' }
            ]
        },
        {
            icon: 'ri-user-settings-line',
            label: 'Chat Settings',
            action: 'settings',
            subMenu: [
                { icon: 'ri-palette-line', label: 'Chat Theme', action: 'chat-theme' },
                { icon: 'ri-font-size-2', label: 'Font Size', action: 'font-size' },
                { icon: 'ri-chat-settings-line', label: 'Advanced Settings', action: 'advanced-settings' }
            ]
        },
        {
            icon: 'ri-shield-line',
            label: 'Privacy',
            action: 'privacy',
            subMenu: [
                { icon: 'ri-lock-line', label: 'Message Privacy', action: 'message-privacy' },
                { icon: 'ri-eye-off-line', label: 'Last Seen', action: 'last-seen' },
                { icon: 'ri-shield-check-line', label: 'Security Settings', action: 'security' }
            ]
        },
        {
            icon: 'ri-block-line',
            label: 'Block',
            action: 'block'
        }
    ],
    
    emojiCategories: {
        "Smileys & Emotion": {
            icon: "😊",
            range: [[0x1F600, 0x1F64F]]
        },
        "People & Body": {
            icon: "👋",
            range: [[0x1F466, 0x1F487]]
        },
        "Animals & Nature": {
            icon: "🦊",
            range: [[0x1F400, 0x1F4D3]]
        },
        "Food & Drink": {
            icon: "🍔",
            range: [[0x1F32D, 0x1F37F]]
        },
        "Activities": {
            icon: "⚽",
            range: [[0x1F380, 0x1F3CF]]
        },
        "Objects": {
            icon: "💡",
            range: [[0x1F4A1, 0x1F4CC]]
        }
    },

    activeChatData: {
        user: {
            name: "Deborah",
            username: "@de.bi.xonic",
            avatar: "img/Deborah.jpg",
            status: "online",
            lastSeen: null,
            bio: "Frontend Developer | Gaming Enthusiast 🎮 | Art Lover 🎨",
            categories: ["Gaming", "Art", "Technology"],
            joinDate: "2024-09-15",
            mutualContacts: 12,
            contact: false,
            links: [
                { type: "github", url: "https://github.com/debixonic" },
                { type: "portfolio", url: "https://debi.dev" }
            ]
        },
        
        attachmentOptions: [
        {
            icon: 'ri-image-line',
            label: 'Photos & Videos',
            type: 'media',
            accept: 'image/*, video/*'
        },
        {
            icon: 'ri-file-text-line',
            label: 'Documents',
            type: 'document',
            accept: '.pdf,.doc,.docx,.xls,.xlsx,.txt'
        },
        {
            icon: 'ri-music-2-line',
            label: 'Audio',
            type: 'audio',
            accept: 'audio/*'
        },
        {
            icon: 'ri-map-pin-line',
            label: 'Location',
            type: 'location'
        },
        {
            icon: 'ri-contacts-line',
            label: 'Contact',
            type: 'contact'
        }
    ],
        messages: [
            {
                "id": 1,
                "sender": "Deborah",
                "time": "2025-04-01 06:30:00",
                "content": "Hey! Did you check out the way my heart races when you text me? 👀",
                "type": "text",
                "status": "read"
            },
            {
                "id": 2,
                "sender": "Theodore",
                "time": "2025-04-01 06:31:00",
                "content": "Yeah, it's wild! Almost as wild as how gorgeous you look today 😊",
                "type": "text",
                "status": "read"
            },
            {
                "id": 3,
                "sender": "Deborah",
                "time": "2025-04-01 06:32:00",
                "content": "Stop it youu! 🙈 But seriously… when are you taking me out?",
                "type": "text",
                "status": "read"
            },
            {
                "id": 4,
                "sender": "Theodore",
                "time": "2025-04-01 06:33:00",
                "content": "Revolutionary idea: Your smile + me = forever ✨",
                "type": "text",
                "status": "read"
            },
            {
                "id": 5,
                "sender": "Deborah",
                "time": "2025-04-01 06:34:00",
                "content": "img/Deborah.jpg",
                "type": "image",
                "caption": "Look at this cute selfie! 😍 (Thought of you)",
                "status": "read"
            },
            {
                "id": 6,
                "sender": "Theodore",
                "time": "2025-04-01 06:35:00",
                "content": "You're breaking my heart… in the best way. Coffee tomorrow? ☕️",
                "type": "text",
                "status": "read"
            },
            {
                "id": 7,
                "sender": "Deborah",
                "time": "2025-04-01 06:36:00",
                "content": "Smooth operator! Let me check my *heart's* schedule 😉",
                "type": "text",
                "status": "read"
            },
            {
                "id": 8,
                "sender": "Theodore",
                "time": "2025-04-01 06:37:00",
                "content": "Hope there's no '404: Love Not Found' in your calendar! 🤞 BTW, made this for you:",
                "type": "text",
                "status": "read"
            },
            {
                "id": 9,
                "sender": "Theodore",
                "time": "2025-04-01 06:37:30",
                "content": "img/Theodore_Art.jpg",
                "type": "image",
                "caption": "Hearts & You 💕 (My masterpiece)",
                "status": "read"
            },
            {
                "id": 10,
                "sender": "Deborah",
                "time": "2025-04-01 06:38:00",
                "content": "OMG you're adorable! Flirting level: *Expert* 😊",
                "type": "text",
                "status": "read"
            },
            {
                "id": 11,
                "sender": "Deborah",
                "time": "2025-04-01 06:39:00",
                "content": "Official update from my heart:",
                "type": "text",
                "status": "read"
            },
            {
                "id": 12,
                "sender": "Deborah",
                "time": "2025-04-01 06:39:10",
                "content": "{\n  \"status\": \"accepted\",\n  \"message\": \"Deborah.exe has a crush\",\n  \"time\": \"Tomorrow, 3 PM\",\n  \"location\": \"Sunset Café\"\n}",
                "type": "code",
                "status": "read"
            },
            {
                "id": 13,
                "sender": "Theodore",
                "time": "2025-04-01 06:40:00",
                "content": "Best. Response. Ever. *Ewedihalehu* 💘 (That's 'I love you' in Amharic, btw 😏)",
                "type": "text",
                "status": "read"
            },
            {
                "id": 14,
                "sender": "Deborah",
                "time": "2025-04-01 06:41:00",
                "content": "You're such a charmer! 🤓 *Nesh girma neh!* (You're amazing!) TTYL! ❤️",
                "type": "text",
                "status": "read"
            },
            {
                "id": 15,
                "sender": "Theodore",
                "time": "2025-04-01 06:42:00",
                "content": "Don't let anyone *merge* into your DMs without my approval! 😘",
                "type": "text",
                "status": "sent"
            }
        ]
    },

    getPrivateChatInterface() {
        return `
            <div class="private-chat">
                <div class="chat__header">
                    <div class="chat__user-info">
                        <div class="user__avatar">
                            <img src="${this.activeChatData.user.avatar}" alt="${this.activeChatData.user.name}" 
                                 onerror="this.src='img/default-avatar.jpg'">
                            <span class="status-dot ${this.activeChatData.user.status}"></span>
                        </div>
                        <div class="user__details">
                            <h3>${this.activeChatData.user.name}</h3>
                            <span class="user__status">${this.getStatusText()}</span>
                        </div>
                    </div>
                    <div class="chat__actions">
                        <button class="action-btn" data-action="search" title="Search in conversation">
                            <i class="ri-search-line"></i>
                        </button>
                        <button class="action-btn" data-action="call" title="Voice call">
                            <i class="ri-phone-line"></i>
                        </button>
                        <button class="action-btn" data-action="video" title="Video call">
                            <i class="ri-vidicon-line"></i>
                        </button>
                        <button class="action-btn" data-action="more" title="More options">
                            <i class="ri-more-2-fill"></i>
                        </button>
                    </div>
                </div>

                <div class="more-menu">
                    ${this.moreMenuOptions.map(option => `
                        <button class="more-menu__item" data-action="${option.action}">
                            <i class="${option.icon}"></i>
                            <span>${option.label}</span>
                        </button>
                    `).join('')}
                </div>

                <div class="chat__messages">
                    <div class="messages__container">
                        ${this.generateMessages()}
                    </div>
                </div>

                <div class="chat__input">
                    <div class="input__container">
                        <div class="input__left-actions">
                            <button class="action-btn" data-action = "emoji" title="Add emoji">
                                <i class="ri-emotion-happy-line"></i>
                            </button>
                            <button class="action-btn" data-action = "attach" title="Attach file">
                                <i class="ri-attachment-2"></i>
                            </button>
                        </div>
                        <div class="message__input" contenteditable="true" placeholder="Message"></div>
                        <button class="voice-send-btn" title="Voice message">
                            <i class="ri-mic-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    generateMessages() {
        if (!this.activeChatData.messages || this.activeChatData.messages.length === 0) {
            return '<div class="no-messages">No messages yet</div>';
        }

        let lastSender = null;
        let lastTimestamp = null;

        return this.activeChatData.messages.map((message) => {
            const isOwnMessage = message.sender !== this.activeChatData.user.name;
            const messageClass = isOwnMessage ? 'message--sent' : 'message--received';
            const timeGap = this.shouldShowTimeGap(lastTimestamp, message.time);
            
            if (timeGap) lastTimestamp = message.time;
            
            const showAvatar = !isOwnMessage && lastSender !== message.sender;
            lastSender = message.sender;

            return `
                ${timeGap ? `<div class="time-gap">${this.formatTimeGap(message.time)}</div>` : ''}
                <div class="message ${messageClass}">
                    ${!isOwnMessage ? `
                        <div class="message__avatar" ${!showAvatar ? 'style="visibility: hidden;"' : ''}>
                            <img src="${this.activeChatData.user.avatar}" alt="${message.sender}" 
                                 onerror="this.src='img/default-avatar.jpg'">
                        </div>
                    ` : ''}
                    <div class="message__content">
                        ${this.getMessageContent(message)}
                        <div class="message__info">
                            <span class="message__time">${this.formatMessageTime(message.time)}</span>
                            ${this.getMessageStatus(message.status, isOwnMessage)}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    getMessageContent(message) {
        switch(message.type) {
            case 'image':
                return `
                    <div class="message__image">
                        <img src="${message.content}" alt="Shared image" loading="lazy">
                        ${message.caption ? `<p class="image__caption">${message.caption}</p>` : ''}
                    </div>
                `;
            case 'code':
                return `
                    <pre class="message__code"><code>${message.content}</code></pre>
                `;
            case 'text':
            default:
                return `<p>${this.formatMessageText(message.content)}</p>`;
        }
    },

    formatMessageText(text) {
        return text.replace(/\n/g, '<br>');
    },

    getMessageStatus(status, isOwnMessage) {
        if (!isOwnMessage) return '';
        const statusIcons = {
            'sent': '<i class="ri-check-line"></i>',
            'delivered': '<i class="ri-check-double-line"></i>',
            'read': '<i class="ri-check-double-line read"></i>'
        };
        return `<span class="message__status">${statusIcons[status] || statusIcons.sent}</span>`;
    },

    shouldShowTimeGap(lastTimestamp, currentTimestamp) {
        if (!lastTimestamp) return true;
        const lastTime = new Date(lastTimestamp);
        const currentTime = new Date(currentTimestamp);
        const diffInMinutes = Math.floor((currentTime - lastTime) / (1000 * 60));
        return diffInMinutes > 30;
    },

    formatTimeGap(timestamp) {
        const messageDate = new Date(timestamp);
        const now = new Date('2025-04-01 07:34:33');
        
        if (messageDate.toDateString() === now.toDateString()) {
            return messageDate.toLocaleTimeString('en-US', { 
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
        }
        return messageDate.toLocaleDateString('en-US', { 
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        });
    },

    formatMessageTime(timestamp) {
        const messageDate = new Date(timestamp);
        const now = new Date('2025-04-01 07:15:53');
        const diffInMinutes = Math.floor((now - messageDate) / (1000 * 60));

        if (diffInMinutes < 1) return 'Just now';
        if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
        if (diffInMinutes < 24 * 60) return messageDate.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        return messageDate.toLocaleDateString();
    },

    getStatusText() {
        const { status, lastSeen } = this.activeChatData.user;
        if (status === 'online') return 'Online';
        if (lastSeen) return `Last seen ${this.getRelativeTime(lastSeen)}`;
        return 'Offline';
    },

    getRelativeTime(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);
        const diff = Math.floor((now - date) / 1000);

        if (diff < 60) return 'just now';
        if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
        if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
        return date.toLocaleDateString();
    },

    setActiveChatData(chatData) {
        this.activeChatData = {
            ...this.activeChatData,
            ...chatData,
            user: {
                ...this.activeChatData.user,
                ...chatData.user
            },
            messages: chatData.messages || []
        };
    },

    initializeChat() {
        this.initializeMessageInput();
        this.initializeScrolling();
        this.initializeActions();
        this.initializeMoreMenu();
        this.initializeProfile();
        this.initializeProfileEvents();
        this.initializeEmojiPicker();
        this.initializeEmojiEvents();
        this.initializeAttachButton();
        this.initializeAttachmentEvents();
    },

    initializeActions() {
        const headerActions = {
            search: () => { this.showSearchOverlay(); },
            call: () => { this.showCallDialog('voice'); },
            video: () => { this.showCallDialog('video'); },
            more: () => { this.toggleMoreMenu(); },
            emoji: () => { this.toggleEmojiPicker(); }
        };

        this.moreMenuOptions = [
            { icon: 'ri-notification-line', label: 'Mute notifications', action: 'mute' },
            { icon: 'ri-delete-bin-line', label: 'Clear chat', action: 'clear' },
            { icon: 'ri-user-settings-line', label: 'Chat settings', action: 'settings' },
            { icon: 'ri-flag-line', label: 'Report', action: 'report' },
            { icon: 'ri-block-line', label: 'Block', action: 'block' }
        ];

        document.querySelectorAll('.chat__actions .action-btn').forEach(btn => {
            const action = btn.getAttribute('data-action');
            if (action && headerActions[action]) {
                btn.addEventListener('click', (e) => {
                    const ripple = document.createElement('span');
                    ripple.className = 'ripple';
                    btn.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 500);
                    headerActions[action].call(this);
                });
            }
        });
    },

    initializeMessageInput() {
        const input = document.querySelector('.message__input');
        const voiceSendBtn = document.querySelector('.voice-send-btn');
        const voiceSendIcon = voiceSendBtn.querySelector('i');

        if (input && voiceSendBtn) {
            const handleInput = () => {
                const text = input.textContent.trim();
                
                if (text) {
                    voiceSendBtn.title = 'Send message';
                    voiceSendIcon.className = 'ri-send-plane-fill';
                    voiceSendBtn.classList.add('can-send');
                } else {
                    voiceSendBtn.title = 'Voice message';
                    voiceSendIcon.className = 'ri-mic-fill';
                    voiceSendBtn.classList.remove('can-send');
                }
            };

            input.addEventListener('input', handleInput);

            input.addEventListener('focus', () => {
                if (input.textContent.trim() === '') {
                    input.removeAttribute('placeholder');
                }
            });

            input.addEventListener('blur', () => {
                if (input.textContent.trim() === '') {
                    input.setAttribute('placeholder', 'Message');
                }
            });

            voiceSendBtn.addEventListener('click', () => {
                const message = input.textContent.trim();
                if (message) {
                    this.sendMessage(message);
                    input.textContent = '';
                    handleInput();
                } else {
                    console.log('Starting voice message...');
                }
            });

            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    voiceSendBtn.click();
                }
            });
        }
    },

    initializeScrolling() {
        const messagesContainer = document.querySelector('.messages__container');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    },

    sendMessage(content) {
        const newMessage = {
            id: this.activeChatData.messages.length + 1,
            sender: "Firabk12",
            time: new Date().toISOString(),
            content: content,
            type: "text",
            status: "sent"
        };

        this.activeChatData.messages.push(newMessage);
        this.updateMessages();
    },

    updateMessages() {
        const messagesContainer = document.querySelector('.messages__container');
        if (messagesContainer) {
            messagesContainer.innerHTML = this.generateMessages();
            this.initializeScrolling();
        }
    },

    toggleMoreMenu() {
        const moreMenu = document.querySelector('.more-menu');
        const moreBtn = document.querySelector('[data-action="more"]');
        
        moreMenu.classList.toggle('show');
        moreBtn.classList.toggle('active');

        if (moreMenu.classList.contains('show')) {
            const closeMenu = (e) => {
                if (!moreMenu.contains(e.target) && !moreBtn.contains(e.target)) {
                    moreMenu.classList.remove('show');
                    moreBtn.classList.remove('active');
                    document.removeEventListener('click', closeMenu);
                }
            };
            setTimeout(() => document.addEventListener('click', closeMenu), 0);
        }
    },

    showSearchOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'search-overlay';
        overlay.innerHTML = `
            <div class="search-container">
                <div class="search-header">
                    <button class="close-search">
                        <i class="ri-arrow-left-line"></i>
                    </button>
                    <div class="search-input">
                        <i class="ri-search-line"></i>
                        <input type="text" placeholder="Search in conversation...">
                    </div>
                </div>
                <div class="search-results"></div>
            </div>
        `;
        document.querySelector('.private-chat').appendChild(overlay);
        
        const input = overlay.querySelector('input');
        input.focus();
        overlay.querySelector('.close-search').onclick = () => {
            overlay.classList.add('fade-out');
            setTimeout(() => overlay.remove(), 300);
        };
    },

    showCallDialog(type) {
        const dialog = document.createElement('div');
        dialog.className = 'call-dialog';
        dialog.innerHTML = `
            <div class="call-container">
                <div class="caller-info">
                    <img src="${this.activeChatData.user.avatar}" alt="${this.activeChatData.user.name}">
                    <h3 style="color: white;">${this.activeChatData.user.name}</h3>
                    <p style="color: white;">${type === 'voice' ? 'Calling...' : 'Video calling...'}</p>
                </div>
                <div class="call-actions">
                    <button class="decline-call" title="Decline">
                        <i class="ri-phone-off-fill"></i>
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(dialog);

        setTimeout(() => dialog.classList.add('show'), 0);
        dialog.querySelector('.decline-call').onclick = () => {
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
        };
    },

    addMenuStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .more-menu {
                position: absolute;
                top: 60px;
                right: 20px;
                background: var(--body-color);
                border-radius: 12px;
                box-shadow: 0 2px 10px var(--shadow-color);
                min-width: 200px;
                z-index: 1000;
                opacity: 0;
                transform: translateY(-10px);
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .more-menu.show {
                opacity: 1;
                transform: translateY(0);
                visibility: visible;
            }

            .more-menu__item {
                width: 100%;
                padding: 12px 16px;
                display: flex;
                align-items: center;
                border: none;
                background: none;
                cursor: pointer;
                position: relative;
            }

            .menu-item-content {
                display: flex;
                align-items: center;
                width: 100%;
            }

            .more-menu__item i {
                margin-right: 12px;
                font-size: 1.2rem;
                color: var(--text-color);
            }

            .more-menu__item span {
                color: var(--title-color);
                font-weight: var(--font-semi-bold);
            }

            .has-submenu .submenu-arrow {
                margin-left: auto;
                transition: transform 0.3s ease;
            }

            .has-submenu.active .submenu-arrow {
                transform: rotate(90deg);
            }

            .sub-menu {
                position: absolute;
                left: 100px;
                top: 0;
                background: var(--body-color);
                border-radius: 12px;
                box-shadow: 0 2px 10px var(--shadow-color);
                min-width: 200px;
                opacity: 0;
                transform: translateX(-10px);
                visibility: hidden;
                transition: all 0.3s ease;
            }

            .more-menu__item:hover > .sub-menu {
                opacity: 1;
                transform: translateX(0);
                visibility: visible;
            }

            .more-menu__item:hover {
                background: rgba(var(--first-color-rgb), 0.1);
            }
        `;
        document.head.appendChild(style);
    },

    generateMoreMenu(menuItems, level = 0) {
        return `
            <div class="more-menu${level > 0 ? ' sub-menu' : ''}" ${level > 0 ? 'style="display: none;"' : ''}>
                ${menuItems.map(option => `
                    <button class="more-menu__item ${option.subMenu ? 'has-submenu' : ''}" 
                            data-action="${option.action}">
                        <div class="menu-item-content">
                            <i class="${option.icon}"></i>
                            <span>${option.label}</span>
                            ${option.subMenu ? '<i class="ri-arrow-right-s-line submenu-arrow"></i>' : ''}
                        </div>
                        ${option.subMenu ? this.generateMoreMenu(option.subMenu, level + 1) : ''}
                    </button>
                `).join('')}
            </div>
        `;
    },

    initializeMoreMenu() {
        this.addMenuStyles();
        const moreMenu = document.querySelector('.more-menu');
        
        if (moreMenu) {
            moreMenu.querySelectorAll('.more-menu__item').forEach(item => {
                const action = item.dataset.action;
                const hasSubmenu = item.classList.contains('has-submenu');

                item.addEventListener('click', (e) => {
                    if (hasSubmenu) {
                        e.stopPropagation();
                        item.classList.toggle('active');
                    } else {
                        this.handleMoreMenuAction(action);
                        this.toggleMoreMenu();
                    }
                });

                if (hasSubmenu) {
                    item.addEventListener('mouseenter', () => {
                        item.classList.add('active');
                    });

                    item.addEventListener('mouseleave', () => {
                        item.classList.remove('active');
                    });
                }
            });
        }
    },

    handleMoreMenuAction(action) { 
        const actions = { 
            'block': () => this.showConfirmDialog('Block user?', 'You won\'t receive messages from this user'), 
            'sound-settings': () => this.showToast('Sound settings opened'), 
            'quiet-hours': () => this.showToast('Quiet hours settings opened'), 
            'preview-settings': () => this.showToast('Preview settings opened'), 
            'clear-messages': () => this.showConfirmDialog('Clear messages?', 'All messages will be deleted'), 
            'clear-media': () => this.showConfirmDialog('Clear media?', 'All media files will be deleted'), 
            'clear-all': () => this.showConfirmDialog('Clear all?', 'Everything will be deleted'), 
            'chat-theme': () => this.showToast('Chat theme settings opened'), 
            'font-size': () => this.showToast('Font size settings opened'), 
            'advanced-settings': () => this.showToast('Advanced settings opened'), 
            'message-privacy': () => this.showToast('Message privacy settings opened'), 
            'last-seen': () => this.showToast('Last seen settings opened'), 
            'security': () => this.showToast('Security settings opened') 
        }; 
        
        if (actions[action]) { 
            actions[action](); 
        } 
    },

    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.querySelector('.private-chat').appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }, 100);
    },

    showConfirmDialog(title, message) {
        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog';
        dialog.innerHTML = `
            <div class="confirm-container">
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="confirm-actions">
                    <button class="cancel-btn">Cancel</button>
                    <button class="confirm-btn">Confirm</button>
                </div>
            </div>
        `;

        document.querySelector('.private-chat').appendChild(dialog);
        
        setTimeout(() => dialog.classList.add('show'), 100);

        dialog.querySelector('.cancel-btn').onclick = () => {
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
        };

        dialog.querySelector('.confirm-btn').onclick = () => {
            dialog.classList.remove('show');
            setTimeout(() => {
                dialog.remove();
                this.showToast('Action completed');
            }, 300);
        };
    },

    generateProfileView() {
        return `
            <div class="profile-overlay">
                <div class="profile-container">
                    <div class="profile-header">
                        <button class="close-profile">
                            <i class="ri-arrow-left-line"></i>
                        </button>
                        <h2>Profile</h2>
                        ${!this.activeChatData.user.contact ? `
                            <button class="add-contact-btn">
                                <i class="ri-user-add-line"></i>
                                Add to Contacts
                            </button>
                        ` : ''}
                    </div>

                    <div class="profile-main">
                        <div class="profile-avatar">
                            <img src="${this.activeChatData.user.avatar}" alt="${this.activeChatData.user.name}">
                            <span class="status-dot ${this.activeChatData.user.status}"></span>
                        </div>
                        <h3>${this.activeChatData.user.name}</h3>
                        <p class="username">${this.activeChatData.user.username}</p>
                        <p class="bio">${this.activeChatData.user.bio}</p>
                        
                        <div class="categories">
                            ${this.activeChatData.user.categories.map(category => `
                                <span class="category-tag">${category}</span>
                            `).join('')}
                        </div>

                        <div class="profile-stats">
                            <div class="stat">
                                <i class="ri-user-shared-line"></i>
                                <span>${this.activeChatData.user.mutualContacts} mutual contacts</span>
                            </div>
                            <div class="stat">
                                <i class="ri-calendar-line"></i>
                                <span>Joined ${this.formatJoinDate(this.activeChatData.user.joinDate)}</span>
                            </div>
                        </div>

                        ${this.activeChatData.user.links.length > 0 ? `
                            <div class="profile-links">
                                ${this.activeChatData.user.links.map(link => `
                                    <a href="${link.url}" target="_blank" class="profile-link">
                                        <i class="ri-${link.type}-line"></i>
                                        <span>${link.type.charAt(0).toUpperCase() + link.type.slice(1)}</span>
                                    </a>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>

                    <div class="shared-content">
                        <div class="tabs">
                            <button class="tab active" data-tab="media">
                                <i class="ri-image-line"></i>
                                Media
                            </button>
                            <button class="tab" data-tab="files">
                                <i class="ri-file-line"></i>
                                Files
                            </button>
                            <button class="tab" data-tab="links">
                                <i class="ri-links-line"></i>
                                Links
                            </button>
                            <button class="tab" data-tab="voice">
                                <i class="ri-mic-line"></i>
                                Voice
                            </button>
                        </div>

                        <div class="tab-content active" id="media">
                            <div class="media-grid">
                                ${this.getSharedMedia()}
                            </div>
                        </div>

                        <div class="tab-content" id="files">
                            <div class="files-list">
                                ${this.getSharedFiles()}
                            </div>
                        </div>

                        <div class="tab-content" id="links">
                            <div class="links-list">
                                ${this.getSharedLinks()}
                            </div>
                        </div>

                        <div class="tab-content" id="voice">
                            <div class="voice-list">
                                ${this.getSharedVoiceMessages()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    getSharedMedia() {
        return this.activeChatData.messages
            .filter(msg => msg.type === 'image')
            .map(msg => `
                <div class="media-item">
                    <img src="${msg.content}" alt="Shared media">
                </div>
            `).join('');
    },

    getSharedFiles() {
        return this.activeChatData.messages
            .filter(msg => msg.type === 'file')
            .map(msg => `
                <div class="file-item">
                    <i class="ri-file-line"></i>
                    <div class="file-info">
                        <span>${msg.fileName}</span>
                        <small>${this.formatFileSize(msg.fileSize)}</small>
                    </div>
                    <button class="download-btn">
                        <i class="ri-download-line"></i>
                    </button>
                </div>
            `).join('');
    },

    getSharedLinks() {
        return this.activeChatData.messages
            .filter(msg => msg.type === 'text' && msg.content.includes('http'))
            .map(msg => `
                <div class="link-item">
                    <i class="ri-link"></i>
                    <a href="${msg.content}" target="_blank">${msg.content}</a>
                </div>
            `).join('');
    },

    getSharedVoiceMessages() {
        return this.activeChatData.messages
            .filter(msg => msg.type === 'voice')
            .map(msg => `
                <div class="voice-item">
                    <i class="ri-mic-line"></i>
                    <div class="voice-info">
                        <span>${this.formatMessageTime(msg.time)}</span>
                        <div class="voice-duration">${msg.duration}</div>
                    </div>
                    <button class="play-btn">
                        <i class="ri-play-line"></i>
                    </button>
                </div>
            `).join('');
    },

    initializeProfile() {
        document.querySelector('.chat__user-info').addEventListener('click', () => {
            this.showProfile();
        });
    },

    showProfile() {
    const chatContainer = document.querySelector('.private-chat');
    if (!chatContainer) {
        console.error('Chat container not found');
        return;
    }

    // Remove any existing overlay first
    const existingOverlay = chatContainer.querySelector('.profile-overlay');
    if (existingOverlay) {
        existingOverlay.remove();
    }

    // Insert the new overlay
    chatContainer.insertAdjacentHTML('beforeend', this.generateProfileView());
    
    // Get the newly created overlay
    const overlay = chatContainer.querySelector('.profile-overlay');
    
    // Initialize events
    this.initializeProfileEvents(overlay); // Pass the overlay reference
    
    // Show the overlay
    setTimeout(() => {
        overlay.classList.add('show');
    }, 50);
},

    initializeProfileEvents(overlay) {
    if (!overlay) return;
    
    const profileAvatar = overlay.querySelector('.profile-avatar img');
            if (profileAvatar) {
                profileAvatar.addEventListener('click', () => {
                    this.showImageViewer(this.activeChatData.user.avatar, this.activeChatData.user.name);
                });
            }

    // Close profile button
    const closeButton = overlay.querySelector('.close-profile');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            overlay.classList.remove('show');
            setTimeout(() => overlay.remove(), 300);
        });
    }

    // Tab switching
    const tabs = overlay.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            overlay.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            overlay.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const contentId = tab.dataset.tab;
            const content = overlay.querySelector(`#${contentId}`);
            if (content) {
                content.classList.add('active');
            }
        });
    });

    // Add to contacts
    const addContactBtn = overlay.querySelector('.add-contact-btn');
    if (addContactBtn) {
        addContactBtn.addEventListener('click', () => {
            this.activeChatData.user.contact = true;
            this.showToast('Added to contacts');
            addContactBtn.remove();
        });
    }
},

showImageViewer(imageSrc, userName) {
        const viewer = document.createElement('div');
        viewer.className = 'image-viewer-overlay';
        viewer.innerHTML = `
            <div class="image-viewer-container">
                <div class="image-viewer-header">
                    <div class="viewer-user-info">
                        <img src="${this.activeChatData.user.avatar}" alt="${userName}" class="viewer-user-avatar">
                        <span>${userName}</span>
                    </div>
                    <div class="viewer-actions">
                        <button class="viewer-action-btn" title="Download" data-action="download">
                            <i class="ri-download-line"></i>
                            <span>Download</span>
                        </button>
                        <button class="viewer-action-btn" title="Report" data-action="report">
                            <i class="ri-flag-line"></i>
                            <span>Report</span>
                        </button>
                        <button class="viewer-close-btn">
                            <i class="ri-close-line"></i>
                        </button>
                    </div>
                </div>
                <div class="image-viewer-content">
                    <img src="${imageSrc}" alt="${userName}'s profile picture">
                </div>
            </div>
        `;

        document.body.appendChild(viewer);
        
        // Add show class after a small delay for animation
        setTimeout(() => viewer.classList.add('show'), 50);

        // Handle close button
        const closeBtn = viewer.querySelector('.viewer-close-btn');
        closeBtn.addEventListener('click', () => {
            viewer.classList.remove('show');
            setTimeout(() => viewer.remove(), 300);
        });

        // Handle click outside to close
        viewer.addEventListener('click', (e) => {
            if (e.target === viewer) {
                viewer.classList.remove('show');
                setTimeout(() => viewer.remove(), 300);
            }
        });

        // Handle download
        const downloadBtn = viewer.querySelector('[data-action="download"]');
        downloadBtn.addEventListener('click', () => {
            this.downloadImage(imageSrc, userName);
        });

        // Handle report
        const reportBtn = viewer.querySelector('[data-action="report"]');
        reportBtn.addEventListener('click', () => {
            this.showReportDialog(userName);
        });
    },

    downloadImage(imageSrc, userName) {
        // Create a temporary link to download the image
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = `${userName}_profile_picture.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        this.showToast('Image downloaded successfully');
    },

    showReportDialog(userName) {
        const dialog = document.createElement('div');
        dialog.className = 'report-dialog';
        dialog.innerHTML = `
            <div class="report-container">
                <h3>Report Profile Picture</h3>
                <p>Why are you reporting ${userName}'s profile picture?</p>
                <div class="report-options">
                    <label class="report-option">
                        <input type="radio" name="report-reason" value="inappropriate">
                        <span>Inappropriate content</span>
                    </label>
                    <label class="report-option">
                        <input type="radio" name="report-reason" value="fake">
                        <span>Fake profile picture</span>
                    </label>
                    <label class="report-option">
                        <input type="radio" name="report-reason" value="offensive">
                        <span>Offensive content</span>
                    </label>
                    <label class="report-option">
                        <input type="radio" name="report-reason" value="other">
                        <span>Other</span>
                    </label>
                </div>
                <textarea placeholder="Additional details (optional)" maxlength="500"></textarea>
                <div class="report-actions">
                    <button class="cancel-btn">Cancel</button>
                    <button class="submit-btn">Submit Report</button>
                </div>
            </div>
        `;

        document.body.appendChild(dialog);
        setTimeout(() => dialog.classList.add('show'), 50);

        // Handle cancel
        dialog.querySelector('.cancel-btn').addEventListener('click', () => {
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
        });

        // Handle submit
        dialog.querySelector('.submit-btn').addEventListener('click', () => {
            const reason = dialog.querySelector('input[name="report-reason"]:checked')?.value;
            const details = dialog.querySelector('textarea').value;
            
            if (!reason) {
                this.showToast('Please select a reason for reporting');
                return;
            }

            // Here you would typically send this to your backend
            console.log('Report submitted:', { reason, details });
            
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
            this.showToast('Report submitted successfully');
        });
    },

    formatJoinDate(date) {
        return new Date(date).toLocaleDateString('en-US', { 
            month: 'long',
            year: 'numeric'
        });
    },

    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    },
    
    initializeEmojiPicker() {
        const emojiBtn = document.querySelector('[data-action="emoji"]');
        if (emojiBtn) {
            emojiBtn.addEventListener('click', () => {
                this.toggleEmojiPicker();
            });
        }

        // Close emoji picker when clicking outside
        document.addEventListener('click', (e) => {
            const emojiPicker = document.querySelector('.emoji-picker');
            const emojiBtn = document.querySelector('[data-action="emoji"]');
            if (emojiPicker && !emojiPicker.contains(e.target) && !emojiBtn.contains(e.target)) {
                emojiPicker.remove();
            }
        });
    },

    generateEmojiPicker() {
        return `
            <div class="emoji-picker">
                <div class="emoji-picker__header">
                    <div class="emoji-search">
                        <i class="ri-search-line"></i>
                        <input type="text" placeholder="Search emoji...">
                    </div>
                    <div class="emoji-categories">
                        ${Object.entries(this.emojiCategories).map(([category, data]) => `
                            <button class="category-btn" data-category="${category}">
                                ${data.icon}
                            </button>
                        `).join('')}
                    </div>
                </div>
                <div class="emoji-content">
                    ${Object.entries(this.emojiCategories).map(([category, data]) => `
                        <div class="emoji-category" data-category="${category}">
                            <h3 class="category-title">${category}</h3>
                            <div class="emoji-grid">
                                ${this.generateEmojisForCategory(data.range)}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    generateEmojisForCategory(ranges) {
        let emojis = '';
        ranges.forEach(([start, end]) => {
            for (let codePoint = start; codePoint <= end; codePoint++) {
                const emoji = String.fromCodePoint(codePoint);
                emojis += `
                    <button class="emoji-btn" data-emoji="${emoji}">
                        ${emoji}
                    </button>
                `;
            }
        });
        return emojis;
    },

    toggleEmojiPicker() {
        const existingPicker = document.querySelector('.emoji-picker');
        if (existingPicker) {
            existingPicker.remove();
            return;
        }

        const emojiBtn = document.querySelector('[data-action="emoji"]');
        const inputContainer = document.querySelector('.input__container');
        
        inputContainer.insertAdjacentHTML('beforeend', this.generateEmojiPicker());
        
        const emojiPicker = document.querySelector('.emoji-picker');
        
        // Position the picker
        const btnRect = emojiBtn.getBoundingClientRect();
        emojiPicker.style.bottom = `${window.innerHeight - btnRect.top + 10}px`;
        emojiPicker.style.left = `${btnRect.left}px`;

        // Initialize Twemoji for the picker
        twemoji.parse(emojiPicker, {
            folder: 'svg',
            ext: '.svg'
        });

        this.initializeEmojiEvents();
    },

    initializeEmojiEvents() {
        const picker = document.querySelector('.emoji-picker');
        if (!picker) return;

        // Category switching
        picker.querySelectorAll('.category-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.dataset.category;
                const categorySection = picker.querySelector(`.emoji-category[data-category="${category}"]`);
                categorySection.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Emoji selection
        picker.querySelectorAll('.emoji-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const emoji = btn.dataset.emoji;
                this.insertEmoji(emoji);
            });
        });

        // Search functionality using Twemoji's data
        const searchInput = picker.querySelector('.emoji-search input');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            this.filterEmojis(searchTerm);
        });
    },

    insertEmoji(emoji) {
        const messageInput = document.querySelector('.message__input');
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        
        // Create a span to hold the Twemoji
        const span = document.createElement('span');
        span.textContent = emoji;
        
        // Replace the emoji with Twemoji
        twemoji.parse(span, {
            folder: 'svg',
            ext: '.svg'
        });
        
        range.insertNode(span);
        range.collapse(false);
        
        // Trigger input event
        messageInput.dispatchEvent(new Event('input'));
    },

    filterEmojis(searchTerm) {
        const emojiButtons = document.querySelectorAll('.emoji-btn');
        emojiButtons.forEach(btn => {
            const emoji = btn.dataset.emoji;
            const shouldShow = this.getEmojiName(emoji).includes(searchTerm);
            btn.style.display = shouldShow ? '' : 'none';
        });
    },

    getEmojiName(emoji) {
        // Use CLDR data for emoji names (simplified version)
        const names = {
            '😊': 'smiling face',
            '👋': 'waving hand',
            '🦊': 'fox',
            '🍔': 'hamburger',
            '⚽': 'soccer ball',
            '💡': 'light bulb'
            // Add more as needed
        };
        return names[emoji] || emoji;
    },
    

    initializeAttachButton() {
        const attachBtn = document.querySelector('[data-action="attach"]');
        if (attachBtn) {
            attachBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleAttachMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const attachMenu = document.querySelector('.attach-menu');
                if (attachMenu && !attachMenu.contains(e.target) && !attachBtn.contains(e.target)) {
                    this.closeAttachMenu();
                }
            });
        }
    },

    generateAttachMenu() {
        return `
            <div class="attach-menu">
                ${this.activeChatData.attachmentOptions.map((option, index) => `
                    <div class="attach-option" data-type="${option.type}" style="--delay: ${index * 0.05}s">
                        <div class="attach-option__icon">
                            <i class="${option.icon}"></i>
                            ${option.accept ? `
                                <input type="file" accept="${option.accept}" class="file-input" hidden>
                            ` : ''}
                        </div>
                        <span class="attach-option__label">${option.label}</span>
                    </div>
                `).join('')}
                <div class="attach-menu__arrow"></div>
            </div>
        `;
    },

    toggleAttachMenu() {
        const existingMenu = document.querySelector('.attach-menu');
        if (existingMenu) {
            this.closeAttachMenu();
            return;
        }

        const attachBtn = document.querySelector('[data-action="attach"]');
        const inputContainer = document.querySelector('.input__container');
        
        inputContainer.insertAdjacentHTML('beforeend', this.generateAttachMenu());
        
        const attachMenu = document.querySelector('.attach-menu');
        
        // Position the menu
        const btnRect = attachBtn.getBoundingClientRect();
        attachMenu.style.bottom = `${window.innerHeight - btnRect.top + 10}px`;
        attachMenu.style.left = `${btnRect.left}px`;

        // Add show class after a small delay for animation
        requestAnimationFrame(() => {
            attachMenu.classList.add('show');
        });

        this.initializeAttachmentEvents();
    },

    closeAttachMenu() {
        const attachMenu = document.querySelector('.attach-menu');
        if (attachMenu) {
            attachMenu.classList.remove('show');
            setTimeout(() => attachMenu.remove(), 300);
        }
    },

    initializeAttachmentEvents() {
        const menu = document.querySelector('.attach-menu');
        if (!menu) return;

        menu.querySelectorAll('.attach-option').forEach(option => {
            option.addEventListener('click', () => {
                const type = option.dataset.type;
                const fileInput = option.querySelector('.file-input');

                if (fileInput) {
                    fileInput.click();
                    fileInput.addEventListener('change', (e) => {
                        this.handleFileSelection(e.target.files, type);
                    });
                } else {
                    this.handleAttachmentType(type);
                }
            });
        });
    },

    handleFileSelection(files, type) {
        if (!files.length) return;

        Array.from(files).forEach(file => {
            if (type === 'media') {
                mediaEditorUI.initializeEditor(files[0]);
            } else if (type === 'document') {
                this.handleDocumentPreview(file);
            } else if (type === 'audio') {
                this.handleAudioPreview(file);
            }
        });

        this.closeAttachMenu();
    },

    handleMediaPreview(file) {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.showToast(`Image "${file.name}" ready to send`);
                // Add preview to input area
                this.addAttachmentPreview('image', {
                    name: file.name,
                    url: e.target.result,
                    size: this.formatFileSize(file.size)
                });
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('video/')) {
            this.showToast(`Video "${file.name}" ready to send`);
            this.addAttachmentPreview('video', {
                name: file.name,
                size: this.formatFileSize(file.size)
            });
        }
    },

    handleDocumentPreview(file) {
        this.showToast(`Document "${file.name}" ready to send`);
        this.addAttachmentPreview('document', {
            name: file.name,
            size: this.formatFileSize(file.size)
        });
    },

    handleAudioPreview(file) {
        this.showToast(`Audio "${file.name}" ready to send`);
        this.addAttachmentPreview('audio', {
            name: file.name,
            size: this.formatFileSize(file.size)
        });
    },

    handleAttachmentType(type) {
        switch (type) {
            case 'location':
                this.showLocationPicker();
                break;
            case 'contact':
                this.showContactPicker();
                break;
        }
        this.closeAttachMenu();
    },

    addAttachmentPreview(type, data) {
        const previewContainer = document.createElement('div');
        previewContainer.className = 'attachment-preview';
        
        previewContainer.innerHTML = `
            <div class="attachment-preview__content">
                <div class="attachment-preview__icon">
                    <i class="${this.getAttachmentIcon(type)}"></i>
                </div>
                <div class="attachment-preview__info">
                    <span class="attachment-preview__name">${data.name}</span>
                    <span class="attachment-preview__size">${data.size}</span>
                </div>
                <button class="attachment-preview__remove">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            ${type === 'image' ? `
                <div class="attachment-preview__image">
                    <img src="${data.url}" alt="${data.name}">
                </div>
            ` : ''}
        `;

        const inputContainer = document.querySelector('.input__container');
        inputContainer.insertBefore(previewContainer, inputContainer.firstChild);

        // Add remove event
        previewContainer.querySelector('.attachment-preview__remove').addEventListener('click', () => {
            previewContainer.remove();
        });
    },

    getAttachmentIcon(type) {
        const icons = {
            image: 'ri-image-line',
            video: 'ri-video-line',
            document: 'ri-file-text-line',
            audio: 'ri-music-2-line'
        };
        return icons[type] || 'ri-file-line';
    },

    formatFileSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
};

export { privateChatUI };
