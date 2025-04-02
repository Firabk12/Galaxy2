// Get DOM elements
const signupForm = document.getElementById('signup-form');
const passwordInput = document.getElementById('signup-password');
const confirmPasswordInput = document.getElementById('signup-confirm-password');
const strengthBar = document.querySelector('.strength-bar');
const strengthText = document.querySelector('.strength-text');

// Create loading modal HTML
const loadingModal = document.createElement('div');
loadingModal.className = 'loading-modal1';
loadingModal.innerHTML = `
    <div class="loading-content1">
        <div class="galaxy-loader1">
            <div class="galaxy-core1"></div>
            <div class="galaxy-orbit orbit-4"></div>
            <div class="galaxy-orbit orbit-5"></div>
            <div class="galaxy-orbit orbit-6"></div>
        </div>
        <p>Creating your Galaxy...</p>
    </div>
`;
document.body.appendChild(loadingModal);

// Password validation function
function validatePassword(password) {
    let strength = 0;
    let feedback = [];

    // Check length
    if (password.length >= 8) {
        strength += 25;
    } else {
        feedback.push("At least 8 characters");
    }

    // Check uppercase
    if (/[A-Z]/.test(password)) {
        strength += 25;
    } else {
        feedback.push("One uppercase letter");
    }

    // Check lowercase
    if (/[a-z]/.test(password)) {
        strength += 25;
    } else {
        feedback.push("One lowercase letter");
    }

    // Check number and symbol
    if (/\d/.test(password) && /[!@#$%^&*]/.test(password)) {
        strength += 25;
    } else {
        feedback.push("One number and symbol");
    }

    return { strength, feedback };
}

// Update password strength indicator
passwordInput.addEventListener('input', function() {
    const { strength, feedback } = validatePassword(this.value);
    
    // Update strength bar
    strengthBar.style.width = `${strength}%`;
    
    // Update color based on strength
    if (strength <= 25) {
        strengthBar.className = 'strength-bar weak';
        strengthText.textContent = 'Weak';
    } else if (strength <= 50) {
        strengthBar.className = 'strength-bar fair';
        strengthText.textContent = 'Fair';
    } else if (strength <= 75) {
        strengthBar.className = 'strength-bar good';
        strengthText.textContent = 'Good';
    } else {
        strengthBar.className = 'strength-bar strong';
        strengthText.textContent = 'Strong';
    }

    // Show feedback if password is not strong enough
    if (feedback.length > 0) {
        strengthText.textContent = `Need: ${feedback.join(", ")}`;
    }
});

// Confirm password validation
confirmPasswordInput.addEventListener('input', function() {
    if (this.value !== passwordInput.value) {
        this.setCustomValidity("Passwords don't match");
    } else {
        this.setCustomValidity("");
    }
});

// Form submission
signupForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const password = passwordInput.value;
    const { strength, feedback } = validatePassword(password);

    // Check if password meets all requirements
    if (strength < 100) {
        alert("Please ensure your password meets all requirements:\n" + feedback.join("\n"));
        return;
    }

    // Check if passwords match
    if (password !== confirmPasswordInput.value) {
        alert("Passwords don't match!");
        return;
    }

    // Show loading modal
    loadingModal.style.display = 'flex';

    try {
        // Simulate account creation delay (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Hide loading modal and redirect to profile setup
        loadingModal.style.display = 'none';
        window.location.href = '#profileSetupScreen';
        
    } catch (error) {
        loadingModal.style.display = 'none';
        alert('Error creating account. Please try again.');
    }
});