// Contacts sections content
import { createFilterDropdown, initializeSearch } from './searchFilter.js';

const contactSections = {
    all: `
        <div class="contacts__list">
            <div class="contact-divider">A</div>
            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Abel.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Abel Noah</p>
                    <p class="contact__status">Online</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>

            <div class="contact-divider">B</div>
            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Biruk.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Biruk savage</p>
                    <p class="contact__status">Last seen 2h ago</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>

            <div class="contact-divider">D</div>
            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Deborah.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Deborah Ui-Nerd</p>
                    <p class="contact__status">Online</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    favorites: `
        <div class="contacts__list">
            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Deborah.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Deborah Ui-Nerd</p>
                    <p class="contact__status">Online</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn favorite active">
                        <i class="ri-star-fill"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    online: `
        <div class="contacts__list">
            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Abel.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Abel Noah</p>
                    <p class="contact__status">Online</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>

            <div class="contact-wrapper">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/Deborah.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Deborah Ui-Nerd</p>
                    <p class="contact__status">Online</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    blocked: `
        <div class="contacts__list">
            <div class="contact-wrapper blocked">
                <div class="contact__photo__wrapper">
                    <div>
                        <img src="img/block-user.png" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="contact__info">
                    <p class="contact__name">Blocked User</p>
                    <p class="contact__status">Blocked</p>
                </div>
                <div class="contact__actions">
                    <button class="action-btn unblock">
                        <i class="ri-lock-unlock-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-more-2-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    `
};

// Function to get contacts page content
function getContactsPageContent() {
    return `
        <div>
            <div class="header__search">
                <h1>Contacts</h1>
                <input placeholder="Search contacts">
            </div>
            <div class="filter__container">
                <p>Filter</p>
            </div>                      
        </div>
        <div class="contacts__type">
            <button class="active" data-contact-type="all">
                <span>All</span>
            </button>
            <button data-contact-type="favorites">
                <span>Favorites</span>
            </button>
            <button data-contact-type="online">
                <span>Online</span>
            </button>
            <button data-contact-type="blocked">
                <span>Blocked</span>
            </button>
        </div>
        <div class="contact-content">
            ${contactSections.all}
        </div>
    `;
}

// Function to handle contacts navigation
function handleContactsNavigation() {
    const contactTypeButtons = document.querySelectorAll('.contacts__type button');
    const contactContent = document.querySelector('.contact-content');

    if (contactTypeButtons && contactContent) {
        contactTypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                contactTypeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the contact type from data attribute
                const contactType = button.getAttribute('data-contact-type');
                
                // Add fade-out effect
                contactContent.style.opacity = '0';
                
                // Update content with fade animation
                setTimeout(() => {
                    contactContent.innerHTML = contactSections[contactType];
                    setTimeout(() => {
                        contactContent.style.opacity = '1';
                    }, 50);
                }, 200);
            });
        });
    }
    
    createFilterDropdown('contacts');
    initializeSearch();
}

// Export the functions
export { getContactsPageContent, handleContactsNavigation };