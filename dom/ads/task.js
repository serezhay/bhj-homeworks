const rotator = document.querySelector('.rotator') ;
for (let i of document.querySelectorAll('.rotator__case')) {
    i.style.color = i.getAttribute('data-color');
    i.style.speed = i.getAttribute('data-speed')
}

setInterval( () => {
    if(document.querySelector('.rotator__case_active').nextElementSibling === null) {
        document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
        rotator.firstElementChild.classList.add('rotator__case_active');
        return
    } 
    document.querySelector('.rotator__case_active').nextElementSibling.classList.add('rotator__case_active');
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
}, 1000)
