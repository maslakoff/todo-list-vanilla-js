import '../styles/main.css';
import { ID } from './utils';


let $input = document.querySelector('#js-insert');
let $taskTable = document.querySelector("#js-list");
let $counter = document.querySelector("#js-total");

let tasks = [ 
    {text: "Buy", completed: false, id: ID()}, 
    {text: "some", completed: false, id: ID()},
    {text: "drinks", completed: false, id: ID()},
]

const renderTasksList = (list) => {
    $counter.innerHTML =  `${list.length} items left ` ;
    $taskTable.innerHTML = '';
    list.forEach((task, index) => {
        // console.log(index, index % 2 === 0 ? 'чет' : className);
        let className = '';
        if(index % 2 !== 0) {
            className = 'class = "completed"'
        }
        let listElement = `<li id="${task.id}" ${className}>
        <input data-id="${task.id}" type="checkbox" class="toggle">
        <div class="todo">
        
        <span>${task.text}</span>
        
        </div>
        <button data-value="${task.id}" class="destroy"></button>
        <input type="text" class="edit"></li>`;
        $taskTable.insertAdjacentHTML("beforeend", listElement)
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
        const todoTask = completeBtn.parentElement;
        todoTask.classList.toggle('completed');
        const element = tasks.pop();
        renderTasksList(tasks);
    }
}

$taskTable.addEventListener('click', deleteComplete);

// <li id="1614959131349" class="completed"><div class="todo"><input type="checkbox" class="toggle"><span>3</span><button class="destroy"></button></div><input type="text" class="edit"></li>
// <li id="1614959131961"><div class="todo"><input type="checkbox" class="toggle"><span>4</span><button class="destroy"></button></div><input type="text" class="edit"></li>