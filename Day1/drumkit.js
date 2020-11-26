window.addEventListener("keydown",function(e) {
    var audio = document.querySelector(`audio[data-key="${e.code}"]`);
    var key = document.querySelector(`.key[data-key="${e.code}"]`);
    if(!audio) return;
   audio.currentTime = 0;
    audio.play();
    key.classList.add("play");
});
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend",function(e){
    if(e.propertyName != "transform") return;
    this.classList.remove("play");
}));