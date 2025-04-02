// Import validator
import validator from './validation.js';

class UI {
    constructor() {
        this.validator = window.validator;
        // Initialize elements
        this.initializeElements();
        // Bind events
        this.bindEvents();
        // Initialize animations
        this.initializeAnimations();
    }

    initializeElements() {
        // Form elements
        this.loginForm = document.getElementById('login-form');
        this.signupForm = document.getElementById('signup-form');
        this.verificationForm = document.getElementById('verification-form');
        
        // Input elements with floating labels
        this.floatingInputs = document.querySelectorAll('.floating-input-group input');
        
        // Password elements
        this.passwordInputs = document.querySelectorAll('input[type="password"]');
        this.strengthIndicator = document.querySelector('.strength-bar');
        this.strengthText = document.querySelector('.strength-text');
        
        // Phone elements
        this.countrySelect = document.querySelector('.country-select');
        this.phoneInput = document.querySelector('#phone-number');
        
        // OTP elements
        this.otpInputs = document.querySelectorAll('.otp-input-group input');
    }

    bindEvents() {
        // Form submissions
        this.loginForm?.addEventListener('submit', (e) => this.handleFormSubmit(e, 'login'));
        this.signupForm?.addEventListener('submit', (e) => this.handleFormSubmit(e, 'signup'));
        this.verificationForm?.addEventListener('submit', (e) => this.handleFormSubmit(e, 'verification'));

        // Input validations
        this.floatingInputs.forEach(input => {
            input.addEventListener('input', (e) => this.handleInput(e));
            input.addEventListener('blur', (e) => this.handleBlur(e));
        });

        // Password strength
        this.passwordInputs.forEach(input => {
            input.addEventListener('input', (e) => this.updatePasswordStrength(e));
        });

        // Phone number formatting
        this.phoneInput?.addEventListener('input', (e) => this.formatPhoneNumber(e));
    }

    initializeAnimations() {
        // Initialize GSAP animations if available
        if (typeof gsap !== 'undefined') {
            gsap.from('.auth-container', {
                duration: 1,
                y: 30,
                opacity: 0,
                ease: 'power3.out'
            });
        }

        // Add parallax effect to astronaut
        document.addEventListener('mousemove', (e) => {
            const astronaut = document.querySelector('.astronaut-icon');
            if (astronaut) {
                const speed = 0.05;
                const x = (window.innerWidth / 2 - e.clientX) * speed;
                const y = (window.innerHeight / 2 - e.clientY) * speed;
                astronaut.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    }

    async handleFormSubmit(e, formType) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        // Show loading state
        this.setLoadingState(form, true);
        
        try {
            // Validate form
            if (!this.validateForm(formType, formData)) {
                this.setLoadingState(form, false);
                return;
            }

            // Security checks
            const securityRisks = validator.checkSecurityRisks(formData);
            if (securityRisks.length > 0) {
                throw new Error('Security check failed: ' + securityRisks.join(', '));
            }

            // Handle different form submissions
            switch(formType) {
                case 'login':
                    await this.handleLogin(formData);
                    break;
                case 'signup':
                    await this.handleSignup(formData);
                    break;
                case 'verification':
                    await this.handleVerification(formData);
                    break;
            }

        } catch (error) {
            this.showNotification(error.message, 'error');
        } finally {
            this.setLoadingState(form, false);
        }
    }

    validateForm(formType, formData) {
        let isValid = true;

        switch(formType) {
            case 'login':
                isValid = this.validateLoginForm(formData);
                break;
            case 'signup':
                isValid = this.validateSignupForm(formData);
                break;
            case 'verification':
                isValid = this.validateVerificationForm(formData);
                break;
        }

        return isValid;
    }

    handleInput(e) {
        const input = e.target;
        const field = input.id.replace(/(login-|signup-)/, '');
        
        // Real-time validation
        if (validator.validateField(field, input.value)) {
            validator.clearError(input);
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
        }
    }

    handleBlur(e) {
        const input = e.target;
        const field = input.id.replace(/(login-|signup-)/, '');
        
        if (!validator.validateField(field, input.value)) {
            validator.showError(input, VALIDATION_RULES[field].message);
        }
    }

    updatePasswordStrength(e) {
        const password = e.target.value;
        const strength = validator.checkPasswordStrength(password);
        
        this.strengthIndicator.className = 'strength-bar ' + strength.class;
        this.strengthText.textContent = strength.text;
    }

    formatPhoneNumber(e) {
        const input = e.target;
        let number = input.value.replace(/\D/g, '');
        
        // Format based on selected country
        const countryCode = this.countrySelect.querySelector('.selected-country').dataset.code;
        const formatted = this.formatNumberForCountry(number, countryCode);
        
        input.value = formatted;
    }

    formatNumberForCountry(number, countryCode) {
        switch(countryCode) {
            case 'ET':
                return number.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
            default:
                return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
        }
    }

    setLoadingState(form, isLoading) {
        const button = form.querySelector('button[type="submit"]');
        if (isLoading) {
            button.disabled = true;
            button.classList.add('loading');
        } else {
            button.disabled = false;
            button.classList.remove('loading');
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate
        gsap.fromTo(notification, 
            { y: -100, opacity: 0 },
            { y: 20, opacity: 1, duration: 0.5 }
        );
        
        // Remove after delay
        setTimeout(() => {
            gsap.to(notification, {
                opacity: 0,
                y: -100,
                duration: 0.5,
                onComplete: () => notification.remove()
            });
        }, 3000);
    }
}

// Initialize UI
document.addEventListener('DOMContentLoaded', () => {
    window.galaxyUI = new UI();
});