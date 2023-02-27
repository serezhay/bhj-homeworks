const progress = document.getElementById('progress');

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    progress.setAttribute('value', '0');
    xhr.addEventListener('readystatechange', () => {

        xhr.upload.onloadstart = () => {
            if (document.querySelector('.download')) {
                document.querySelector('.download').textContent = 'Загрузка началась';
            } else {
                const download = document.createElement('div');
                download.classList.add('download');
                download.textContent = 'Загрузка началась';
                progress.insertAdjacentElement('afterend', download)
            }
        }

        xhr.upload.onprogress = (evt) => {
            document.querySelector('.download').textContent = 'Идет загрузка';
            progress.max = evt.total
            progress.value = evt.loaded;
        }
        
        xhr.upload.onload = () => {
            document.querySelector('.download').textContent = 'Загрузка завершена';
        }
    })

    const formData = new FormData(document.getElementById('form'));
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData)
})