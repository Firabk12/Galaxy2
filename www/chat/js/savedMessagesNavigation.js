// Saved messages sections content
import { createFilterDropdown, initializeSearch } from './searchFilter.js';

const savedSections = {
    all: `
        <div class="saved__list">
            <!-- Pinned Messages Section -->
            <div class="section__divider">
                <div class="section__header">
                    <i class="ri-pushpin-2-fill"></i>
                    <p>Pinned</p>
                </div>
            </div>

            <div class="saved-wrapper pinned">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Biruk.jpg" alt="">
                            <p class="sender__name">Biruk</p>
                            <span class="message__time">Mar 30, 2025</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-2-fill"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Here's the final project documentation 📄</p>
                        <div class="saved__attachment file">
                            <i class="ri-file-text-fill"></i>
                            <div class="file__info">
                                <p>Project_Doc_Final.pdf</p>
                                <span>2.4 MB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Messages Section -->
            <div class="section__divider">
                <div class="section__header">
                    <i class="ri-time-line"></i>
                    <p>Recent</p>
                </div>
            </div>

            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Abel.jpg" alt="">
                            <p class="sender__name">Abel</p>
                            <span class="message__time">19:15</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Check out this awesome design inspiration! 🎨</p>
                        <div class="saved__attachment image">
                            <img src="img/saved_image.jpg" alt="Design Inspiration">
                        </div>
                    </div>
                </div>
            </div>

            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Deborah.jpg" alt="">
                            <p class="sender__name">Deborah</p>
                            <span class="message__time">18:30</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Important meeting link for tomorrow: <a href="#">meet.galaxy/team-sync</a> 🎯</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    messages: `
        <div class="saved__list">
            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Deborah.jpg" alt="">
                            <p class="sender__name">Deborah</p>
                            <span class="message__time">18:30</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Remember to update the UI components by tomorrow! 🎨</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    media: `
        <div class="saved__list">
            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Abel.jpg" alt="">
                            <p class="sender__name">Abel</p>
                            <span class="message__time">19:15</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <div class="saved__attachment image">
                            <img src="img/saved_image.jpg" alt="Design Inspiration">
                        </div>
                    </div>
                </div>
            </div>

            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Nolawit.jpg" alt="">
                            <p class="sender__name">Nolawit</p>
                            <span class="message__time">Yesterday</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Voice note from yesterday's brainstorming 🎤</p>
                        <div class="saved__attachment audio">
                            <i class="ri-mic-fill"></i>
                            <div class="audio__info">
                                <div class="audio__progress">
                                    <div class="progress__bar"></div>
                                </div>
                                <span>2:34</span>
                            </div>
                            <button class="play-btn">
                                <i class="ri-play-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    files: `
        <div class="saved__list">
            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Biruk.jpg" alt="">
                            <p class="sender__name">Biruk</p>
                            <span class="message__time">Mar 30, 2025</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-2-fill"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <div class="saved__attachment file">
                            <i class="ri-file-text-fill"></i>
                            <div class="file__info">
                                <p>Project_Doc_Final.pdf</p>
                                <span>2.4 MB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    links: `
        <div class="saved__list">
            <div class="saved-wrapper">
                <div class="saved__info">
                    <div class="saved__header">
                        <div class="sender__info">
                            <img src="img/Deborah.jpg" alt="">
                            <p class="sender__name">Deborah</p>
                            <span class="message__time">18:30</span>
                        </div>
                        <div class="saved__actions">
                            <button class="action-btn">
                                <i class="ri-pushpin-line"></i>
                            </button>
                            <button class="action-btn">
                                <i class="ri-more-2-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div class="saved__content">
                        <p>Important meeting link for tomorrow: <a href="#">meet.galaxy/team-sync</a> 🎯</p>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Function to get saved messages page content
function getSavedMessagesPageContent() {
    return `
        <div>
            <div class="header__search">
                <h1>Saved Messages</h1>
                <input placeholder="Search saved messages">
            </div>
            <div class="filter__container">
                <p>Filter</p>
            </div>                      
        </div>
        <div class="saved__type">
            <button class="active" data-saved-type="all">
                <span>All</span>
            </button>
            <button data-saved-type="messages">
                <span>Messages</span>
            </button>
            <button data-saved-type="media">
                <span>Media</span>
            </button>
            <button data-saved-type="files">
                <span>Files</span>
            </button>
            <button data-saved-type="links">
                <span>Links</span>
            </button>
        </div>
        <div class="saved-content">
            ${savedSections.all}
        </div>
    `;
}

// Function to handle saved messages navigation
function handleSavedMessagesNavigation() {
    const savedTypeButtons = document.querySelectorAll('.saved__type button');
    const savedContent = document.querySelector('.saved-content');

    if (savedTypeButtons && savedContent) {
        savedTypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                savedTypeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the saved type from data attribute
                const savedType = button.getAttribute('data-saved-type');
                
                // Add fade-out effect
                savedContent.style.opacity = '0';
                
                // Update content with fade animation
                setTimeout(() => {
                    savedContent.innerHTML = savedSections[savedType];
                    setTimeout(() => {
                        savedContent.style.opacity = '1';
                    }, 50);
                }, 200);
            });
        });
    }
    
    createFilterDropdown('saved');
    initializeSearch();
}

// Export the functions
export { getSavedMessagesPageContent, handleSavedMessagesNavigation };