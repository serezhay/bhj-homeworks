const taskInput = document.getElementById('task__input');

function taskAdd() {
    document.getElementById('tasks__list').insertAdjacentHTML('afterend', `
        <div class="task">
            <div class="task__title">
                ${taskInput.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
        `)
        const close = document.querySelectorAll('.task__remove');
        for (let i of close) {
            i.addEventListener('click', () => {
                i.parentElement.remove();
            })
        }
        taskInput.value = '';
}

taskInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' || document.getElementById('tasks__add').onclick === true && taskInput.value.trim().length !== 0) {
        taskAdd();
        event.preventDefault();
    }
})
document.getElementById('tasks__add').onclick = () => {
    taskAdd();
}