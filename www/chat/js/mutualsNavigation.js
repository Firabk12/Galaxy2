// Mutuals sections content
import { createFilterDropdown, initializeSearch } from './searchFilter.js';

const mutualSections = {
    all: `
        <div class="mutuals__list">
            <div class="mutual-wrapper">
                <div class="mutual__photo__wrapper">
                    <div>
                        <img src="img/Abel.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Abel Noah</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            12 mutual friends
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@abel_a</p>
                        <div class="mutual__interests">
                            <span>Gaming</span>
                            <span>Music</span>
                            <span>+2</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn connected">
                        <i class="ri-user-received-2-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                </div>
            </div>

            <div class="mutual-wrapper">
                <div class="mutual__photo__wrapper">
                    <div>
                        <img src="img/Biruk.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Biruk Savage</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            8 mutual friends
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@biruk_sav</p>
                        <div class="mutual__interests">
                            <span>Code</span>
                            <span>Design</span>
                            <span>+3</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn connected">
                        <i class="ri-user-received-2-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                </div>
            </div>

            <div class="section__divider">
                <p>Suggested Mutuals</p>
            </div>

            <div class="mutual-wrapper suggestion">
                <div class="mutual__photo__wrapper">
                    <div>
                        <img src="img/Nolawit.jpg" alt="">
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Nolawit</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            5 mutual friends
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@nola_wit</p>
                        <div class="mutual__interests">
                            <span>Art</span>
                            <span>Design</span>
                            <span>+1</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn primary">
                        <i class="ri-user-add-line"></i>
                        <span>Connect</span>
                    </button>
                </div>
            </div>
        </div>
    `,
    recent: `
        <div class="mutuals__list">
            <div class="mutual-wrapper">
                <div class="mutual__photo__wrapper">
                    <div>
                        <img src="img/Biruk.jpg" alt="">
                        <div class="status-indicator"></div>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Biruk Savage</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            8 mutual friends
                        </span>
                        <span class="mutual__time">Connected 2h ago</span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@biruk_sav</p>
                        <div class="mutual__interests">
                            <span>Code</span>
                            <span>Design</span>
                            <span>+3</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn connected">
                        <i class="ri-user-received-2-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    active: `
        <div class="mutuals__list">
            <div class="mutual-wrapper">
                <div class="mutual__photo__wrapper">
                    <div>
                        <img src="img/Abel.jpg" alt="">
                        <div class="status-indicator online"></div>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Abel Noah</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            12 mutual friends
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@abel_a</p>
                        <div class="mutual__interests">
                            <span>Gaming</span>
                            <span>Music</span>
                            <span>+2</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn connected">
                        <i class="ri-user-received-2-line"></i>
                    </button>
                    <button class="action-btn">
                        <i class="ri-chat-1-line"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    groups: `
        <div class="mutuals__list">
            <div class="mutual-wrapper group">
                <div class="mutual__photo__wrapper">
                    <div class="group-photo">
                        <img src="img/group1.jpg" alt="">
                        <span class="member-count">25</span>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Design Community</p>
                        <span class="mutual__badge">
                            <i class="ri-user-star-line"></i>
                            3 mutuals are admins
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@design.community</p>
                        <div class="mutual__interests">
                            <span>UI/UX</span>
                            <span>Graphic Design</span>
                            <span>+4</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn">
                        <i class="ri-group-line"></i>
                        <span>View</span>
                    </button>
                </div>
            </div>

            <div class="section__divider">
                <p>Suggested Groups</p>
            </div>

            <div class="mutual-wrapper group suggestion">
                <div class="mutual__photo__wrapper">
                    <div class="group-photo">
                        <img src="img/group2.jpg" alt="">
                        <span class="member-count">120</span>
                    </div>
                </div>
                <div class="mutual__info">
                    <div class="mutual__header">
                        <p class="mutual__name">Tech Innovators</p>
                        <span class="mutual__badge">
                            <i class="ri-group-line"></i>
                            8 mutuals inside
                        </span>
                    </div>
                    <div class="mutual__details">
                        <p class="mutual__username">@tech.innovators</p>
                        <div class="mutual__interests">
                            <span>Technology</span>
                            <span>Innovation</span>
                            <span>+3</span>
                        </div>
                    </div>
                </div>
                <div class="mutual__actions">
                    <button class="action-btn primary">
                        <i class="ri-group-add-line"></i>
                        <span>Join</span>
                    </button>
                </div>
            </div>
        </div>
    `
};

// Function to get mutuals page content
function getMutualsPageContent() {
    return `
        <div>
            <div class="header__search">
                <h1>Mutuals</h1>
                <input placeholder="Search mutuals">
            </div>
            <div class="filter__container">
                <p>Filter</p>
            </div>                      
        </div>
        <div class="mutuals__type">
            <button class="active" data-mutual-type="all">
                <span>All</span>
            </button>
            <button data-mutual-type="recent">
                <span>Recent</span>
            </button>
            <button data-mutual-type="active">
                <span>Active</span>
            </button>
            <button data-mutual-type="groups">
                <span>Groups</span>
            </button>
        </div>
        <div class="mutual-content">
            ${mutualSections.all}
        </div>
    `;
}

// Function to handle mutuals navigation
function handleMutualsNavigation() {
    const mutualTypeButtons = document.querySelectorAll('.mutuals__type button');
    const mutualContent = document.querySelector('.mutual-content');

    if (mutualTypeButtons && mutualContent) {
        mutualTypeButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                mutualTypeButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the mutual type from data attribute
                const mutualType = button.getAttribute('data-mutual-type');
                
                // Add fade-out effect
                mutualContent.style.opacity = '0';
                
                // Update content with fade animation
                setTimeout(() => {
                    mutualContent.innerHTML = mutualSections[mutualType];
                    setTimeout(() => {
                        mutualContent.style.opacity = '1';
                    }, 50);
                }, 200);
            });
        });
    }
    
    createFilterDropdown('mutuals');
    initializeSearch();
}

// Export the functions
export { getMutualsPageContent, handleMutualsNavigation };