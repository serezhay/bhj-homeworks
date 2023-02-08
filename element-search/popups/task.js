document.getElementById('modal_main').classList.add('modal_active');
const modalClose = Array.from(document.getElementsByClassName('modal__close_times'));
const show = Array.from(document.getElementsByClassName('show-success'));

modalClose.forEach(item => {
    item.onclick = () => {
        item.closest('.modal').classList.remove('modal_active');
    }
})

show.forEach(item => {
    item.onclick = () => {
        document.getElementById('modal_main').classList.remove('modal_active');
        document.getElementById('modal_success').classList.add('modal_active');
    }
})



