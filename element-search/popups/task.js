document.getElementById('modal_main').classList.add('modal_active');
const modalClose = document.getElementsByClassName('modal__close');
Array.from(modalClose).forEach( (item) => {
    item.onclick = () => {
        document.getElementById('modal_main').classList.remove('modal_active');
        document.getElementById('modal_success').classList.remove('modal_active')
    }
})

const show = document.getElementsByClassName('show-success');
Array.from(show).forEach( (item) => {
    item.onclick = () => {
        document.getElementById('modal_success').classList.add('modal_active');
    }
})


