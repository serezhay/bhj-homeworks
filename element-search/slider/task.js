// const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
// const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));
// let currentIndex = 0;

// function swith (index) {
//     sliderItem.forEach(item => item.classList.remove('slider__item_active'));
//     sliderItem[index].classList.add('slider__item_active')
// }

// sliderArrows.forEach(element => element.onclick = () => {
//     if(element.classList.contains('slider__arrow_next')) {
//         if(currentIndex > sliderItem.length - 1) {
//             currentIndex = 0;
//         } else {
//             currentIndex++;
//         }
//     }
//     if (element.classList.contains('slider__arrow_prev')) {
//         if(currentIndex <= 0) {
//             currentIndex = sliderItem.length - 1;
//         } else {
//             currentIndex--;
//         }
//     }
//     swith(currentIndex)
// })

const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderArrows = Array.from(document.querySelectorAll('.slider__arrow'));

    sliderArrows.forEach((element) => {
        element.onclick = () => {
            const currentIndex = sliderItem.findIndex(item =>
                (item.classList.contains('slider__item_active')) 
            )
            sliderItem[currentIndex].classList.remove('slider__item_active')
            if(element.classList.contains('slider__arrow_next')) {
                (currentIndex < (sliderItem.length - 1)) ? currentIndex++ : currentIndex = 0;
            }
            if(element.classList.contains('slider__arrow_prev')) {
                (currentIndex <= 0) ? currentIndex = (sliderItem.length - 1) : currentIndex--;
            }
    
            sliderItem[currentIndex].classList.add('slider__item_active')
        }
    })