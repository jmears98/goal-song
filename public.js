function setupAudioPlayer() {
    document.getElementById("playButton").addEventListener("click", function () {
        var audioPlayer = document.getElementById("audioPlayer");
        if (audioPlayer.paused) {
            audioPlayer.play();
            document.getElementById("playButton").innerText = "PAUSE";
        } else {
            audioPlayer.pause();
            audioPlayer.currentTime = 0; 
            document.getElementById("playButton").innerText = "BINGO";
        }
    });
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.addEventListener("ended", function () {
        location.reload();
    });
}

setupAudioPlayer();

