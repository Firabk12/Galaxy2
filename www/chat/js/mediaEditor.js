export const mediaEditorUI = {
    currentMedia: null,
    editingType: null, // 'image' or 'video'

    initializeEditor(file) {
        this.editingType = file.type.startsWith('image/') ? 'image' : 'video';
        this.currentMedia = file;
        
        // Create and show editor UI
        document.body.insertAdjacentHTML('beforeend', this.generateEditorHTML());
        
        // Initialize after small delay for smooth animation
        setTimeout(() => {
            const editor = document.querySelector('.media-editor');
            editor.classList.add('show');
            this.loadMedia(file);
            this.initializeControls();
        }, 50);
    },

    generateEditorHTML() {
        return `
            <div class="media-editor">
                <div class="editor-header">
                    <button class="editor-close">
                        <i class="ri-close-line"></i>
                    </button>
                    <div class="editor-actions">
                        <button class="action-btn" data-action="crop">
                            <i class="ri-crop-line"></i>
                            <span>Crop</span>
                        </button>
                        ${this.editingType === 'image' ? `
                            <button class="action-btn" data-action="filter">
                                <i class="ri-contrast-line"></i>
                                <span>Filters</span>
                            </button>
                            <button class="action-btn" data-action="adjust">
                                <i class="ri-contrast-2-line"></i>
                                <span>Adjust</span>
                            </button>
                            <button class="action-btn" data-action="text">
                                <i class="ri-text"></i>
                                <span>Text</span>
                            </button>
                            <button class="action-btn" data-action="draw">
                                <i class="ri-pencil-line"></i>
                                <span>Draw</span>
                            </button>
                            <button class="action-btn" data-action="blur">
                                <i class="ri-blur-off-line"></i>
                                <span>Blur</span>
                            </button>
                        ` : `
                            <button class="action-btn" data-action="trim">
                                <i class="ri-scissors-line"></i>
                                <span>Trim</span>
                            </button>
                            <button class="action-btn" data-action="audio">
                                <i class="ri-volume-up-line"></i>
                                <span>Audio</span>
                            </button>
                        `}
                    </div>
                    <button class="editor-done">
                        <i class="ri-check-line"></i>
                        Done
                    </button>
                </div>

                <div class="editor-main">
                    <div class="media-canvas-container">
                        ${this.editingType === 'image' ? `
                            <canvas id="mediaCanvas"></canvas>
                        ` : `
                            <video id="mediaVideo" controls>
                                Your browser doesn't support video playback.
                            </video>
                        `}
                    </div>

                    <!-- Dynamic controls container -->
                    <div class="editor-controls"></div>
                </div>

                <!-- Filter controls -->
                <div class="control-panel filter-panel" hidden>
                    <div class="filters-list">
                        <button class="filter-btn" data-filter="none">
                            <div class="filter-preview">Original</div>
                            <span>Original</span>
                        </button>
                        <button class="filter-btn" data-filter="chrome">
                            <div class="filter-preview">Chrome</div>
                            <span>Chrome</span>
                        </button>
                        <button class="filter-btn" data-filter="fade">
                            <div class="filter-preview">Fade</div>
                            <span>Fade</span>
                        </button>
                        <button class="filter-btn" data-filter="mono">
                            <div class="filter-preview">Mono</div>
                            <span>Mono</span>
                        </button>
                        <!-- Add more filters -->
                    </div>
                </div>

                <!-- Adjust controls -->
                <div class="control-panel adjust-panel" hidden>
                    <div class="adjust-controls">
                        <div class="adjust-item">
                            <span>Brightness</span>
                            <input type="range" min="-100" max="100" value="0" data-adjust="brightness">
                        </div>
                        <div class="adjust-item">
                            <span>Contrast</span>
                            <input type="range" min="-100" max="100" value="0" data-adjust="contrast">
                        </div>
                        <div class="adjust-item">
                            <span>Saturation</span>
                            <input type="range" min="-100" max="100" value="0" data-adjust="saturation">
                        </div>
                    </div>
                </div>

                <!-- Text overlay panel -->
                <div class="control-panel text-panel" hidden>
                    <div class="text-controls">
                        <input type="text" placeholder="Enter text...">
                        <div class="text-options">
                            <button class="font-size-btn">
                                <i class="ri-font-size"></i>
                            </button>
                            <input type="color" class="color-picker">
                            <button class="align-btn">
                                <i class="ri-align-left"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    loadMedia(file) {
        if (this.editingType === 'image') {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.getElementById('mediaCanvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            const video = document.getElementById('mediaVideo');
            video.src = URL.createObjectURL(file);
        }
    },

    initializeControls() {
        const editor = document.querySelector('.media-editor');
        
        // Close button
        editor.querySelector('.editor-close').addEventListener('click', () => {
            this.closeEditor();
        });

        // Action buttons
        editor.querySelectorAll('.action-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                this.handleAction(action);
            });
        });

        // Done button
        editor.querySelector('.editor-done').addEventListener('click', () => {
            this.saveAndClose();
        });
    },

    handleAction(action) {
        const controlPanels = document.querySelectorAll('.control-panel');
        controlPanels.forEach(panel => panel.hidden = true);

        switch(action) {
            case 'filter':
                document.querySelector('.filter-panel').hidden = false;
                break;
            case 'adjust':
                document.querySelector('.adjust-panel').hidden = false;
                break;
            case 'text':
                document.querySelector('.text-panel').hidden = false;
                break;
            // Add more cases for other actions
        }
    },

    closeEditor() {
        const editor = document.querySelector('.media-editor');
        editor.classList.remove('show');
        setTimeout(() => editor.remove(), 300);
    },

    saveAndClose() {
        if (this.editingType === 'image') {
            const canvas = document.getElementById('mediaCanvas');
            canvas.toBlob((blob) => {
                const file = new File([blob], this.currentMedia.name, {
                    type: this.currentMedia.type
                });
                privateChatUI.handleMediaPreview(file);
            });
        } else {
            // Handle video saving
            const video = document.getElementById('mediaVideo');
            // Implement video saving logic
        }
        this.closeEditor();
    }
};