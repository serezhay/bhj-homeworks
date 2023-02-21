for (let i of document.querySelectorAll('.product__quantity-control')) {
    i.addEventListener('click', () => {
        if(i.classList.contains('product__quantity-control_inc')) {
            i.parentElement.querySelector('.product__quantity-value').textContent++;
        }
        if(i.classList.contains('product__quantity-control_dec') && i.parentElement.querySelector('.product__quantity-value').textContent > 0) {
            i.parentElement.querySelector('.product__quantity-value').textContent--;
        }
    })
}

for( let i of document.querySelectorAll('.product__add')) {
    i.addEventListener('click', () => {
        const product = i.closest('.product');
        for(let j of document.querySelector('.cart__products').querySelectorAll('.cart__product')) {
            if(j.getAttribute('data-id') === product.getAttribute('data-id')) {
                j.querySelector('.cart__product-count').textContent = Number(j.querySelector('.cart__product-count').textContent) + Number(product.querySelector('.product__quantity-value').textContent);
                return
            }
        }
        document.querySelector('.cart__products').insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product.getAttribute('data-id')}">
                <img class="cart__product-image" src="${product.querySelector('.product__image').getAttribute('src')}">
                <div class="cart__product-count">${product.querySelector('.product__quantity-value').textContent}</div>
                <button class="cart__product-remove">Удалить</button>
            </div> `
        )
    })
}