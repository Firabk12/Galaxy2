// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listener for search icon
    const searchIcon = document.querySelector('.fas.fa-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', initializeSearch);
    }
});

function initializeSearch() {
    // Get all main elements we need to modify
    const header = document.querySelector('.header');
    const sidebar = document.querySelector('.sidebar');
    const chatInterface = document.querySelector('.chat__interface');
    
    if (!header || !sidebar || !chatInterface) {
        console.error('Required elements not found');
        return;
    }

    // Store original content and states
    const originalState = {
        headerDisplay: header.style.display,
        sidebarDisplay: sidebar.style.display,
        chatContent: chatInterface.innerHTML
    };

    // Hide header and sidebar
    header.style.display = 'none';
    sidebar.style.display = 'none';

    // Create and insert search interface
    const searchContent = `
        <div class="search__container">
            <!-- Search Header -->
            <div class="search__header">
                <button class="back-button">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="search__input-wrapper">
                    <input 
                        type="text" 
                        class="search__input" 
                        placeholder="Search users or groups..."
                        autofocus
                    >
                </div>
            </div>

            <!-- Search Results -->
            <div class="search__results">
                <div class="search__initial-state">
                    <i class="fas fa-search"></i>
                    <p>Search for people or groups</p>
                </div>
            </div>
        </div>
    `;

    // Replace chat interface content
    chatInterface.innerHTML = searchContent;

    // Setup event handlers
    setupSearchHandlers(header, sidebar, chatInterface, originalState);
}

function setupSearchHandlers(header, sidebar, chatInterface, originalState) {
    const backButton = document.querySelector('.back-button');
    const searchInput = document.querySelector('.search__input');
    const searchResults = document.querySelector('.search__results');

    if (backButton) {
        backButton.addEventListener('click', () => {
            // Restore original layout
            header.style.display = originalState.headerDisplay || 'block';
            sidebar.style.display = originalState.sidebarDisplay || 'block';
            chatInterface.innerHTML = originalState.chatContent;
            
            // Re-initialize event listeners
            if (typeof initializeEventListeners === 'function') {
                initializeEventListeners();
            }
        });
    }

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', debounce((e) => {
            const query = e.target.value.trim();
            if (query) {
                performSearch(query, searchResults);
            } else {
                searchResults.innerHTML = `
                    <div class="search__initial-state">
                        <i class="fas fa-search"></i>
                        <p>Search for people or groups</p>
                    </div>
                `;
            }
        }, 300));
    }
}

// Your existing performSearch and debounce functions remain the same...

function performSearch(query, resultsContainer) {
    // Show loading state
    resultsContainer.innerHTML = `
        <div class="search__loading">
            <div class="search__loading-spinner"></div>
            <p>Searching...</p>
        </div>
    `;
    
    // Simulate search results (replace with actual data later)
    setTimeout(() => {
        resultsContainer.innerHTML = `
            <div class="search__section">
                <h3>Users</h3>
                <div class="search__results-list">
                    <div class="search__result-item">
                        <img src="images/user1.jpg" alt="User avatar">
                        <div class="result__info">
                            <h4>Firabk12</h4>
                            <p>Online</p>
                        </div>
                    </div>
                    <div class="search__result-item">
                        <img src="images/user2.jpg" alt="User avatar">
                        <div class="result__info">
                            <h4>John Doe</h4>
                            <p>Last seen recently</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="search__section">
                <h3>Groups</h3>
                <div class="search__results-list">
                    <div class="search__result-item">
                        <div class="group__avatar">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="result__info">
                            <h4>Developers Team</h4>
                            <p>12 members</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }, 500);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}