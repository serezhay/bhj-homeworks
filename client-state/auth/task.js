const exit = document.createElement('button');
exit.classList.add('exit');
exit.textContent = 'Выход';

if(localStorage.login && localStorage.password) {
    document.getElementById('signin').classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    welcome.innerText += (`${localStorage.user_id}`);
    welcome.insertAdjacentElement('afterend', exit)
}
const logo = document.getElementById('signin__form');
logo.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(logo);
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState == xhr.DONE && xhr.status == 201) {
            const json = JSON.parse(xhr.responseText)
            if (json.success) {
                const welcome = document.getElementById('welcome');
                const user = document.createElement('span');
                welcome.classList.add('welcome_active');
                user.setAttribute('data-user_id', json.user_id);
                user.innerText = user.getAttribute('data-user_id')
                welcome.insertAdjacentElement('beforeend', user);
                document.getElementById('signin').classList.remove('signin_active')
                localStorage.setItem('login', logo.login.value);
                localStorage.setItem('password', logo.password.value);
                localStorage.setItem('user_id', user.getAttribute('data-user_id'))

                welcome.insertAdjacentElement('afterend', exit)
            }
            if(!json.success) {
                alert('Неверный логин/пароль')
            }
        }
    })
    xhr.send(formData)
})

exit.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})