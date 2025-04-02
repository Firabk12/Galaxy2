document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordScreen = document.getElementById('forgot-password-screen');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const backToLoginBtn = document.getElementById('back-to-login');
    const forgotPasswordLink = document.querySelector('.forgot-password');

    // Steps
    const stepEmail = document.getElementById('step-email');
    const stepPassword = document.getElementById('step-password');
    const stepLine = document.querySelector('.step-line');
    const steps = document.querySelectorAll('.step');
    
    function switchScreen(hideScreen, showScreen) {
        // Add fadeOut animation to current screen
        hideScreen.style.animation = 'fadeOut 0.3s ease forwards';
        
        // After fadeOut, hide current and show new screen
        setTimeout(() => {
            hideScreen.style.display = 'none';
            showScreen.style.display = 'flex';
            // Add fadeIn animation to new screen
            showScreen.style.animation = 'fadeIn 0.3s ease forwards';
        }, 300);
    }

    // Show forgot password screen
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(document.querySelector('.auth-screen[style*="flex"]'), forgotPasswordScreen);
    });

    // Show forgot password screen
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(document.querySelector('.auth-screen[style*="flex"]'), forgotPasswordScreen);
    });

    // Back to login
    backToLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchScreen(forgotPasswordScreen, document.getElementById('login-screen'));
        resetPasswordForm();
    });

    // Form submission
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const currentStep = forgotPasswordForm.querySelector('.form-step:not(.hidden)');
        
        if (currentStep.id === 'step-email') {
            handleEmailStep();
        } else {
            handlePasswordStep();
        }
    });

    async function handleEmailStep() {
        const emailInput = document.getElementById('reset-email');
        const email = emailInput.value;

        if (!validator.validateField('email', email)) {
            validator.showError(emailInput, 'Please enter a valid email address');
            return;
        }

        // Show loading state
        const submitBtn = stepEmail.querySelector('.primary-btn');
        submitBtn.classList.add('loading');
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success - move to next step
            moveToNextStep();
        } catch (error) {
            showNotification('Error sending reset link. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
        }
    }

    async function handlePasswordStep() {
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-new-password').value;

        // Validate password
        if (!validator.validateField('password', newPassword)) {
            validator.showError(document.getElementById('new-password'), 
                'Password must meet security requirements');
            return;
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            validator.showError(document.getElementById('confirm-new-password'), 
                'Passwords do not match');
            return;
        }

        const submitBtn = stepPassword.querySelector('.primary-btn');
        submitBtn.classList.add('loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            showSuccessMessage();
            
            // Redirect to login after delay
            setTimeout(() => {
                switchScreen(forgotPasswordScreen, document.getElementById('login-screen'));
                resetPasswordForm();
            }, 3000);
        } catch (error) {
            showNotification('Error resetting password. Please try again.', 'error');
        } finally {
            submitBtn.classList.remove('loading');
        }
    }

    function moveToNextStep() {
        stepEmail.classList.add('hidden');
        stepPassword.classList.remove('hidden');
        stepLine.classList.add('half');
        steps[0].classList.add('completed');
        steps[1].classList.add('active');
    }

    function showSuccessMessage() {
        const successHtml = `
            <div class="auth-header">
                <div class="success-checkmark">
                    <i class="fas fa-check-circle" style="color: var(--success-color); font-size: 48px;"></i>
                </div>
                <h2>Password Reset!</h2>
                <p>Your password has been successfully reset</p>
            </div>
        `;
        
        forgotPasswordForm.innerHTML = successHtml;
    }

    function resetPasswordForm() {
        // Reset form to initial state
        forgotPasswordForm.reset();
        stepEmail.classList.remove('hidden');
        stepPassword.classList.add('hidden');
        stepLine.classList.remove('half', 'full');
        steps.forEach((step, index) => {
            step.classList.remove('completed', 'active');
            if (index === 0) step.classList.add('active');
        });
    }

    // Handle new password strength indicator
    const newPasswordInput = document.getElementById('new-password');
    newPasswordInput.addEventListener('input', (e) => {
        const strength = validator.checkPasswordStrength(e.target.value);
        const strengthBar = document.querySelector('#step-password .strength-bar');
        const strengthText = document.querySelector('#step-password .strength-text');
        
        strengthBar.className = 'strength-bar ' + strength.class;
        strengthText.textContent = strength.text;
    });
});