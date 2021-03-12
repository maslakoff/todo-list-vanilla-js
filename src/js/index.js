import 'regenerator-runtime/runtime'
import '../styles/main.css';
import Item from './classes/Item';
import List from './classes/List';
import { NEED_RERENDER } from './events';


function getListItemsFromStorage() {
   let items = JSON.parse(localStorage.getItem('TODO'));
   if (!Array.isArray(items)) {
      items = [];
   }
   return items.map(item => new Item(item.text, item.completed, item.id));
}

const listItems = getListItemsFromStorage();

let list = new List("#js-list", listItems);


document.addEventListener(NEED_RERENDER, (event) => {
   console.log(event)
   list.render();
});

window.addEventListener('storage', (event) => {
   if (event.key === 'TODO') {
      const listItems = getListItemsFromStorage();
      list.items = listItems;
      list.render();
   }
});

let $input = document.querySelector('#js-insert');
$input.addEventListener('keyup', (event) => {
   if (event.which === 13) {
    list.add(new Item($input.value))
    $input.value = "";
    list.render();
   }
});

list.render();


// async function fu() {
//    return Promise.resolve(1);
//  }
 
//  fu().then(console.log); // 1