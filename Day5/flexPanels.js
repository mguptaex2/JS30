const panels = document.querySelectorAll(".panel");
panels.forEach(panel => panel.addEventListener('click',function(){
    this.classList.toggle("open");
}));
function openActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle("open-active");
    }
}
panels.forEach(panel => panel.addEventListener('transitionend',openActive));

