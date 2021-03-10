import '../styles/main.css';
import { ID } from './utils';


let $input = document.querySelector('#js-insert');
let $taskTable = document.querySelector("#js-list");
let $counter = document.querySelector("#js-total");

let tasks = [ 
    {text: "Buy", completed: false, id: ID()}, 
    {text: "some", completed: true, id: ID()},
    {text: "drinks", completed: false, id: ID()},
]

const renderTasksList = (list) => {
    $counter.innerHTML =  `${list.length} items left ` ;
    $taskTable.innerHTML = '';
    list.forEach((task) => {
        const checked = task.completed ? 'checked' : '';

        const liTask = document.createElement('li');
        liTask.id = task.id;
        if(task.completed) {
            liTask.classList.add('completed');
        }

        liTask.innerHTML = `
        <input ${checked} data-id="${task.id}" type="checkbox" class="toggle">
        <div class="todo">
        
        <span>${task.text}</span>
        
        </div>
        <button data-value="${task.id}" class="destroy"></button>
        <input type="text" class="edit">`

        $taskTable.append(liTask);
        liTask.addEventListener('dblclick', () => {
            liTask.classList.add('editing');
        })
    });
}

$input.addEventListener('keyup', (event) => {
   if (event.which === 13) {
    tasks.push( {text: $input.value, completed: false, id: ID()} );
    $input.value = ""; 
    renderTasksList(tasks); 
   }
  
});

renderTasksList(tasks);

function deleteComplete(event) {
    const deleteBtn = event.target;
    if(deleteBtn.classList.contains('destroy')) {
        const deleteId = deleteBtn.dataset.value;
        tasks = tasks.filter(task => task.id !== deleteId);
        renderTasksList(tasks);
    }

    const completeBtn = event.target;
    if(completeBtn.classList.contains('toggle')) {
        const changeId = completeBtn.dataset.id;
        const task = tasks.find((el) => {
            return el.id === changeId;
        });
        task.completed = !task.completed;
        renderTasksList(tasks);
    }
}


$taskTable.addEventListener('click', deleteComplete);

// <li id="1614959131349" class="completed"><div class="todo"><input type="checkbox" class="toggle"><span>3</span><button class="destroy"></button></div><input type="text" class="edit"></li>
// <li id="1614959131961"><div class="todo"><input type="checkbox" class="toggle"><span>4</span><button class="destroy"></button></div><input type="text" class="edit"></li>
