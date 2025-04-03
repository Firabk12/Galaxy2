import { mediaEditorUI } from './mediaEditor.js';

const groupChatUI = {
    activeChatData: {
        group: {
            name: "Project Team",
            avatar: "img/group1.jpg",
            description: "Frontend Development Team",
            memberCount: 156,
            onlineCount: 23,
            type: "public", // or "private"
            created: "2025-03-15",
            pinnedMessages: [],
            admins: ["Firabk12", "Abel", "Biruk"],
            members: [
                {
                    name: "Firabk12",
                    role: "owner",
                    avatar: "img/default.jpg",
                    status: "online",
                    lastSeen: null
                },
                {
                    name: "Abel",
                    role: "admin",
                    avatar: "img/Abel.jpg",
                    status: "offline",
                    lastSeen: "2025-04-02 19:45:00"
                },
                {
                    name: "Biruk",
                    role: "admin",
                    avatar: "img/Biruk.jpg",
                    status: "online",
                    lastSeen: null
                }
                // More members...
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
            },
            {
                icon: 'ri-survey-line',
                label: 'Poll',
                type: 'poll'
            }
        ],

        messages: [
            {
                id: 1,
                sender: "Abel",
                senderAvatar: "img/Abel.jpg",
                time: "2025-04-02 19:30:00",
                content: "Hey team! I've just pushed the new UI updates 🚀",
                type: "text",
                reactions: [
                    { emoji: "👍", count: 3, users: ["Firabk12", "Biruk", "Sam"] },
                    { emoji: "🎉", count: 2, users: ["Nolawit", "Deborah"] }
                ]
            },
            {
                id: 2,
                sender: "Biruk",
                senderAvatar: "img/Biruk.jpg",
                time: "2025-04-02 19:32:00",
                content: "Awesome! The new animations look smooth.",
                type: "text",
                reactions: [
                    { emoji: "❤️", count: 1, users: ["Abel"] }
                ]
            },
            {
                id: 3,
                sender: "Abel",
                senderAvatar: "img/Abel.jpg",
                time: "2025-04-02 19:35:00",
                content: "img/Nolawit.jpg",
                type: "image",
                caption: "Here's a preview of the new dashboard",
                reactions: [
                    { emoji: "🔥", count: 4, users: ["Firabk12", "Biruk", "Sam", "Nolawit"] }
                ]
            },
            {
                id: 4,
                sender: "Firabk12",
                senderAvatar: "img/default.jpg",
                time: "2025-04-02 19:40:00",
                type: "poll",
                content: {
                    question: "When should we schedule the next team meeting?",
                    options: [
                        { text: "Tomorrow 2 PM", votes: ["Abel", "Sam"], count: 2 },
                        { text: "Tomorrow 4 PM", votes: ["Biruk", "Nolawit", "Firabk12"], count: 3 },
                        { text: "Friday 2 PM", votes: [], count: 0 }
                    ],
                    totalVotes: 5,
                    expiresAt: "2025-04-03 19:40:00"
                }
            }
        ]
    },

    setActiveChatData(chatData) {
        this.activeChatData = {
            ...this.activeChatData,
            ...chatData,
            group: {
                ...this.activeChatData.group,
                ...chatData.group
            }
        };
    },

    getGroupChatInterface() {
        return `
            <div class="group-chat">
                <div class="chat__header">
                    <div class="chat__group-info">
                        <div class="chat-back-btn">
                            <i class="ri-arrow-left-line"></i>
                        </div>
                        <div class="group-avatar">
                            <img src="${this.activeChatData.group.avatar}" alt="${this.activeChatData.group.name}">
                        </div>
                        <div class="group-details">
                            <h3>${this.activeChatData.group.name}</h3>
                            <div class="group-meta">
                                <span>${this.activeChatData.group.memberCount} members, ${this.activeChatData.group.onlineCount} online</span>
                            </div>
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
                        <button class="action-btn" data-action="members" title="Group members">
                            <i class="ri-team-line"></i>
                        </button>
                        <button class="action-btn" data-action="more" title="More options">
                            <i class="ri-more-2-fill"></i>
                        </button>
                    </div>
                </div>

                <div class="chat__messages">
                    <div class="messages__container">
                        ${this.generateMessages()}
                    </div>
                </div>

                <div class="chat__input">
                    <div class="input__container">
                        <div class="input__left-actions">
                            <button class="action-btn" data-action="emoji" title="Add emoji">
                                <i class="ri-emotion-happy-line"></i>
                            </button>
                            <button class="action-btn" data-action="attach" title="Attach file">
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

        return this.activeChatData.messages.map((message) => {
            const isOwnMessage = message.sender === "Firabk12";
            const messageClass = isOwnMessage ? 'message--sent' : 'message--received';

            return `
                <div class="message ${messageClass}">
                    ${!isOwnMessage ? `
                        <div class="message__avatar">
                            <img src="${message.senderAvatar}" alt="${message.sender}">
                        </div>
                    ` : ''}
                    <div class="message__content">
                        ${!isOwnMessage ? `<div class="message-author">${message.sender}</div>` : ''}
                        ${this.getMessageContent(message)}
                        ${this.getMessageReactions(message)}
                        <div class="message__info">
                            <span class="message__time">${this.formatMessageTime(message.time)}</span>
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
            case 'poll':
                return this.generatePollContent(message.content);
            case 'text':
            default:
                return `<p>${this.formatMessageText(message.content)}</p>`;
        }
    },

    generatePollContent(pollData) {
        const totalVotes = pollData.totalVotes;
        const isExpired = new Date(pollData.expiresAt) < new Date();

        return `
            <div class="poll-container ${isExpired ? 'expired' : ''}">
                <div class="poll-question">${pollData.question}</div>
                <div class="poll-options">
                    ${pollData.options.map(option => {
                        const percentage = totalVotes > 0 ? (option.count / totalVotes * 100) : 0;
                        return `
                            <div class="poll-option" data-votes="${option.votes.join(',')}">
                                <div class="poll-progress" style="width: ${percentage}%"></div>
                                <div class="poll-option-text">
                                    <span>${option.text}</span>
                                    <span class="poll-votes">${option.count} votes</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="poll-footer">
                    <span>${totalVotes} votes</span>
                    ${isExpired ? '<span class="poll-expired">Poll ended</span>' : ''}
                </div>
            </div>
        `;
    },

    getMessageReactions(message) {
        if (!message.reactions || message.reactions.length === 0) return '';

        return `
            <div class="message-reactions">
                ${message.reactions.map(reaction => `
                    <div class="reaction" data-users="${reaction.users.join(',')}" title="${reaction.users.join(', ')}">
                        ${reaction.emoji} ${reaction.count}
                    </div>
                `).join('')}
            </div>
        `;
    },

    formatMessageText(text) {
        return text.replace(/\n/g, '<br>');
    },

    formatMessageTime(timestamp) {
        const messageDate = new Date(timestamp);
        const now = new Date('2025-04-02 20:12:17');
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

    initializeChat() {
        this.initializeMessageInput();
        this.initializeScrolling();
        this.initializeActions();
        this.initializeMoreMenu();               
        this.initializePollEvents();
        this.initializeReactions();
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

            voiceSendBtn.addEventListener('click', () => {
                const message = input.textContent.trim();
                if (message) {
                    this.sendMessage(message);
                    input.textContent = '';
                    handleInput();
                } else {
                    //console.log('Starting voice message...');
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

    initializeActions() {
        const actions = {
            search: () => this.showSearchOverlay(),
            call: () => this.showCallDialog('voice'),
            video: () => this.showCallDialog('video'),
            members: () => this.toggleMembersList(),
            more: () => this.toggleMoreMenu()
        };

        document.querySelectorAll('.chat__actions .action-btn').forEach(btn => {
            const action = btn.getAttribute('data-action');
            if (action && actions[action]) {
                btn.addEventListener('click', () => actions[action]());
            }
        });
        
        const groupInfo = document.querySelector('.chat__group-info');
    if (groupInfo) {
        groupInfo.addEventListener('click', () => this.toggleGroupInfo());
    }
    },
    
    toggleGroupInfo() {
    const existingInfo = document.querySelector('.group-info-sidebar');
    if (existingInfo) {
        existingInfo.classList.toggle('show');
        return;
    }

    const sidebar = document.createElement('div');
    sidebar.className = 'group-info-sidebar';
    
    const createdDate = new Date(this.activeChatData.group.created);
    const formattedDate = createdDate.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
    });

    sidebar.innerHTML = `
        <div class="info-header">
            <h3>Group Info</h3>
            <button class="close-info">
                <i class="ri-close-line"></i>
            </button>
        </div>
        
        <div class="info-content">
            <div class="group-info-main">
                <div class="group-info-avatar">
                    <img src="${this.activeChatData.group.avatar}" alt="${this.activeChatData.group.name}">
                    <button class="edit-avatar" title="Change group photo">
                        <i class="ri-camera-line"></i>
                    </button>
                </div>
                <div class="group-info-name">
                    <h4>${this.activeChatData.group.name}</h4>
                    <span class="group-type">${this.activeChatData.group.type} group</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section-header">
                    <i class="ri-information-line"></i>
                    <span>About</span>
                </div>
                <p class="group-description">
                    ${this.activeChatData.group.description}
                </p>
                <div class="group-meta-info">
                    <span>Created on ${formattedDate}</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section-header">
                    <i class="ri-group-line"></i>
                    <span>Members</span>
                    <span class="member-count">${this.activeChatData.group.memberCount}</span>
                </div>
                <div class="info-members-list">
                    ${this.activeChatData.group.members.map(member => `
                        <div class="info-member-item">
                            <div class="member-avatar">
                                <img src="${member.avatar}" alt="${member.name}">
                                <span class="status-dot ${member.status}"></span>
                            </div>
                            <div class="member-info">
                                <span class="member-name">${member.name}</span>
                                <span class="member-role">${member.role}</span>
                            </div>
                            ${member.role === 'owner' || member.role === 'admin' ? 
                                `<span class="role-badge">${member.role}</span>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="info-section">
                <div class="info-section-header">
                    <i class="ri-image-line"></i>
                    <span>Media</span>
                </div>
                <div class="media-grid grid-3">
                    <div class="media-item">
                        <img src="img/Nolawit.jpg" alt="Shared media">
                    </div>
                    <!-- Add more media items here -->
                </div>
            </div>

            <div class="danger-zone">
                <button class="danger-btn" data-action="leave">
                    <i class="ri-logout-box-line"></i>
                    Leave Group
                </button>
            </div>
        </div>
    `;

    document.querySelector('.group-chat').appendChild(sidebar);

    // Initialize event listeners
    sidebar.querySelector('.close-info').addEventListener('click', () => {
        sidebar.classList.remove('show');
    });

    sidebar.querySelector('[data-action="leave"]').addEventListener('click', () => {
        this.showConfirmDialog({
            title: 'Leave Group',
            message: 'Are you sure you want to leave this group? You\'ll need to be added back to rejoin.',
            confirmText: 'Leave',
            cancelText: 'Stay',
            onConfirm: () => {
                console.log('Leaving group...');
                // Add leave functionality
            },
            type: 'danger'
        });
    });

    // Add show class after a frame to trigger animation
    requestAnimationFrame(() => sidebar.classList.add('show'));
},

    sendMessage(content) {
        const newMessage = {
            id: this.activeChatData.messages.length + 1,
            sender: "Firabk12",
            senderAvatar: "img/default.jpg",
            time: new Date().toISOString(),
            content: content,
            type: "text",
            reactions: []
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

    toggleMembersList() {
        const membersList = document.querySelector('.members-sidebar');
        if (!membersList) {
            document.querySelector('.group-chat').insertAdjacentHTML('beforeend', this.generateMembersList());
            this.initializeMembersListEvents();
        } else {
            membersList.classList.toggle('show');
        }
    },

    generateMembersList() {
        return `
            <div class="members-sidebar">
                <div class="members-header">
                    <h3>Group Members (${this.activeChatData.group.memberCount})</h3>
                    <button class="close-members">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="members-search">
                    <i class="ri-search-line"></i>
                    <input type="text" placeholder="Search members...">
                </div>
                <div class="members-list">
                    ${this.activeChatData.group.members.map(member => `
                        <div class="member-item">
                            <div class="member-avatar">
                                <img src="${member.avatar}" alt="${member.name}">
                                <span class="status-dot ${member.status}"></span>
                            </div>
                            <div class="member-info">
                                <span class="member-name">${member.name}</span>
                                <span class="member-role">${member.role}</span>
                            </div>
                            ${this.getMemberActions(member)}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    getMemberActions(member) {
        const isCurrentUserAdmin = this.activeChatData.group.admins.includes("Firabk12");
        if (!isCurrentUserAdmin || member.name === "Firabk12") return '';

        return `
            <div class="member-actions">
                <button class="action-btn" title="More actions">
                    <i class="ri-more-2-fill"></i>
                </button>
            </div>
        `;
    },

    initializeMembersListEvents() {
        const sidebar = document.querySelector('.members-sidebar');
        if (!sidebar) return;

        sidebar.querySelector('.close-members').addEventListener('click', () => {
            sidebar.classList.remove('show');
        });

        const searchInput = sidebar.querySelector('.members-search input');
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            sidebar.querySelectorAll('.member-item').forEach(item => {
                const name = item.querySelector('.member-name').textContent.toLowerCase();
                item.style.display = name.includes(searchTerm) ? '' : 'none';
            });
        });
    },

    initializePollEvents() {
        document.querySelectorAll('.poll-option').forEach(option => {
            option.addEventListener('click', () => {
                const hasVoted = option.getAttribute('data-votes').includes("Firabk12");
                if (!hasVoted) {
                    //console.log('Voted for:', option.querySelector('.poll-option-text').textContent);
                }
            });
        });
    },

    initializeReactions() {
        document.querySelectorAll('.message-reactions').forEach(container => {
            container.addEventListener('click', (e) => {
                const reaction = e.target.closest('.reaction');
                if (reaction) {
                    //console.log('Reacted with:', reaction.textContent.trim());
                }
            });
        });
    },

    initializeMoreMenu() {
        const moreBtn = document.querySelector('[data-action="more"]');
        if (!moreBtn) return;

        const menu = document.createElement('div');
        menu.className = 'more-menu';
        menu.innerHTML = `
            <div class="more-menu__content">
                <button class="menu-item" data-action="pin">
                    <i class="ri-pushpin-line"></i>
                    Pin Group
                </button>
                <button class="menu-item" data-action="mute">
                    <i class="ri-notification-off-line"></i>
                    Mute Notifications
                </button>
                <button class="menu-item" data-action="clear">
                    <i class="ri-delete-bin-line"></i>
                    Clear Chat
                </button>
                <button class="menu-item warning" data-action="leave">
                    <i class="ri-logout-box-line"></i>
                    Leave Group
                </button>
            </div>
        `;

        document.querySelector('.group-chat').appendChild(menu);

        menu.addEventListener('click', (e) => {
            const action = e.target.closest('.menu-item')?.dataset.action;
            if (action) {
                this.handleMoreMenuAction(action);
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('[data-action="more"]') && 
                !e.target.closest('.more-menu')) {
                this.toggleMoreMenu(false);
            }
        });
    },

    toggleMoreMenu(show) {
        const menu = document.querySelector('.more-menu');
        if (!menu) return;

        if (show === undefined) {
            menu.classList.toggle('show');
        } else {
            menu.classList.toggle('show', show);
        }
    },

    // Update the handleMoreMenuAction method in groupChatUI:

handleMoreMenuAction(action) {
    switch(action) {
        case 'pin':
            //console.log('Pinning group...');
            break;
        case 'mute':
            //console.log('Muting notifications...');
            break;
        case 'clear':
            this.showConfirmDialog({
                title: 'Clear Chat History',
                message: 'Are you sure you want to clear all messages? This action cannot be undone.',
                confirmText: 'Clear',
                cancelText: 'Cancel',
                onConfirm: () => {
                    //console.log('Clearing chat...');
                    // Add clear functionality
                },
                type: 'warning'
            });
            break;
        case 'leave':
            this.showConfirmDialog({
                title: 'Leave Group',
                message: 'Are you sure you want to leave this group? You\'ll need to be added back to rejoin.',
                confirmText: 'Leave',
                cancelText: 'Stay',
                onConfirm: () => {
                    //console.log('Leaving group...');
                    // Add leave functionality
                },
                type: 'danger'
            });
            break;
    }
    this.toggleMoreMenu(false);
},

showConfirmDialog({ title, message, confirmText, cancelText, onConfirm, type = 'default' }) {
    const dialog = document.createElement('div');
    dialog.className = 'confirm-dialog';
    dialog.innerHTML = `
        <div class="confirm-container ${type}">
            <div class="confirm-header">
                <h3>${title}</h3>
                <button class="close-confirm">
                    <i class="ri-close-line"></i>
                </button>
            </div>
            <div class="confirm-content">
                <p>${message}</p>
            </div>
            <div class="confirm-actions">
                <button class="cancel-btn">${cancelText}</button>
                <button class="confirm-btn">${confirmText}</button>
            </div>
        </div>
    `;

    document.body.appendChild(dialog);

    // Add show class after a frame to trigger animation
    requestAnimationFrame(() => dialog.classList.add('show'));

    const closeDialog = () => {
        dialog.classList.remove('show');
        setTimeout(() => dialog.remove(), 300);
    };

    dialog.querySelector('.close-confirm').addEventListener('click', closeDialog);
    dialog.querySelector('.cancel-btn').addEventListener('click', closeDialog);
    dialog.querySelector('.confirm-btn').addEventListener('click', () => {
        onConfirm();
        closeDialog();
    });

    // Close on backdrop click
    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) closeDialog();
    });
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
                    <div class="search-input-wrapper">
                        <i class="ri-search-line"></i>
                        <input type="text" placeholder="Search in conversation...">
                    </div>
                </div>
                <div class="search-results">
                    /*<div class="search-info">
                        Start typing to search in messages
                    </div>*/
                </div>
            </div>
        `;

        document.querySelector('.group-chat').appendChild(overlay);

        const closeBtn = overlay.querySelector('.close-search');
        const searchInput = overlay.querySelector('input');

        closeBtn.addEventListener('click', () => {
            overlay.remove();
        });

        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Focus input after animation
        setTimeout(() => searchInput.focus(), 100);
    },

    handleSearch(query) {
        if (!query.trim()) {
           
        }

        // Filter messages containing the query
        const results = this.activeChatData.messages.filter(msg => 
            msg.type === 'text' && msg.content.toLowerCase().includes(query.toLowerCase())
        );

        document.querySelector('.search-results').innerHTML = results.length ? 
            results.map(msg => `
                <div class="search-result-item">
                    <div class="result-meta">
                        <span class="result-author">${msg.sender}</span>
                        <span class="result-time">${this.formatMessageTime(msg.time)}</span>
                    </div>
                    <div class="result-content">
                        ${this.highlightText(msg.content, query)}
                    </div>
                </div>
            `).join('') :
            '<div class="search-info">No messages found</div>';
    },

    highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    },

    showCallDialog(type) {
        const dialog = document.createElement('div');
        dialog.className = 'call-dialog';
        dialog.innerHTML = `
            <div class="call-container">
                <div class="call-header">
                    ${type === 'video' ? 
                        '<i class="ri-vidicon-line"></i>' : 
                        '<i class="ri-phone-line"></i>'}
                    <h3>Start ${type} call</h3>
                </div>
                <div class="group-call-info">
                    <div class="group-avatar-stack">
                        ${this.activeChatData.group.members.slice(0, 3).map(member => `
                            <img src="${member.avatar}" alt="${member.name}">
                        `).join('')}
                        ${this.activeChatData.group.members.length > 3 ? 
                            `<span class="more-members">+${this.activeChatData.group.members.length - 3}</span>` : 
                            ''}
                    </div>
                    <p>${this.activeChatData.group.name}</p>
                    <span>${this.activeChatData.group.onlineCount} online</span>
                </div>
                <div class="call-actions">
                    <button class="cancel-call">Cancel</button>
                    <button class="start-call1">
                        Start ${type} call
                        ${type === 'video' ? 
                            '<i class="ri-vidicon-fill"></i>' : 
                            '<i class="ri-phone-fill"></i>'}
                    </button>
                </div>
            </div>
        `;

        document.querySelector('.group-chat').appendChild(dialog);

        // Add animations
        requestAnimationFrame(() => dialog.classList.add('show'));

        // Event listeners
        dialog.querySelector('.cancel-call').addEventListener('click', () => {
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
        });

        dialog.querySelector('.start-call1').addEventListener('click', () => {
            this.initiateGroupCall(type);
            dialog.classList.remove('show');
            setTimeout(() => dialog.remove(), 300);
        });
    },

    initiateGroupCall(type) {
        // Here you would implement the actual call initialization
        
        const callScreen = document.createElement('div');
        callScreen.className = 'group-call-screen';
        callScreen.innerHTML = `
            <div class="call-status">
                <div class="connecting-animation">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <p>Connecting to group call...</p>
            </div>
        `;

        document.querySelector('.group-chat').appendChild(callScreen);

        // Simulate call connection
        setTimeout(() => {
            callScreen.remove();
            // Here you would implement the actual call UI
        }, 2000);
    }
};

export { groupChatUI };