const menuLink = Array.from(document.getElementsByClassName('menu__link'));
menuLink.forEach(item => {
    item.onclick = (evt) => {
        let parent = Array.from(item.parentElement.getElementsByClassName('menu_sub'));
        if (parent.length == 1) {
            evt.preventDefault();
            parent.forEach(item => {
                item.classList.toggle('menu_active');
            })
            
        }
    }
})

