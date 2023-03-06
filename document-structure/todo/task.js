const taskInput = document.getElementById('task__input');

function taskAdd() {
    const task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML = `
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>`
    console.log(task)
    document.getElementById('tasks__list').insertAdjacentElement('beforeend', task);
    task.querySelector('.task__remove').addEventListener('click', () => {
        task.querySelector('.task__remove').parentElement.remove();
    })
        taskInput.value = '';
}

document.getElementById('tasks__add').onclick = (evt) => {
    evt.preventDefault();
    if(taskInput.value.trim().length !== 0)
    taskAdd();
}