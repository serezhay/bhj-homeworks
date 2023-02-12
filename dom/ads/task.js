// const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));
// let index = 0;
// setInterval(() => {
//     rotatorCase[index].classList.remove('rotator__case_active');
//     index++;
//     if(index == (rotatorCase.length)) {
//         index = 0;
//     }
//     rotatorCase[index].classList.add('rotator__case_active');
//     rotatorCase[index].style.speed = rotatorCase[index].getAttribute('data-speed');
//     rotatorCase[index].style.color = rotatorCase[index].getAttribute('data-color');
// }, 1000)


const rotator = document.querySelector('.rotator') ;
function a() {
    let b = document.querySelectorAll('.rotator__case')

    document.querySelector('.rotator__case_active').style.speed = document.querySelector('.rotator__case_active').getAttribute('data-speed');
    document.querySelector('.rotator__case_active').style.color = document.querySelector('.rotator__case_active').getAttribute('data-color');
    console.log(document.querySelector('.rotator__case_active').style.color)
}
setInterval( () => {
    document.querySelector('.rotator__case_active').style.speed = document.querySelector('.rotator__case_active').getAttribute('data-speed');
    document.querySelector('.rotator__case_active').style.color = document.querySelector('.rotator__case_active').getAttribute('data-color');
    if(document.querySelector('.rotator__case_active').nextElementSibling === null) {
        document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
        rotator.firstElementChild.classList.add('rotator__case_active');
        return
    } 
    document.querySelector('.rotator__case_active').nextElementSibling.classList.add('rotator__case_active');
    document.querySelector('.rotator__case_active').classList.remove('rotator__case_active');
    
    console.log(document.querySelector('.rotator__case_active').style.color)
}, 1000)
