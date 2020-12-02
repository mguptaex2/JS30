const inputs = document.querySelectorAll(".controls input");
inputs.forEach(input => input.addEventListener("change",function() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}));