
let dead = document.getElementById('dead')
let lost = document.getElementById('lost');
for (let i = 1; i < document.getElementsByClassName('hole').length; i++) {
    const cell = document.getElementById(`hole${i}`);
    cell.onclick = () => {
        console.log()
        if(cell.className.includes('hole hole_has-mole')) {
            dead.textContent++;
            if( dead.textContent == 10) {
                alert('Победа');
                dead.textContent = 0
            }
        } else {
            lost.textContent++;
            if(lost.textContent == 5) {
                alert('Поражение');
                lost.textContent = 0;
            }
        }
    };
}
