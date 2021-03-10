import '../styles/main.css';
import Item from './classes/Item';
import List from './classes/List';


const list = new List("#js-list", [
    new Item('bra'),
    new Item('ta'),
    new Item('-ta'),
   ]);

let $input = document.querySelector('#js-insert');
$input.addEventListener('keyup', (event) => {
   if (event.which === 13) {
    list.add(new Item($input.value))
    $input.value = "";
    list.render();
   }
});

list.render();
