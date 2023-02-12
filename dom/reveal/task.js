const reveal = [...document.getElementsByClassName('reveal')];

reveal.forEach(item => {
    addEventListener('scroll', () => {
        const {top, bottom} = item.getBoundingClientRect();
        if (bottom < 0 || top > window.innerHeight) {
            item.classList.remove('reveal_active')
            return false
        }
        return item.classList.add('reveal_active');
        
    });
})

// const { innerHeight } = window;
// const { top } = reveal.getBoundingClientRect();
// if (top < innerHeight && top > 0) {
//   reveal.classList.add("reveal_active");
// } else {
//   reveal.classList.remove("reveal_active");
// }