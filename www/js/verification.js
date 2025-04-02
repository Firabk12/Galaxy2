document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const countrySelect = document.querySelector('.country-select');
    const selectedCountry = document.querySelector('.selected-country');
    const countryDropdown = document.querySelector('.country-dropdown');
    const countriesList = document.querySelector('.countries-list');
    const countrySearch = document.querySelector('.country-search input');
    const phoneInput = document.querySelector('#phone-number');
    const otpInputs = document.querySelectorAll('.otp-input-group input');
    const countdownEl = document.querySelector('#countdown-timer');
    const resendButton = document.querySelector('.resend-code');

    // Initialize countries list
    let currentCountry = countries.find(country => country.code === 'ET'); // Default to Ethiopia

    function updateSelectedCountry(country) {
        selectedCountry.innerHTML = `
            <img src="assets/images/flags/one-one/${country.flag}" alt="${country.name}" class="country-flag">
            <span class="country-code">${country.dialCode}</span>
            <i class="fas fa-chevron-down"></i>
        `;
        currentCountry = country;
        countrySelect.classList.remove('active');
    }

    function populateCountriesList(searchTerm = '') {
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            country.dialCode.includes(searchTerm)
        );

        countriesList.innerHTML = filteredCountries.map(country => `
            <div class="country-item" data-code="${country.code}">
                <img src="assets/images/flags/one-one/${country.flag}" alt="${country.name}">
                <span class="country-name">${country.name}</span>
                <span class="dial-code">${country.dialCode}</span>
            </div>
        `).join('');

        // Add click events to new items
        document.querySelectorAll('.country-item').forEach(item => {
            item.addEventListener('click', () => {
                const country = countries.find(c => c.code === item.dataset.code);
                updateSelectedCountry(country);
            });
        });
    }

    // Initial population
    populateCountriesList();
    updateSelectedCountry(currentCountry);

    // Event Listeners
    countrySelect.addEventListener('click', (e) => {
        if (!e.target.closest('.country-dropdown')) {
            countrySelect.classList.toggle('active');
        }
    });

    document.addEventListener('click', (e) => {
        if (!countrySelect.contains(e.target)) {
            countrySelect.classList.remove('active');
        }
    });

    countrySearch.addEventListener('input', (e) => {
        populateCountriesList(e.target.value);
    });

    // Phone number formatting
    

    // OTP input handling
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            // Allow only numbers
            e.target.value = e.target.value.replace(/\D/g, '');
            
            // Auto advance to next input
            if (e.target.value && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }

            // Check if all inputs are filled
            const isComplete = Array.from(otpInputs).every(input => input.value.length === 1);
            if (isComplete) {
                document.querySelector('#verification-form button[type="submit"]').focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });

        // Allow pasting OTP
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const paste = (e.clipboardData || window.clipboardData).getData('text');
            const numbers = paste.match(/\d/g);
            
            if (numbers) {
                otpInputs.forEach((input, i) => {
                    if (numbers[i]) {
                        input.value = numbers[i];
                        if (i < otpInputs.length - 1) otpInputs[i + 1].focus();
                    }
                });
            }
        });
    });

    // Countdown Timer
    function startCountdown() {
        let timeLeft = 120; // 2 minutes
        resendButton.disabled = true;
        
        const countdown = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            
            if (timeLeft === 0) {
                clearInterval(countdown);
                resendButton.disabled = false;
                resendButton.querySelector('.cooldown-ring').style.display = 'none';
            }
            timeLeft--;
        }, 1000);

        // Reset cooldown animation
        const ring = resendButton.querySelector('.cooldown-ring');
        ring.style.display = 'block';
        ring.style.animation = 'none';
        ring.offsetHeight; // Trigger reflow
        ring.style.animation = 'cooldown 120s linear';
    }

    // Start initial countdown
    startCountdown();

    // Resend code handler
    resendButton.addEventListener('click', () => {
        if (!resendButton.disabled) {
            // TODO: Add your resend code logic here
            startCountdown();
        }
    });

    // Form submission
    document.getElementById('verification-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const code = Array.from(otpInputs).map(input => input.value).join('');
        const phoneNumber = currentCountry.dialCode + ' ' + phoneInput.value;        
        
        // TODO: Add your verification logic here
        console.log('Verifying:', {
            phoneNumber,
            code
        });
    });
});
