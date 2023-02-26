const progress = document.getElementById('progress');

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    progress.setAttribute('value', '0');
    xhr.addEventListener('readystatechange', () => {
        xhr.upload.onprogress = (evt) => {
            const download = document.createElement('div');
            download.classList.add('download')
            download.textContent = '<p>Идет загрузка</p>';
            progress.setAttribute('value', evt.loaded)
        } 
        xhr.upload.onload = () => {
            const download = document.createElement('div');
            download.classList.add('download')
            download.innerHTML = '<p>Загрузка завершена</p>';
            console.log(download)
            progress.insertAdjacentHTML('afterend', download.textContent)
        }
        xhr.upload.onerror = () => {
            alert('Произошла ошибка!' );
          }
    })

    const formData = new FormData(document.getElementById('form'));
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData)
})