
console.log(document.cookie)
document.getElementById('subscribe-modal').classList.add('modal_active');
document.querySelector('.modal__close_times').addEventListener('click', () => {
    document.getElementById('subscribe-modal').classList.remove('modal_active');
    setCookie('modalContent', 'Закрыто')

    console.log(document.cookie)
})

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}  

// function getCookie(name) {
//     const pairs = document.cookie.split(';')
//     const cookie = pairs.find(i => i.startsWith(name + '='))
//     return cookie.substr(name.length + 1)
// }