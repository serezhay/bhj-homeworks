let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.getResponseHeader('CharCode', 'Value')
xhr.send()
xhr.addEventListener('readystatechange', (e) => {
    e.preventDefault();
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        document.querySelector('#loader').classList.remove('loader_active');
        const currency =  JSON.parse(xhr.responseText, function(key, value) {
            if (key === 'date') {
                return new Date(value)
            }
            return value
        })
        const {Valute} = currency.response
        for(let i in Valute) {
            const {CharCode, Value, Name} = Valute[i];
            document.getElementById('items').insertAdjacentHTML('beforeend', `
            <div class = "item">
                <div class="item__code">
                    ${CharCode}
                </div>
                <div class="item__value">
                    ${Value}
                </div>
                <div class="item__currency">
                    ${Name}
                </div>
            </div> `
            )
        }
    }
    if (xhr.readyState !== xhr.DONE && xhr.status !== 200) {
        alert(`Ошибка! ${xhr.status}, ${xhr.statusText}`)
    }
})
