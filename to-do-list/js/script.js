let taskList = document.querySelector('#task-list')
let taskInput = document.querySelector('#to-do-input')
let addTaskButton = document.querySelector('#add-button')
let actionButtons = document.querySelectorAll('#do-button')

//adiciona a tarefa na to do list
addTaskButton.addEventListener('click', function(){
    if (taskInput.value != ''){
        let newTask = document.createElement('li')
        newTask.innerText = taskInput.value
        newTask.className = 'task-add'
        taskList.appendChild(newTask)
        taskInput.value = ''
    }
})

//lida com a seleção da tarefa na lista
let selectedTask
function handleSelectedTask(event) {
    if (event.target.classList.contains('task-add')){
        selectedTask = event.target
        /* CONFIGURAR A COR */
        selectedTask.style.color = '#2D9596'
    }
}
document.addEventListener('click', handleSelectedTask)

//move a tarefa para baixo
function moveDown(){
    let taskListComponents = document.getElementsByClassName('task-add')
    let aux = selectedTask.innerText
    for (let i=0; i<taskListComponents.length; i++){
        if (selectedTask.innerText === taskListComponents[i].innerText && i!=(taskListComponents.length-1)){
            taskListComponents[i].innerText = taskListComponents[i+1].innerText
            taskListComponents[i+1].innerText = aux
            selectedTask = taskListComponents[i+1]
            break
        }
    }
}

//move a tarefa para cima
function moveUp(){
    let taskListComponents = document.getElementsByClassName('task-add')
    let aux = selectedTask.innerText
    for (let i=0; i<taskListComponents.length; i++){
        if (selectedTask.innerText === taskListComponents[i].innerText && i!=0){
            taskListComponents[i].innerText = taskListComponents[i-1].innerText
            taskListComponents[i-1].innerText = aux
            selectedTask = taskListComponents[i-1]
            break
        }
    }
}

//marca a tarefa como concluída
function taskDone(){
    selectedTask.style.color = '#434242'
    selectedTask.style.textDecoration = 'line-through'
}

//remove a tarefa selecionada
function removeOneTask(){
    selectedTask.remove()
}

//remove todas as tarefas da to do list
function removeTasks(){
    let taskListComponents = document.querySelectorAll('.task-add')
    taskListComponents.forEach(function(tasks){
        tasks.remove()
    })
}

//lida com os botões de ação do menu
actionButtons.forEach(function(button){
    button.addEventListener('click', function(event){
        if (event.target.innerText==='Limpar lista'){
            removeTasks()
        }
        else if (event.target.innerText==='Remover tarefa'){
            removeOneTask()
        }
        else if (event.target.innerText==='Marcar como concluída'){
            taskDone()
        }
        else if (event.target.innerText==='Mover para cima'){
            moveUp()
        }
        else {
            moveDown()
        }
    })
})