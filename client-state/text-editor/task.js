const button = document.createElement('button');
button.insertAdjacentText('afterbegin', 'Очистить поле');
document.getElementById('editor').insertAdjacentElement('afterend', button)

button.addEventListener('click', () => {
    document.getElementById('editor').value = '';
    localStorage.setItem('text', document.getElementById('editor').value);
})

document.getElementById('editor').addEventListener('keyup', () => {
     localStorage.setItem('text', document.getElementById('editor').value);
})
document.getElementById('editor').value = localStorage.getItem('text')