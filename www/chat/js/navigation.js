import { getChatPageContent, handleChatTypeNavigation } from './chatNavigation.js';
import { getContactsPageContent, handleContactsNavigation } from './contactsNavigation.js';
import { getMutualsPageContent, handleMutualsNavigation } from './mutualsNavigation.js';
import { getSavedMessagesPageContent, handleSavedMessagesNavigation } from './savedMessagesNavigation.js';

// Keep track of current active page
let currentPage = 'chats';

// Get all sidebar links
const sidebarLinks = document.querySelectorAll('.sidebar__link');
const mainContainer = document.querySelector('.chat__interface');

function formatJoinDate(dateString) {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Content for different pages
const pageContent = {
    chats: getChatPageContent,
    contacts: getContactsPageContent,            
    mutuals: getMutualsPageContent,
    saved: getSavedMessagesPageContent,
profile: `
    <div class="profile__header1">
        <div class="header__search">
            <h1>Profile</h1>
        </div>
    </div>
    <div class="profile__container">
        <!-- Profile Header -->
        <div class="profile__header">
            <div class="profile__cover">
                <img src="img/abe1.jpg" alt="Cover Photo">
                <button class="edit-cover">
                    <i class="ri-camera-line"></i>
                </button>
            </div>
            <div class="profile__user-info">
                <div class="profile__avatar">
                    <img src="img/default.jpg" alt="Avatar">
                    <button class="edit-avatar">
                        <i class="ri-camera-line"></i>
                    </button>
                </div>
                <div class="profile__meta">
                    <h2>Thoedore</h2>
                    <p>@FirafisBekele</p>
                    <span>Joined March 2025</span>
                </div>
            </div>
        </div>
        <!-- Profile Content -->
        <div class="profile__content">
            <!-- Basic Information -->
            <div class="profile__section">
                <h3>Basic Information</h3>
                <div class="profile__fields">
                    <div class="field__group">
                        <label>Display Name</label>
                        <div class="field__input">
                            <input type="text" value="Theodore" placeholder="Your display name">
                            <i class="ri-edit-line"></i>
                        </div>
                    </div>
                    <div class="field__group">
                        <label>Bio</label>
                        <div class="field__input">
                            <textarea placeholder="Write something about yourself">
Fullstack Developer | AstroPhysicst | Creative Designer
                            </textarea>
                            <i class="ri-edit-line"></i>
                        </div>
                    </div>
                    <div class="field__group">
                        <label>Location</label>
                        <div class="field__input">
                            <input type="text" value="Addis Ababa, Ethiopia" placeholder="Your location">
                            <i class="ri-edit-line"></i>
                        </div>
                    </div>
                    <div class="field__group">
                        <label>Website</label>
                        <div class="field__input">
                            <input type="url" value="https://galaxy.dev" placeholder="Your website">
                            <i class="ri-edit-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Contact Information -->
            <div class="profile__section">
                <h3>Contact Information</h3>
                <div class="profile__fields">
                    <div class="field__group">
                        <label>Email</label>
                        <div class="field__input">
                            <input type="email" value="Theodore@dev.com" placeholder="Your email">
                            <div class="field__badge verified">
                                <i class="ri-checkbox-circle-fill"></i>
                                Verified
                            </div>
                        </div>
                    </div>
                    <div class="field__group">
                        <label>Phone</label>
                        <div class="field__input">
                            <input type="tel" value="+251 914 17* ***" placeholder="Your phone number">
                            <button class="verify-btn">Verify</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Preferences -->
            <div class="profile__section">
                <h3>Preferences</h3>
                <div class="profile__fields">
                    <div class="field__group">
                        <label>Language</label>
                        <div class="field__input">
                            <select>
                                <option value="en">English</option>
                                <option value="am">Amharic</option>
                                <option value="fr">French</option>
                            </select>
                        </div>
                    </div>
                    <div class="field__group">
                        <label>Time Zone</label>
                        <div class="field__input">
                            <select>
                                <option value="EAT">East Africa Time (UTC+03:00)</option>
                                <option value="UTC">UTC</option>
                            </select>
                        </div>
                    </div>
                    <div class="toggle__group">
                        <div class="toggle__item">
                            <label>Show Online Status</label>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="toggle__item">
                            <label>Email Notifications</label>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="toggle__item">
                            <label>Two-Factor Authentication</label>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Connected Accounts -->
            <div class="profile__section">
                <h3>Connected Accounts</h3>
                <div class="connected__accounts">
                    <div class="account__item">
                        <div class="account__info">
                            <i class="ri-github-fill"></i>
                            <div>
                                <h4>GitHub</h4>
                                <p>Connected as @Cyber-boy9</p>
                            </div>
                        </div>
                        <button class="disconnect-btn">Disconnect</button>
                    </div>
                    <div class="account__item">
                        <div class="account__info">
                            <i class="ri-google-fill"></i>
                            <div>
                                <h4>Google</h4>
                                <p>cyber.boy9@galaxy.dev</p>
                            </div>
                        </div>
                        <button class="disconnect-btn">Disconnect</button>
                    </div>
                    <div class="account__item not-connected">
                        <div class="account__info">
                            <i class="ri-twitter-fill"></i>
                            <div>
                                <h4>Twitter</h4>
                                <p>Not connected</p>
                            </div>
                        </div>
                        <button class="connect-btn">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
settings: `
    <div class="setting__first">
        <div class="header__search">
            <h1>Settings</h1>
        </div>                   
    </div>
    <div class="settings__container">
        <!-- Settings Navigation -->
        <div class="settings__nav">
            <button class="settings__nav-item active" data-target="account">
                <i class="ri-user-settings-line"></i>
                <span>Account Settings</span>
            </button>
            <button class="settings__nav-item" data-target="chat">
                <i class="ri-chat-settings-line"></i>
                <span>Chat Settings</span>
            </button>
            <button class="settings__nav-item" data-target="privacy">
                <i class="ri-shield-keyhole-line"></i>
                <span>Privacy & Blocking</span>
            </button>
            <button class="settings__nav-item" data-target="storage">
                <i class="ri-hard-drive-2-line"></i>
                <span>Data & Storage</span>
            </button>
            <button class="settings__nav-item" data-target="accessibility">
                <i class="ri-braces-line"></i>
                <span>Accessibility</span>
            </button>
            <button class="settings__nav-item" data-target="language">
                <i class="ri-global-line"></i>
                <span>Language & Region</span>
            </button>
            <button class="settings__nav-item" data-target="help">
                <i class="ri-question-line"></i>
                <span>Help & Support</span>
            </button>
        </div>

        <!-- Settings Content -->
        <div class="settings__content">
            <!-- Account Settings Section -->
            <div class="settings__section active" id="account">
                <h2>Account Settings</h2>
                
                <div class="settings__card">
                    <h3>
                        <i class="ri-lock-password-line"></i>
                        Privacy & Security
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Password</h4>
                                <p>Last changed: ${new Date('2025-03-15').toLocaleDateString()}</p>
                            </div>
                            <button class="action-btn">
                                Change Password
                            </button>
                        </div>
                        
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Two-Factor Authentication</h4>
                                <p>Additional security for your account</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>

                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Active Sessions</h4>
                                <p>Last login: ${new Date('2025-03-31T04:51:38').toLocaleString()}</p>
                            </div>
                            <button class="action-btn danger">
                                Logout All Devices
                            </button>
                        </div>
                    </div>
                </div>

                <div class="settings__card">
                    <h3>
                        <i class="ri-notification-4-line"></i>
                        Notification Preferences
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Push Notifications</h4>
                                <p>Get notified about new messages</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>

                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Email Notifications</h4>
                                <p>Updates for cyber.boy9@galaxy.dev</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>

                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Sound Effects</h4>
                                <p>Play sounds for messages and calls</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="settings__card">
                    <h3>
                        <i class="ri-palette-line"></i>
                        Appearance
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Theme</h4>
                                <p>Choose your preferred theme</p>
                            </div>
                            <div class="theme-selector">
                                <button class="theme-btn active" data-theme="light">
                                    <i class="ri-sun-line"></i>
                                    Light
                                </button>
                                <button class="theme-btn" data-theme="dark">
                                    <i class="ri-moon-line"></i>
                                    Dark
                                </button>
                                <button class="theme-btn" data-theme="system">
                                    <i class="ri-computer-line"></i>
                                    System
                                </button>
                            </div>
                        </div>

                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Font Size</h4>
                                <p>Adjust the text size</p>
                            </div>
                            <div class="font-size-slider">
                                <input type="range" min="12" max="20" value="16">
                                <span class="font-size-value">16px</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Chat Settings Section -->
            <div class="settings__section" id="chat">
                <h2>Chat Settings</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-message-2-line"></i>
                        Message Settings
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Read Receipts</h4>
                                <p>Allow others to know when you've read messages</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Typing Indicators</h4>
                                <p>Show when you're typing...</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="slider"></span>
                            </label>
                        </div>
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Auto-delete Timer</h4>
                                <p>Remove messages after a set time</p>
                            </div>
                            <select>
                                <option value="none">None</option>
                                <option value="1">1 hour</option>
                                <option value="24">24 hours</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Privacy & Blocking Section -->
            <div class="settings__section" id="privacy">
                <h2>Privacy & Blocking</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-user-shared-2-line"></i>
                        Visibility
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Online Status</h4>
                                <p>Who can see your online status</p>
                            </div>
                            <select>
                                <option value="everyone">Everyone</option>
                                <option value="contacts">Contacts Only</option>
                                <option value="nobody">Nobody</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="settings__card">
                    <h3>
                        <i class="ri-user-unfollow-line"></i>
                        Blocking
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Blocked Users</h4>
                                <p>Manage users you've blocked</p>
                            </div>
                            <button class="action-btn">
                                View Blocked List
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data & Storage Section -->
            <div class="settings__section" id="storage">
                <h2>Data & Storage</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-database-line"></i>
                        Storage Usage
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Cache Size</h4>
                                <p>Current cache usage: 150 MB</p>
                            </div>
                            <button class="action-btn">
                                Clear Cache
                            </button>
                        </div>
                    </div>
                </div>
                <div class="settings__card">
                    <h3>
                        <i class="ri-cloud-line"></i>
                        Data Saver
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Data Saver Mode</h4>
                                <p>Reduce data usage when on cellular</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Accessibility Section -->
            <div class="settings__section" id="accessibility">
                <h2>Accessibility</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-contrast-2-line"></i>
                        Display Settings
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Text Size</h4>
                                <p>Adjust the text size for better readability</p>
                            </div>
                            <select>
                                <option value="small">Small</option>
                                <option value="medium" selected>Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Contrast</h4>
                                <p>Enhance contrast for visibility</p>
                            </div>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Language & Region Section -->
            <div class="settings__section" id="language">
                <h2>Language & Region</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-global-line"></i>
                        App Language
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Select Language</h4>
                            </div>
                            <select>
                                <option value="en" selected>English</option>
                                <option value="am">Amharic</option>
                                <option value="fr">French</option>
                            </select>
                        </div>
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Time Format</h4>
                            </div>
                            <select>
                                <option value="12">12 Hour</option>
                                <option value="24" selected>24 Hour</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Help & Support Section -->
            <div class="settings__section" id="help">
                <h2>Help & Support</h2>
                <div class="settings__card">
                    <h3>
                        <i class="ri-info-line"></i>
                        FAQs & Documentation
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Visit our Help Center</h4>
                                <p>Find answers to common questions</p>
                            </div>
                            <a href="https://docs.galaxychat.dev" class="action-btn" target="_blank">Help Center</a>
                        </div>
                    </div>
                </div>
                <div class="settings__card">
                    <h3>
                        <i class="ri-mail-line"></i>
                        Contact Support
                    </h3>
                    <div class="settings__group">
                        <div class="settings__row">
                            <div class="settings__info">
                                <h4>Submit a Request</h4>
                                <p>Reach out for assistance</p>
                            </div>
                            <a href="mailto:support@galaxychat.dev" class="action-btn">Contact</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  `,
  galaxyAI: `
        <div class="galaxy-ai-wrapper">
            <!-- Content will be loaded dynamically -->
        </div>
    `
};

// Function to update the active link in sidebar
function updateActiveLink(clickedLink) {
    // Remove active class from all links
    sidebarLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    // Add active class to clicked link
    clickedLink.classList.add('active-link');
}

// In your loadPage function, after setting the content
function loadPage(pageName) {
    if (pageContent[pageName]) {
        // Add fade-out effect
        mainContainer.style.opacity = '0';
        
        setTimeout(() => {
            const content = typeof pageContent[pageName] === 'function' 
                ? pageContent[pageName]() 
                : pageContent[pageName];
            
            mainContainer.innerHTML = content;
            
            // Initialize chat type navigation if we're on the chats page
            if (pageName === 'chats') {
                handleChatTypeNavigation();
            } else if (pageName === 'contacts') {
                handleContactsNavigation();
            } else if (pageName === 'mutuals') {
                handleMutualsNavigation();
            } else if (pageName === 'saved') {
                handleSavedMessagesNavigation();
            }                     
            
            // Initialize settings if we're loading the settings page
            if (pageName === 'settings') {
                initializeSettings();
            }
            
            // Add fade-in effect
            setTimeout(() => {
                mainContainer.style.opacity = '1';
            }, 50);
        }, 200);
        
        currentPage = pageName;
    }
}

// Add click event listeners to sidebar links
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.getAttribute('data-page');
        if (pageName) {
            updateActiveLink(link);
            loadPage(pageName);
        }
    });
});

const galaxyAIButton = document.querySelector('.sidebar__actions button');
if (galaxyAIButton) {
    galaxyAIButton.addEventListener('click', () => {
        // Remove active class from all sidebar links
        sidebarLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        
        // Add active class to the Galaxy AI button
        galaxyAIButton.classList.add('active-link');
        
        // Load the Galaxy AI page and initialize it
        loadPage('galaxyAI');
        // Wait for the content to be loaded before initializing
        setTimeout(() => {
            initGalaxyAI();
        }, 250); // Match this with your fade transition timing
    });
}

document.querySelector('.sidebar__actions button').addEventListener('click', () => {
    loadPage('galaxyAI');
    initGalaxyAI();
});

// Add fade transition style to chat__interface
document.addEventListener('DOMContentLoaded', () => {
    mainContainer.style.transition = 'opacity 0.2s ease-in-out';
    // Load initial chats page
    loadPage('chats');
});