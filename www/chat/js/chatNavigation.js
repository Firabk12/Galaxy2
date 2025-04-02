// Update the chatSections.all to include suggestions
import { createFilterDropdown, initializeSearch } from './searchFilter.js';
import { privateChatUI } from './privateChat.js';


const chatSections = {
    all: `
        <div class="chats__list">
            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Deborah.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Deborah</p>
                        <span class="message__time">3:45</span>
                    </div>
                    <div class="message__preview">
                        <p>Heyyy i wan to tell you smthn....</p>
                        <div class="message__badges">
                            <span class="unread__count">2</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Abel.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Abel</p>
                        <span class="message__time">3:45</span>
                    </div>
                    <div class="message__preview">
                        <p>Yeah man, she's awesome!</p>
                    </div>
                </div>
            </div>

            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Biruk.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Biruk</p>
                        <span class="message__time">3:45</span>
                    </div>
                    <div class="message__preview">
                        <p>How's the project goin?</p>
                    </div>
                </div>
            </div>

            <!-- Suggestions Section -->
            <div class="section__divider">
                <p>Suggestions</p>
            </div>

            <div class="message-wrapper suggestion">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/sam.jpg" alt="">
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Sam</p>
                    </div>
                    <div class="message__preview">
                        <p class="username">sam_ovo</p>
                    </div>
                </div>
                <div class="suggestion__actions">
                    <button class="add-contact">
                        <i class="ri-user-add-line"></i>
                    </button>
                </div>
            </div>

            <div class="message-wrapper suggestion">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Nolawit.jpg" alt="">
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Nolawit</p>
                    </div>
                    <div class="message__preview">
                        <p class="username">nola_wit</p>
                    </div>
                </div>
                <div class="suggestion__actions">
                    <button class="add-contact">
                        <i class="ri-user-add-line"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    primary: `
        <div class="chats__list">
            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Deborah.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Deborah</p>
                        <span class="message__time">3:45</span>
                    </div>
                    <div class="message__preview">
                        <p>Heyyy i wan to tell you smthn....</p>
                        <div class="message__badges">
                            <span class="unread__count">2</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Suggestions Section -->
            <div class="section__divider">
                <p>Suggestions</p>
            </div>

            <div class="message-wrapper suggestion">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/Nolawit.jpg" alt="">
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Nolawit</p>
                    </div>
                    <div class="message__preview">
                        <p class="username">nola_wit</p>
                    </div>
                </div>
                <div class="suggestion__actions">
                    <button class="add-contact">
                        <i class="ri-user-add-line"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    groups: `
        <div class="chats__list">
            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/group1.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Project Team</p>
                        <span class="message__time">4:20</span>
                    </div>
                    <div class="message__preview">
                        <p>Meeting at 5PM today...</p>
                        <div class="message__badges">
                            <span class="unread__count">5</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Suggestions Section -->
            <div class="section__divider">
                <p>Suggested Groups</p>
            </div>

            <div class="message-wrapper suggestion">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/group2.jpg" alt="">
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">UI/UX Community</p>
                    </div>
                    <div class="message__preview">
                        <p class="username">1.2k members</p>
                    </div>
                </div>
                <div class="suggestion__actions">
                    <button class="add-contact">
                        <i class="ri-group-add-line"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    archive: `
        <div class="chats__list">
            <div class="message-wrapper">
                <div class="message__photo__wrapper">
                    <div>
                        <img src="img/old_chat.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="message__displayName">
                    <div class="message__header">
                        <p class="chat__name">Old Project</p>
                        <span class="message__time">Mar 25</span>
                    </div>
                    <div class="message__preview">
                        <p>Project completed successfully!</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

function getChatPageContent() {
    return `
        <div>
            <div class="header__search">
                <h1>Chats</h1>
                <input placeholder="Search your chats">
            </div>
            <div class="filter__container">
                <p>Filter</p>
            </div>                      
        </div>
        <div class="chat__type">
            <button class="active" data-chat-type="all">
                <span>All</span>
            </button>
            <button data-chat-type="primary">
                <span>Primary</span>
            </button>
            <button data-chat-type="groups">
                <span>Groups</span>
            </button>
            <button data-chat-type="archive">
                <span>Archive</span>
            </button>
        </div>
        <div class="chat-content">
            ${chatSections.all}
        </div>
    `;
}

function initializeChatClicks() {
    const chatItems = document.querySelectorAll('.message-wrapper');
    chatItems.forEach(chat => {
        chat.addEventListener('click', () => {
            // Get elements with null checks
            const nameElement = chat.querySelector('.chat__name');
            const avatarElement = chat.querySelector('.chat__avatar img');
            const statusElement = chat.querySelector('.status-indicator');

            // Only proceed if we have at least the name
            if (nameElement) {
                const userName = nameElement.textContent;
                const userAvatar = avatarElement ? avatarElement.src : 'img/default-avatar.jpg';
                const userStatus = statusElement?.classList.contains('online') ? 'online' : 'offline';
                const currentTime = '2025-04-01 05:28:46'; // Using your current timestamp

                // Open private chat with user data
                openPrivateChat({
                    user: {
                        name: userName,
                        avatar: userAvatar,
                        status: userStatus,
                        username: `@${userName.toLowerCase().replace(/\s+/g, '_')}`,
                        lastSeen: userStatus === 'offline' ? currentTime : null
                    },
                    messages: [] // You can add initial messages here if needed
                });
            }
        });
    });
}

// Function to open private chat
function openPrivateChat(userData) {
    // Update active chat data
    privateChatUI.setActiveChatData({
        user: userData,
        messages: [
            {
                id: 1,
                sender: "Deborah",
                time: "2025-04-01 06:30:00",
                content: "Hey! Did you check out the new React 19 features? 👀",
                type: "text",
                status: "read"
            },
            {
                id: 2,
                sender: "Theodore",
                time: "2025-04-01 06:31:00",
                content: "Yeah, they're amazing! Almost as amazing as your code reviews 😊",
                type: "text",
                status: "read"
            },
            {
                id: 3,
                sender: "Deborah",
                time: "2025-04-01 06:32:00",
                content: "Stop it youu! 🙈 But seriously, what do you think about the new concurrent features?",
                type: "text",
                status: "read"
            },
            {
                id: 4,
                sender: "Theodore",
                time: "2025-04-01 06:33:00",
                content: "They're revolutionary! Speaking of revolutionary... your smile literally lights up our daily standups ✨",
                type: "text",
                status: "read"
            },
            {
                id: 5,
                sender: "Deborah",
                time: "2025-04-01 06:34:00",
                content: "img/Code.jpg",
                type: "image",
                caption: "Look at this clean code! 😍",
                status: "read"
            },
            {
                id: 6,
                sender: "Theodore",
                time: "2025-04-01 06:35:00",
                content: "Your code is as beautiful as you! Want to debug some issues over coffee? ☕️",
                type: "text",
                status: "read"
            },
            {
                id: 7,
                sender: "Deborah",
                time: "2025-04-01 06:36:00",
                content: "Such a smooth way to ask me out! Let me check my git schedule 😉",
                type: "text",
                status: "read"
            },
            {
                id: 8,
                sender: "Theodore",
                time: "2025-04-01 06:37:00",
                content: "Hope there are no conflicts in your schedule! 🤞 BTW, look at this cool animation I made thinking of you:",
                type: "text",
                status: "read"
            },
            {
                id: 9,
                sender: "Theodore",
                time: "2025-04-01 06:37:30",
                content: "img/saved_image.jpg",
                type: "image",
                caption: "Hearts & Code 💕",
                status: "read"
            },
            {
                id: 10,
                sender: "Deborah",
                time: "2025-04-01 06:38:00",
                content: "OMG that's so cute! You're really good at both coding and flirting 😊",
                type: "text",
                status: "read"
            },
            {
                id: 11,
                sender: "Deborah",
                time: "2025-04-01 06:39:00",
                content: "Check out this API response:",
                type: "text",
                status: "read"
            },
            {
                id: 12,
                sender: "Deborah",
                time: "2025-04-01 06:39:10",
                content: "{\n  \"status\": \"accepted\",\n  \"message\": \"Coffee date confirmed\",\n  \"time\": \"Tomorrow, 3 PM\",\n  \"location\": \"Code & Coffee Café\"\n}",
                type: "code",
                status: "read"
            },
            {
                id: 13,
                sender: "Theodore",
                time: "2025-04-01 06:40:00",
                content: "Best API response ever! Can't wait to pair program... I mean, have coffee with you! 😊",
                type: "text",
                status: "read"
            },
            {
                id: 14,
                sender: "Deborah",
                time: "2025-04-01 06:41:00",
                content: "You're such a dork! 🤓 But a cute one! Gtg now, got a meeting. TTYL! ❤️",
                type: "text",
                status: "read"
            },
            {
                id: 15,
                sender: "Theodore",
                time: "2025-04-01 06:42:00",
                content: "Have a great meeting! Don't let them push to production without code review! 😘",
                type: "text",
                status: "sent"
            }
        ]
    });

    // Add transition class to main container
    document.body.classList.add('opening-chat');

    // Create and append chat container
    const chatContainer = document.createElement('div');
    chatContainer.className = 'private-chat-container';
    chatContainer.innerHTML = privateChatUI.getPrivateChatInterface();

    // Add slide-in animation class
    chatContainer.classList.add('slide-in');
    
    document.body.appendChild(chatContainer);

    // Initialize chat functionality
    privateChatUI.initializeChat();
    
    const messagesContainer = chatContainer.querySelector('.messages__container');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Add back button functionality
    const backButton = document.createElement('button');
    backButton.className = 'chat-back-btn';
    backButton.innerHTML = '<i class="ri-arrow-left-line"></i>';
    chatContainer.querySelector('.chat__user-info').prepend(backButton);

    backButton.addEventListener('click', closePrivateChat);
}

// Function to close private chat
function closePrivateChat() {
    const chatContainer = document.querySelector('.private-chat-container');
    
    // Add slide-out animation
    chatContainer.classList.add('slide-out');

    // Remove chat container after animation
    chatContainer.addEventListener('animationend', () => {
        chatContainer.remove();
        document.body.classList.remove('opening-chat');
    });
}


// Function to handle chat type navigation
function handleChatTypeNavigation() {
    const chatTypeButtons = document.querySelectorAll('.chat__type button');
    const chatContent = document.querySelector('.chat-content');

    if (chatTypeButtons && chatContent) {
        chatTypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                chatTypeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the chat type from data attribute
                const chatType = button.getAttribute('data-chat-type');
                
                // Add fade-out effect
                chatContent.style.opacity = '0';
                
                // Update content with fade animation
                setTimeout(() => {
                    chatContent.innerHTML = chatSections[chatType];
                    setTimeout(() => {
                        chatContent.style.opacity = '1';
                    }, 50);
                }, 200);
            });
        });
    }
    
    createFilterDropdown('chats');
    initializeSearch();
    initializeChatClicks();
}

// Export the functions and data
export { getChatPageContent, handleChatTypeNavigation };