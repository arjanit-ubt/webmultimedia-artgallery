function playAudio(id) {
    var playButton = document.getElementById('play-' + id);
    var pauseButton = document.getElementById('pause-' + id);
    var resetButton = document.getElementById('reset-' + id);

    // Play the audio
    var audio = document.getElementById('audio-' + id);
    audio.play();

    // Show pause and reset buttons, hide play button
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';

    // Show the description
    var description = document.getElementById('description-' + id);
    var title = document.getElementById('title-' + id);
    description.style.display = 'block';
    setTimeout(function() {
        description.style.opacity = 1;
    }, 10);
    title.style.opacity = 0;
}

function pauseAudio(id) {
    var playButton = document.getElementById('play-' + id);
    var pauseButton = document.getElementById('pause-' + id);

    // Pause the audio
    var audio = document.getElementById('audio-' + id);
    audio.pause();

    // Show play button, hide pause button
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
}

function toggleMute(id) {
    var muteButton = document.getElementById('mute-' + id);
    var unmuteIcon = muteButton.querySelector('.unmute-icon');
    var muteIcon = muteButton.querySelector('.mute-icon');

    // Toggle mute/unmute
    var audio = document.getElementById('audio-' + id);
    audio.muted = !audio.muted;

    // Toggle icons
    unmuteIcon.style.display = audio.muted ? 'none' : 'inline-block';
    muteIcon.style.display = audio.muted ? 'inline-block' : 'none';
}

function resetAudio(id) {
    var playButton = document.getElementById('play-' + id);
    var pauseButton = document.getElementById('pause-' + id);
    var resetButton = document.getElementById('reset-' + id);

    // Reset the audio
    var audio = document.getElementById('audio-' + id);
    audio.pause();
    audio.currentTime = 0;

    // Show play button, hide pause and reset buttons
    playButton.style.display = 'inline-block';
    pauseButton.style.display = 'none';
    resetButton.style.display = 'none';

    // Show the title and hide the description
    var description = document.getElementById('description-' + id);
    var title = document.getElementById('title-' + id);
    description.style.opacity = 0;
    setTimeout(function() {
        description.style.display = 'none';
        title.style.opacity = 1;
    }, 500);
}
