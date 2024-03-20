const video = document.querySelector(".content__video")
const stop = document.querySelector(".content__btn-play")


function videoControl () {
    video.addEventListener(
        "play",
        () => {
          changeButtonState("playpause");
        },
        false,
      );
      
      video.addEventListener(
        "pause",
        () => {
          changeButtonState("playpause");
        },
        false,
      );
      
      stop.addEventListener("click", (e) => {
        video.pause();
        video.currentTime = 0;
        progress.value = 0;
      
        // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
        changeButtonState("playpause");
      });
      
    //   mute.addEventListener("click", (e) => {
    //     video.muted = !video.muted;
    //     changeButtonState("mute");
    //   });
}

export default videoControl;