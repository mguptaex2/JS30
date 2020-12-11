const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
let lastChecked;
function selectCheckbox(e) {
    let inBetween = false;
    let uncheckBetween = false;
    if(e.shiftKey && this.checked) {
        checkboxes.forEach(check => {
            if(check === this || check === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                check.checked = true;
            }
        });
    }
    
    if(e.shiftKey && !this.checked) {
        checkboxes.forEach(check => {
            if(check === this || check === lastChecked) {
                uncheckBetween = !uncheckBetween;
            }
            if(uncheckBetween) {
                check.checked = false;
            }
        });
        lastChecked.checked = false;
    }
    lastChecked = this;
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click',selectCheckbox));