const click = document.getElementById("cookie");
let count = document.getElementById("clicker__counter");
let check = false;
let countClick = 0;

click.onclick = () => {
    count.textContent++; 
    if (check === false) {
        click.width = 300 ; 
    } else {
        click.width = 200 ;
    }
    check = (check === true) ? false : true;
    return
}