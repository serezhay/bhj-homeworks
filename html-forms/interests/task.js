const interestCheck = Array.from(document.querySelectorAll('.interest__check'));

interestCheck.forEach(item => item.addEventListener('change', () => {
    const chekedMainElement = Array.from(item.closest('.interest').querySelectorAll('.interest__check'));
    for(i in chekedMainElement) {
        item.checked ? chekedMainElement[i].checked = true : chekedMainElement[i].checked = false;
    }
    if(item.parentElement.closest('.interests_active')) {
        if(item.checked) {
            recursion(item);
        }
    }
}))

function recursion(obj) {
    if(obj.querySelector('.interest__check') !== false) {
        obj = obj.parentElement;
        if(obj.classList.contains('interest')) {
            obj.querySelector('.interest__check').checked = true;
        }
        if(obj.parentElement.classList.contains('interests_main')) {
            return;
        }
        recursion(obj);
    }
}