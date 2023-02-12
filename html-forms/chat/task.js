document.querySelector('.chat-widget').classList.add('chat-widget_active')
document.querySelector('.chat-widget').addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active')
})
const chatInput = document.getElementById('chat-widget__input');
const message = document.querySelector('.chat-widget__messages');
const messageRobot = ["Добрый день!", "Досвидания!", "Тут никого нет", "Мы вам перезвоним"]

function time() {
return new Date().toLocaleTimeString('ru-Ru', {
    hour: '2-digit',
    minute: '2-digit',
})
}
chatInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && chatInput.value.trim().length !== 0 ) {
        chatInput.value = chatInput.value.trim();
        message.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${time()}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
            <div class="message">
                            <div class="message__time">${time()}</div>
                            <div class="message__text">${messageRobot[Math.floor(Math.random()*messageRobot.length)]}</div>
                        </div>
        `
        chatInput.value = '';
        document.querySelector('.chat-widget__messages-container').scrollTop = document.querySelector('.chat-widget__messages-container').scrollHeight
    }
})