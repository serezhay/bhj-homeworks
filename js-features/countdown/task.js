// Таймер обратного отсчёта
const currentAccount = document.getElementById("timer");
function newAccount() {
    if (currentAccount.textContent == 0) {
        alert("Вы победили в конкурсе!");
        return
    }
    currentAccount.textContent++;
}
setInterval(newAccount, 1000);