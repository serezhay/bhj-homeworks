const xhr = new XMLHttpRequest();

xhr.open('get', ' https://students.netoservices.ru/nestjs-backend/poll')
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        const response = JSON.parse(xhr.response)
        for (let i in response.data) {
            if(i === 'title') {
                document.getElementById('poll__title').append(`${response.data[i]}`)
            }
            if( i === 'answers') {
               const answers = response.data[i];

               answers.forEach(element => {
                document.getElementById('poll__answers').insertAdjacentHTML('beforeend', `
                    <button class="poll__answer">
                        ${element}
                </button> `)
            });
        }
        [...document.getElementsByClassName('poll__answer')].forEach(item => {
            item.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })
        })
    }
}
})