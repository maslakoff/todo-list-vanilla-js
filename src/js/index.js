import '../styles/main.css';
import { ID } from './utils';

console.log(ID());

let $input = document.querySelector('#js-insert');
let $taskTable = document.querySelector("#js-list")

let tasks = ["Buy", "somes", "drinks"];

const renderTasksList = (list) => {
    $taskTable.innerHTML = '';
    list.forEach((task, index) => {
        // console.log(index, index % 2 === 0 ? 'чет' : className);
        let className = '';
        if(index % 2 !== 0) {
            className = 'class = "completed"'
        }
        let listElement = `<li ${className}>
        <div class="todo">
        <input type="checkbox" class="toggle">
        <span>${task}</span>
        <button class="destroy"></button>
        </div>
        <input type="text" class="edit"></li>`;
        $taskTable.insertAdjacentHTML("beforeend", listElement)
    });
}

$input.addEventListener('keyup', (event) => {
   if (event.which === 13) {
    tasks.push($input.value)
    $input.value = "";
    console.log('tasks: ', tasks);   
    renderTasksList(tasks); 
   }
  
});

renderTasksList(tasks);




// <li id="1614959131349" class="completed"><div class="todo"><input type="checkbox" class="toggle"><span>3</span><button class="destroy"></button></div><input type="text" class="edit"></li>
// <li id="1614959131961"><div class="todo"><input type="checkbox" class="toggle"><span>4</span><button class="destroy"></button></div><input type="text" class="edit"></li>