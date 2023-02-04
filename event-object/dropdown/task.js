const dropdownList = Array.from(document.getElementsByClassName('dropdown__list'));
function handler(index) {
    dropdownList[index].classList.add('dropdown__list_active');
}
console.log(dropdownList)
dropdownList.forEach((item, index) => {
    console.log(item)
    item.addEventListener('click', handler(index));
    }
)
