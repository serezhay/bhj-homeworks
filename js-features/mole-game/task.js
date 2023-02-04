
let dead = document.getElementById('dead')
let lost = document.getElementById('lost');
[...document.getElementsByClassName('hole')].forEach((item) => {
    item.onclick = () => {
        if(item.className.includes('hole hole_has-mole')) {
            dead.textContent++;
            if( dead.textContent == 10) {
                alert('Победа');
            }
        } else {
            lost.textContent++;
            if(lost.textContent == 5) {
                alert('Поражение');
            }
        }
        if(dead.textContent == 10 || lost.textContent == 5) {
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
})