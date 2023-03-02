for (let i of document.querySelectorAll('.product__quantity-control')) {
    i.addEventListener('click', () => {
        if(i.classList.contains('product__quantity-control_inc')) {
            i.parentElement.querySelector('.product__quantity-value').textContent++;
        }
        if(i.classList.contains('product__quantity-control_dec') && i.parentElement.querySelector('.product__quantity-value').textContent > 1) {
            i.parentElement.querySelector('.product__quantity-value').textContent--;
        }
    })
}

for( let i of document.querySelectorAll('.product__add')) {
    const productAdd = i.closest('.product');
    const basket = [...document.querySelector('.cart__products').querySelectorAll('.cart__product')];
    

    i.addEventListener('click', () => {
        const product = document.createElement('div');
        product.classList.add('cart__product');

        product.setAttribute('data-id', `${productAdd.getAttribute('data-id')}`)
        let basket = Array.from(document.querySelectorAll('.cart__product')).find(item => item.getAttribute('data-id') === `${productAdd.getAttribute('data-id')}`)
        if(basket) {
            basket.querySelector('.cart__product-count').textContent = Number(basket.querySelector('.cart__product-count').textContent) + Number(productAdd.querySelector('.product__quantity-value').textContent);
                return
        }

        product.innerHTML = `
        <img class="cart__product-image" src="${productAdd.querySelector('.product__image').getAttribute('src')}">
        <div class="cart__product-count">${productAdd.querySelector('.product__quantity-value').textContent}</div>
        <button class="cart__product-remove">Удалить</button>
        `
        product.querySelector('.cart__product-remove').addEventListener('click', () => {
            product.remove();
        })
        document.querySelector('.cart__products').insertAdjacentElement('beforeend', product);
    })
}
