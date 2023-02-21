const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
for (let i of hasTooltip) {
    i.addEventListener('click', (evt) => {
        evt.preventDefault() ;
        let place = i.getBoundingClientRect();
        let left = place.left;
        let top = place.bottom;
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.textContent = i.getAttribute('title');
        i.appendChild(tooltip).classList.add('tooltip_active');
    })
}