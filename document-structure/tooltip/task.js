const hasTooltip = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
for (let i of hasTooltip) {
    i.addEventListener('click', (evt) => {
        evt.preventDefault() ;
        const place = i.getBoundingClientRect();
        const {left, bottom} = place;
        tooltip.style.left = left + 'px';
        tooltip.style.top = bottom + 'px';
        tooltip.textContent = i.getAttribute('title');
        i.insertAdjacentElement('beforebegin', tooltip).classList.toggle('tooltip_active');
        i.insertAdjacentElement('beforebegin', tooltip);
    })
}