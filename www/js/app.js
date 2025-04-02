document.addEventListener('DOMContentLoaded', () => {
    // Get all screens
    const splashScreen = document.getElementById('splash-screen');
    const loginScreen = document.getElementById('login-screen');
    const signupScreen = document.getElementById('signup-screen');
    const verificationScreen = document.getElementById('verification-screen');
    const profileSetupScreen = document.getElementById('profileSetupScreen');

    // Get navigation buttons
    const showLoginBtn = document.getElementById('show-login');
    const showSignupBtn = document.getElementById('show-signup');
    const signupForm = document.getElementById('signup-form');
    const profileForm = document.getElementById('signup-form1')
    
    // Function to switch screens with animation
    function switchScreen(hideScreen, showScreen) {
        hideScreen.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
            hideScreen.style.display = 'none';
            showScreen.style.display = 'flex';
            showScreen.style.animation = 'fadeIn 0.3s ease forwards';
        }, 300);
    }

    // Add animation keyframes if not already in your CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-20px); }
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    // Show login screen after splash
    setTimeout(() => {
        splashScreen.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => {
            splashScreen.style.display = 'none';
            loginScreen.style.display = 'flex';
            loginScreen.style.animation = 'fadeIn 0.5s ease forwards';
        }, 500);
    }, 2000); // Show splash for 2 seconds

    // Switch between login and signup
    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(signupScreen, loginScreen);
    });

    showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(loginScreen, signupScreen);
    });
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        switchScreen(signupScreen, profileSetupScreen);
    })

    // Handle signup form submission and show verification
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get the phone number value to display in verification screen
        const phoneInput = document.querySelector('#phone-number');
        const selectedCountry = document.querySelector('.selected-country .country-code');
        const userPhoneSpan = document.querySelector('.user-phone');
        
        // Update the phone number in verification screen
        if (phoneInput && selectedCountry) {
            const formattedPhone = `${selectedCountry.textContent} ${phoneInput.value}`;
            userPhoneSpan.textContent = formattedPhone;
        }

        // Switch to verification screen
        switchScreen(profileSetupScreen, verificationScreen);

        // Reset and focus first OTP input
        const otpInputs = document.querySelectorAll('.otp-input-group input');
        otpInputs.forEach(input => input.value = '');
        otpInputs[0].focus();

        // Start the countdown timer
        if (typeof startCountdown === 'function') {
            startCountdown();
        }
    });

    // Handle "Change Number" link in verification screen
    document.getElementById('change-number')?.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(verificationScreen, profileSetupScreen);
    });
});
