document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const profileUploadInput = document.getElementById('profile-upload');
    const profilePreviewImg = document.getElementById('profile-preview');
    const profileUploadDiv = document.querySelector('.profile-upload');

    // Add click event to the profile preview div
    profileUploadDiv.addEventListener('click', function() {
        profileUploadInput.click(); // Trigger the file input when the div is clicked
    });

    // Handle file selection
    profileUploadInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        // Check if a file was selected
        if (file) {
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Please select an image file');
                return;
            }

            // Validate file size (max 5MB)
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            if (file.size > maxSize) {
                alert('Image size should be less than 5MB');
                return;
            }

            // Create a URL for the selected file
            const reader = new FileReader();
            reader.onload = function(e) {
                // Update the preview image
                profilePreviewImg.src = e.target.result;
                
                // Add a class to indicate an image has been selected
                profileUploadDiv.classList.add('has-image');
            };
            reader.readAsDataURL(file);
        }
    });

    // Optional: Add drag and drop support
    profileUploadDiv.addEventListener('dragover', function(e) {
        e.preventDefault();
        profileUploadDiv.classList.add('dragover');
    });

    profileUploadDiv.addEventListener('dragleave', function(e) {
        e.preventDefault();
        profileUploadDiv.classList.remove('dragover');
    });

    profileUploadDiv.addEventListener('drop', function(e) {
        e.preventDefault();
        profileUploadDiv.classList.remove('dragover');
        
        const file = e.dataTransfer.files[0];
        if (file) {
            profileUploadInput.files = e.dataTransfer.files;
            // Trigger the change event manually
            const event = new Event('change');
            profileUploadInput.dispatchEvent(event);
        }
    });
});