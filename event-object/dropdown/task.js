const dropdownList = Array.from(document.getElementsByClassName('dropdown__item'))
let dropdownValue = document.querySelector('.dropdown__value');
function carrentText(text) {
    dropdownValue.textContent = text;
}
Array.from(document.querySelectorAll('.dropdown')).forEach(element => {
    element.onclick = () => {
        document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
        dropdownList.forEach((item) => {
            item.onclick = (evt) => {
                evt.preventDefault();
                item.addEventListener('click', carrentText(item.querySelector('.dropdown__link').textContent))
            }
        })
    }
})