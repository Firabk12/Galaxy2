// Instead of export, we'll attach it to the window object
const ValidationManager = (function() {
    // Strict validation rules and patterns
    const VALIDATION_RULES = {
        username: {
            pattern: /^[a-zA-Z0-9_]{4,20}$/,
            message: "Username must be 4-20 characters, using letters, numbers, and underscores only"
        },
        displayName: {
            pattern: /^[\p{L}\s]{2,30}$/u,
            message: "Display name must be 2-30 characters, letters and spaces only"
        },
        email: {
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Please enter a valid email address"
        },
        password: {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: "Password must have at least 8 characters, including uppercase, lowercase, number, and special character"
        },
        phone: {
            pattern: /^\d{9,10}$/,
            message: "Please enter a valid phone number"
        }
    };

    // Password strength levels
    const PASSWORD_STRENGTH = {
        0: { class: '', text: 'Password Strength' },
        1: { class: 'strength-weak', text: 'Weak' },
        2: { class: 'strength-medium', text: 'Medium' },
        3: { class: 'strength-strong', text: 'Strong' }
    };

    class FormValidator {
        constructor() {
            this.errors = new Map();
        }

        // All the methods remain the same
        validateField(field, value) {
            const rule = VALIDATION_RULES[field];
            if (!rule) return true;

            const isValid = rule.pattern.test(value);
            if (!isValid) {
                this.errors.set(field, rule.message);
            } else {
                this.errors.delete(field);
            }
            return isValid;
        }

        checkPasswordStrength(password) {
            let strength = 0;
            
            // Length check
            if (password.length >= 8) strength++;
            
            // Complexity checks
            if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
            if (/[0-9]/.test(password) && /[@$!%*?&]/.test(password)) strength++;

            return PASSWORD_STRENGTH[strength];
        }

        validatePhoneNumber(number, countryCode) {
            const cleanNumber = number.replace(/\D/g, '');
            
            switch(countryCode) {
                case 'ET': // Ethiopia
                    return /^[79]\d{8}$/.test(cleanNumber);
                default:
                    return VALIDATION_RULES.phone.pattern.test(cleanNumber);
            }
        }

        validateOTP(code) {
            return /^\d{6}$/.test(code);
        }

        checkSecurityRisks(formData) {
            const risks = [];

            if (/viagra|casino|lottery/i.test(formData.toString())) {
                risks.push('Suspicious content detected');
            }

            if (/['";]|\b(SELECT|INSERT|UPDATE|DELETE|DROP)\b/i.test(formData.toString())) {
                risks.push('Invalid characters detected');
            }

            return risks;
        }

        showError(inputElement, message) {
            const container = inputElement.closest('.floating-input-group');
            let errorSpan = container.querySelector('.error-message');
            
            if (!errorSpan) {
                errorSpan = document.createElement('span');
                errorSpan.className = 'error-message';
                container.appendChild(errorSpan);
            }
            
            errorSpan.textContent = message;
            container.classList.add('error');
            
            inputElement.classList.add('shake');
            setTimeout(() => inputElement.classList.remove('shake'), 500);
        }

        clearError(inputElement) {
            const container = inputElement.closest('.floating-input-group');
            const errorSpan = container.querySelector('.error-message');
            if (errorSpan) errorSpan.remove();
            container.classList.remove('error');
        }
    }

    // Return the validator instance
    return new FormValidator();
})();

// Attach to window object
window.validator = ValidationManager;