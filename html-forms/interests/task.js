let a = document.querySelectorAll('.interest__check');
const arrСategory = Array.from(a).filter(item => item.closest('.interests_active') === null)
const arr = Array.from(a).filter(item => item.closest('.interests_active') !== null)

arrСategory.forEach(element => {
    element.addEventListener('change', () => {
        for(item of element.closest('.interest').querySelectorAll('li')) {
            (item.querySelector('.interest__check').checked) = element.checked
        }
    })
})