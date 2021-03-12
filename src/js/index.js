import '../styles/main.css';
import { ID } from './utils';


let $input = document.querySelector('#js-insert');
let $taskTable = document.querySelector("#js-list");
let $counter = document.querySelector("#js-total");

const inputLocalKey = "text";
$input.value = localStorage.getItem(inputLocalKey);


// const convertedList = JSON.stringify(list);
// // console.log(JSON.stringify(item));

// const obj = JSON.parse(text);
// console.log(typeof item, item)
// console.log(typeof converted, converted)
// localStorage.setItem(
//     'item', 
//     converted
//  );

const keyLSTasks = 'tasks';

let tasks = localStorage.getItem(keyLSTasks);
    tasks = JSON.parse(tasks);

// localStorage.setItem('tasks', JSON.stringify(tasks));

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
        <button data-value="${task.id}" class="destroy"></button>`

        liTask.addEventListener('dblclick', () => {
            liTask.classList.add('editing');
        })

        const editTask = document.createElement('input');
        editTask.type = "text";
        editTask.className = "edit";
        editTask.value = task.text;
        editTask.addEventListener('keyup', (event) => {
            if (event.key === 'Escape') {
                liTask.classList.remove('editing');
            }
            if (event.key === "Enter") {
                liTask.classList.remove('editing');
                task.text = editTask.value
                renderTasksList(list);
            }
        });

        liTask.append(editTask);
        $taskTable.append(liTask);
        
    });
}

$input.addEventListener('keyup', (event) => {
   if (event.key === 'Enter') {
      tasks.push( {text: $input.value, completed: false, id: ID()} );
      $input.value = ""; 
      renderTasksList(tasks); 
   } else {
      localStorage.setItem(inputLocalKey, $input.value)
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

const $tasksFilter = document.querySelector('#js-filters');
const $tasksBtnFilter = document.querySelectorAll('#js-filters > li');

$tasksFilter.addEventListener('click', (event) => {
    const targetFilter = event.target;
    const filterType =  targetFilter.dataset.value;

    if (filterType) {
      $tasksBtnFilter.forEach((filter) => {
         if (filter.dataset.value === filterType) {
               filter.classList.add('selected');
         } else {
               filter.classList.remove('selected');
         }
      })

      let filteredTasks = tasks;

      if (filterType === 'active') {
         filteredTasks = filteredTasks.filter(task => !task.completed)
      } else if (filterType === 'completed') {
         filteredTasks = filteredTasks.filter(task => task.completed)
      };

      renderTasksList(filteredTasks); 
   }
    
})

let clearButton = document.querySelector("#js-clear-completed");
clearButton.addEventListener("click", () => {
    tasks = tasks.filter(elem => {
        return !elem.completed
    })

    renderTasksList(tasks); 
});

