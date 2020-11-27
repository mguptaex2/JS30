var secondHand = document.querySelector(".second");
var minuteHand = document.querySelector(".minute");
var hourHand = document.querySelector(".hour");
function setTime() {
    const now = new Date();
    const sec = now.getSeconds(); 
    const secDegree = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secDegree}deg)`;
    const mins = now.getMinutes();
    const minDegree = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDegree}deg)`;
    const hrs = now.getHours();
    const hrDegree = ((hrs / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrDegree}deg)`;
}
setInterval(setTime,1000);