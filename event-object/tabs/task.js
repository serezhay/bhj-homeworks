const tab = [...document.getElementsByClassName('tab')];
const tabContent = [... document.getElementsByClassName('tab__content')];
function removeClass() {
    tab.forEach((item, index)=> {
        item.classList.remove('tab_active');
        tabContent[index].classList.remove('tab__content_active');
    })
}
tab.forEach((item, index) => {
    item.addEventListener('click', removeClass);
    item.addEventListener('click', () => {
        item.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
})