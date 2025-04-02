class GalaxyMediaPlayer {
    constructor() {
        this.currentAudio = null;
        this.isPlaying = false;
        this.initializePlayer();
    }

    initializePlayer() {
        // Create player template
        const playerTemplate = `
            <div class="galaxy-player">
                <div class="player__wrapper">
                    <!-- Thumbnail/Album Art -->
                    <div class="player__art">
                        <i class="fas fa-music"></i>
                    </div>
                    
                    <!-- Player Controls -->
                    <div class="player__controls">
                        <!-- Title and Artist -->
                        <div class="player__info">
                            <span class="player__title">No track selected</span>
                            <span class="player__artist">Select an audio file</span>
                        </div>
                        
                        <!-- Progress Bar -->
                        <div class="player__progress-container">
                            <div class="player__progress-bar">
                                <div class="player__progress"></div>
                            </div>
                            <div class="player__time">
                                <span class="player__current">0:00</span>
                                <span class="player__duration">0:00</span>
                            </div>
                        </div>
                        
                        <!-- Control Buttons -->
                        <div class="player__buttons">
                            <button class="player__btn" data-action="prev">
                                <i class="fas fa-backward"></i>
                            </button>
                            <button class="player__btn player__btn--play" data-action="play">
                                <i class="fas fa-play"></i>
                            </button>
                            <button class="player__btn" data-action="next">
                                <i class="fas fa-forward"></i>
                            </button>
                            <div class="player__volume">
                                <i class="fas fa-volume-up"></i>
                                <input type="range" min="0" max="100" value="100" class="volume__slider">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Insert player into DOM
        document.body.insertAdjacentHTML('beforeend', playerTemplate);
        
        // Initialize controls
        this.initializeControls();
    }

    initializeControls() {
        const player = document.querySelector('.galaxy-player');
        const playBtn = player.querySelector('[data-action="play"]');
        const prevBtn = player.querySelector('[data-action="prev"]');
        const nextBtn = player.querySelector('[data-action="next"]');
        const volumeSlider = player.querySelector('.volume__slider');
        const progressBar = player.querySelector('.player__progress-bar');

        // Play/Pause
        playBtn.addEventListener('click', () => this.togglePlay());

        // Volume control
        volumeSlider.addEventListener('input', (e) => {
            if (this.currentAudio) {
                this.currentAudio.volume = e.target.value / 100;
            }
        });

        // Progress bar click
        progressBar.addEventListener('click', (e) => {
            if (this.currentAudio) {
                const percent = e.offsetX / progressBar.offsetWidth;
                this.currentAudio.currentTime = percent * this.currentAudio.duration;
            }
        });
    }

    loadAudio(audioUrl, title = 'Unknown Track', artist = 'Unknown Artist') {
        if (this.currentAudio) {
            this.currentAudio.pause();
        }

        this.currentAudio = new Audio(audioUrl);
        this.updatePlayerInfo(title, artist);
        this.attachAudioListeners();
        this.togglePlay();
    }

    attachAudioListeners() {
        if (!this.currentAudio) return;

        // Time update
        this.currentAudio.addEventListener('timeupdate', () => {
            const progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
            document.querySelector('.player__progress').style.width = `${progress}%`;
            
            // Update current time
            const currentTime = this.formatTime(this.currentAudio.currentTime);
            document.querySelector('.player__current').textContent = currentTime;
        });

        // Load metadata (duration)
        this.currentAudio.addEventListener('loadedmetadata', () => {
            const duration = this.formatTime(this.currentAudio.duration);
            document.querySelector('.player__duration').textContent = duration;
        });

        // End of track
        this.currentAudio.addEventListener('ended', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });
    }

    togglePlay() {
        if (!this.currentAudio) return;

        if (this.isPlaying) {
            this.currentAudio.pause();
        } else {
            this.currentAudio.play();
        }

        this.isPlaying = !this.isPlaying;
        this.updatePlayButton();
    }

    updatePlayButton() {
        const playBtn = document.querySelector('.player__btn--play i');
        playBtn.className = this.isPlaying ? 'fas fa-pause' : 'fas fa-play';
    }

    updatePlayerInfo(title, artist) {
        document.querySelector('.player__title').textContent = title;
        document.querySelector('.player__artist').textContent = artist;
    }

    formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }
}