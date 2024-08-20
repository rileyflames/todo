const addTask = document.querySelector('.form');
const taskText = document.querySelector('#text');
const submitBtn = document.querySelector('.add--btn');
const tasks = document.querySelector('.task-items');



const actionHandler = (event)=>{
    let text = taskText.value;

    const taskItem = `<li>${text} <span class="delete">x</span></li>`;
    tasks.insertAdjacentHTML('beforeend', taskItem);
    
}

addTask.addEventListener('submit', actionHandler);

const taskCompleted =(event)=>{
    if (!event.target.matches('.delete') && !event.target.matches('.task-items')) {
        
        event.target.classList.toggle('clicked');
    }else if (event.target.matches('.delete')) {
        event.target.parentNode.remove();
    }
}

tasks.addEventListener('click', taskCompleted)