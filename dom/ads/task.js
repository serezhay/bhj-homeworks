const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
let index = 0;
setInterval(() => {
    rotatorCase[index].classList.remove('rotator__case_active');
    index++;
    if(index == (rotatorCase.length)) {
        index = 0;
    }
    rotatorCase[index].classList.add('rotator__case_active');
    rotatorCase[index].style.speed = rotatorCase[index].getAttribute('data-speed');
    rotatorCase[index].style.color = rotatorCase[index].getAttribute('data-color');
}, 1000)

