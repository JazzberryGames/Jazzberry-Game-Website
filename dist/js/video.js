window.onload = controlVideo();
$previousIndex = 0;
$currentIndex = 0;

function controlVideo() {
    videoObserver = setInterval(function() { checkCarouselSlide() }, 20);
}

function checkCarouselSlide() {
    activeSlide = $(".active");
    slideNumber = activeSlide.index();
    if (slideNumber !== $currentIndex) {
        $previousIndex = $currentIndex;
        $currentIndex = slideNumber;
        playNextVideo()
    }
}

function playNextVideo() {
    previousVideo = document.getElementById("video" + $previousIndex)
    currentVideo = document.getElementById("video" + $currentIndex)
    previousVideo.pause()
    previousVideo.autoplay = false;
    previousVideo.loop = false;
    currentVideo.play()
    currentVideo.loop = true;
}
