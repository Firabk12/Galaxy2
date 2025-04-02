// Filter options for different sections
const filterOptions = {
    chats: [
        { id: 'unread', label: 'Unread', icon: 'ri-mail-unread-line' },
        { id: 'mentions', label: 'Mentions', icon: 'ri-at-line' },
        { id: 'files', label: 'Has Files', icon: 'ri-file-line' },
        { id: 'links', label: 'Has Links', icon: 'ri-links-line' },
        { id: 'images', label: 'Has Images', icon: 'ri-image-line' }
    ],
    contacts: [
        { id: 'online', label: 'Online', icon: 'ri-record-circle-fill' },
        { id: 'favorites', label: 'Favorites', icon: 'ri-star-fill' },
        { id: 'recent', label: 'Recently Added', icon: 'ri-time-line' },
        { id: 'blocked', label: 'Blocked', icon: 'ri-forbid-line' }
    ],
    mutuals: [
        { id: 'online', label: 'Online', icon: 'ri-record-circle-fill' },
        { id: 'recent', label: 'Recent Connections', icon: 'ri-time-line' },
        { id: 'common', label: '10+ Mutual Friends', icon: 'ri-group-line' },
        { id: 'interests', label: 'Similar Interests', icon: 'ri-heart-line' }
    ],
    saved: [
        { id: 'images', label: 'Images', icon: 'ri-image-line' },
        { id: 'files', label: 'Files', icon: 'ri-file-line' },
        { id: 'links', label: 'Links', icon: 'ri-links-line' },
        { id: 'audio', label: 'Audio', icon: 'ri-mic-line' },
        { id: 'pinned', label: 'Pinned', icon: 'ri-pushpin-2-fill' }
    ]
};

const utils = {
    getListContainer,
    getCurrentSection,
    getSearchableElements,
    highlightText,
    updateNoResultsMessage,
    matchChatFilter,
    matchContactFilter,
    matchMutualFilter,
    matchSavedFilter
};

function getListContainer(section) {
    const container = document.querySelector(`.${section}__list`);
    if (!container) {
        console.warn(`Container for ${section} not found`);
        return null;
    }
    return container;
}

// Function to create filter dropdown
function createFilterDropdown(section) {
    const filterContainer = document.querySelector('.filter__container');
    if (!filterContainer) return;

    const filterHTML = `
        <div class="filter__wrapper">
            <button class="filter__button">
                <i class="ri-filter-3-line"></i>
                <span>Filter</span>
            </button>
            <div class="filter__dropdown">
                <div class="filter__header">
                    <h4>Filter Messages</h4>
                    <button class="clear-filter">Clear All</button>
                </div>
                <div class="filter__options">
                    ${filterOptions[section].map(option => `
                        <label class="filter__option">
                            <input type="checkbox" data-filter="${option.id}">
                            <i class="${option.icon}"></i>
                            <span>${option.label}</span>
                        </label>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    filterContainer.innerHTML = filterHTML;
    initializeFilterListeners();
}

// Function to initialize search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.header__search input');
    if (!searchInput) return;

    let searchTimeout;
    let currentSection = getCurrentSection();
    
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        
        // Add loading indicator
        if (!searchInput.classList.contains('searching')) {
            searchInput.classList.add('searching');
        }
        
        // Debounce search
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            if (searchTerm.length > 0) {
                performSearch(searchTerm);
            } else {
                // If search is cleared, show all items
                const items = document.querySelectorAll(`.${currentSection.slice(0, -1)}-wrapper`);
                items.forEach(item => {
                    item.style.display = 'flex';
                    highlightText(item, ''); // Clear highlights
                });
                updateNoResultsMessage(true, currentSection);
            }
            searchInput.classList.remove('searching');
        }, 300);
    });
}

// Function to perform search
function performSearch(searchTerm) {
    const currentSection = getCurrentSection();
    const listContainer = getListContainer(currentSection);
    if (!listContainer) return;

    const items = listContainer.querySelectorAll(`.${currentSection.slice(0, -1)}-wrapper`);
    let hasVisibleItems = false;

    items.forEach(item => {
        const searchableElements = getSearchableElements(item, currentSection);
        const matchFound = searchableElements.some(element => 
            element.toLowerCase().includes(searchTerm.toLowerCase())
        );

        item.style.display = matchFound ? 'flex' : 'none';
        if (matchFound) {
            hasVisibleItems = true;
            highlightText(item, searchTerm);
        }
    });

    updateNoResultsMessage(hasVisibleItems, currentSection);
}


function getSearchableElements(item, section) {
    switch (section) {
        case 'chats':
            return [
                item.querySelector('.chat__name')?.textContent || '',
                item.querySelector('.message__preview p')?.textContent || ''
            ];
        case 'contacts':
            return [
                item.querySelector('.contact__name')?.textContent || '',
                item.querySelector('.contact__status')?.textContent || ''
            ];
        case 'mutuals':
            return [
                item.querySelector('.mutual__name')?.textContent || '',
                item.querySelector('.mutual__username')?.textContent || '',
                Array.from(item.querySelectorAll('.mutual__interests span'))
                    .map(span => span.textContent)
                    .join(' ')
            ];
        case 'saved':
            return [
                item.querySelector('.sender__name')?.textContent || '',
                item.querySelector('.saved__content p')?.textContent || '',
                item.querySelector('.file__info p')?.textContent || ''
            ];
        default:
            return [];
    }
}

// Function to highlight matching text
function highlightText(wrapper, searchTerm) {
    if (!searchTerm) {
        // Reset highlights if search is cleared
        wrapper.querySelectorAll('.chat__name, .message__preview p').forEach(element => {
            element.innerHTML = element.innerHTML.replace(/<mark>|<\/mark>/g, '');
        });
        return;
    }

    const elements = wrapper.querySelectorAll('.chat__name, .message__preview p');
    elements.forEach(element => {
        const text = element.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        element.innerHTML = text.replace(regex, '<mark>$1</mark>');
    });
}

// Function to update no results message
function updateNoResultsMessage(hasResults, section = 'chats') {
    let noResultsEl = document.querySelector('.no-results');
    const listContainer = document.querySelector(`.${section}__list`);
    
    // Only proceed if we have a container to work with
    if (!listContainer) return;

    if (!hasResults) {
        if (!noResultsEl) {
            noResultsEl = document.createElement('div');
            noResultsEl.className = 'no-results';
            noResultsEl.innerHTML = `
                <div class="no-results__content">
                    <i class="ri-search-line"></i>
                    <p>No ${section.slice(0, -1)} found</p>
                    <span>Try adjusting your search or filters</span>
                </div>
            `;
            listContainer.appendChild(noResultsEl);

            // Add fade-in animation
            setTimeout(() => {
                noResultsEl.querySelector('.no-results__content').style.opacity = '1';
                noResultsEl.querySelector('.no-results__content').style.transform = 'translateY(0)';
            }, 50);
        }
    } else if (noResultsEl) {
        noResultsEl.remove();
    }
}

// Function to initialize filter listeners
function initializeFilterListeners() {
    const filterButton = document.querySelector('.filter__button');
    const filterDropdown = document.querySelector('.filter__dropdown');
    const clearFilterBtn = document.querySelector('.clear-filter');
    const filterOptions = document.querySelectorAll('.filter__option input');

    if (!filterButton || !filterDropdown) return;

    // Toggle filter dropdown
    filterButton.addEventListener('click', () => {
        filterDropdown.classList.toggle('show');
        filterButton.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.filter__wrapper')) {
            filterDropdown.classList.remove('show');
            filterButton.classList.remove('active');
        }
    });

    // Clear all filters
    clearFilterBtn?.addEventListener('click', () => {
        filterOptions.forEach(option => {
            option.checked = false;
        });
        applyFilters();
    });

    // Apply filters on change
    filterOptions.forEach(option => {
        option.addEventListener('change', applyFilters);
    });
}

// Function to apply filters
function applyFilters() {
    const currentSection = getCurrentSection();
    const activeFilters = Array.from(document.querySelectorAll('.filter__option input:checked'))
        .map(input => input.dataset.filter);
    
    const items = document.querySelectorAll(`.${currentSection.slice(0, -1)}-wrapper`);
    
    items.forEach(item => {
        if (activeFilters.length === 0) {
            item.style.display = 'flex';
            return;
        }

        let showItem = activeFilters.some(filter => {
            switch (currentSection) {
                case 'chats':
                    return matchChatFilter(item, filter);
                case 'contacts':
                    return matchContactFilter(item, filter);
                case 'mutuals':
                    return matchMutualFilter(item, filter);
                case 'saved':
                    return matchSavedFilter(item, filter);
                default:
                    return false;
            }
        });

        item.style.display = showItem ? 'flex' : 'none';
    });

    updateActiveFiltersCount(activeFilters.length);
}

function matchChatFilter(item, filter) {
    switch (filter) {
        case 'unread':
            return item.querySelector('.unread__count') !== null;
        case 'mentions':
            return item.querySelector('.message__preview p')?.textContent.includes('@');
        case 'files':
            return item.querySelector('.message__preview p')?.textContent.includes('📄');
        case 'links':
            return item.querySelector('.message__preview p')?.textContent.includes('http');
        case 'images':
            return item.querySelector('.message__preview p')?.textContent.includes('🖼️');
        default:
            return false;
    }
}

function matchContactFilter(item, filter) {
    switch (filter) {
        case 'online':
            return item.querySelector('.status-indicator.online') !== null;
        case 'favorites':
            return item.querySelector('.action-btn.favorite.active') !== null;
        case 'recent':
            return item.classList.contains('recent');
        case 'blocked':
            return item.classList.contains('blocked');
        default:
            return false;
    }
}

function matchMutualFilter(item, filter) {
    switch (filter) {
        case 'online':
            return item.querySelector('.status-indicator.online') !== null;
        case 'recent':
            return item.classList.contains('recent');
        case 'common':
            const mutualCount = parseInt(item.querySelector('.mutual__badge')?.textContent.match(/\d+/)[0] || 0);
            return mutualCount >= 10;
        case 'interests':
            const interestsCount = item.querySelectorAll('.mutual__interests span').length;
            return interestsCount > 2;
        default:
            return false;
    }
}

function matchSavedFilter(item, filter) {
    switch (filter) {
        case 'images':
            return item.querySelector('.saved__attachment.image') !== null;
        case 'files':
            return item.querySelector('.saved__attachment.file') !== null;
        case 'links':
            return item.querySelector('.saved__content a') !== null;
        case 'audio':
            return item.querySelector('.saved__attachment.audio') !== null;
        case 'pinned':
            return item.classList.contains('pinned');
        default:
            return false;
    }
}

// Helper function to get current section
function getCurrentSection() {
    const sections = ['chats', 'contacts', 'mutuals', 'saved'];
    for (const section of sections) {
        if (document.querySelector(`.${section}__list`)) {
            return section;
        }
    }
    return 'chats'; // Default
}

// Function to update active filters count
function updateActiveFiltersCount(count) {
    const filterButton = document.querySelector('.filter__button');
    if (!filterButton) return;

    const countBadge = filterButton.querySelector('.filter__count') ||
        document.createElement('span');
    
    if (count > 0) {
        countBadge.className = 'filter__count';
        countBadge.textContent = count;
        if (!filterButton.querySelector('.filter__count')) {
            filterButton.appendChild(countBadge);
        }
    } else {
        countBadge.remove();
    }
}

export { createFilterDropdown, initializeSearch, utils };