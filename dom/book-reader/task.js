const fontSize = Array.from(document.getElementsByClassName('font-size'));
const color = Array.from(document.getElementsByClassName('color'));
let currentFontSize;
let currentTextColor;
let currentBgColor;
const bgColor = color.filter( element => {
    if(element.getAttribute('data-bg-color')) {
        return element
    }
})
const colorText = color.filter( element => {
    if(element.getAttribute('data-text-color')) {
        return element
    }
})

fontSize.forEach(element => {
    element.onclick = () => {
        fontSize.forEach(item => {
            document.getElementById('book').classList.remove(`${currentFontSize}`);
            item.classList.remove('font-size_active');
        });
        element.classList.add('font-size_active');
        if (element.getAttribute('data-size') === 'small') {
            document.getElementById('book').classList.add('book_fs-small');
        }
        if(element.getAttribute('data-size') === 'big') {
            document.getElementById('book').classList.add('book_fs-big');
        }
        currentFontSize = `book_fs-${element.getAttribute('data-size')}`
        return false
    }
});

bgColor.forEach(element => {
    element.onclick = () => {
        bgColor.forEach((element) => {
            element.classList.remove('color_active');
            document.getElementById('book').classList.remove(currentBgColor);
        });
        element.classList.add('color_active');
        currentBgColor = `book_bg-${element.getAttribute('data-bg-color')}`
        document.getElementById('book').classList.add(currentBgColor)
        return false
    }
})

colorText.forEach(element => {
    element.onclick = () => {
        colorText.forEach((element) => {
            element.classList.remove('color_active');
            document.getElementById('book').classList.remove(currentTextColor);
        });
        element.classList.add('color_active');
        currentTextColor = `book_color-${element.getAttribute('data-text-color')}`;
        document.getElementById('book').classList.add(currentTextColor);
        return false
    }
})