import { NEED_RERENDER } from "../events";
import Item from "./Item";

class List {
    constructor(selector, items = []) {
        this.$content = document.querySelector(selector);
        this.items = items;
    }
    
    render() {
        this.renderContent();
        this.renderCounter();
        this.initializeEvents();
    }

    initializeEvents() {
        document.querySelectorAll('.destroy').forEach(item => {
            item.addEventListener('click', event => {
                // const id = event.target.dataset.id;
                const id = event.target.getAttribute('data-id')
                const item = this.getItemById(id);
                this.remove(item);
            })
        });

        document.querySelectorAll('.toggle').forEach(item => {
            item.addEventListener('change', event => {
                const id = event.target.dataset.id;
                const item = this.getItemById(id);
                if (item instanceof Item) {
                    item.toggleStatus();
                    console.log(this.items)
                }
            })
        });

        // document.querySelectorAll('li').forEach(item => {
        //     item.addEventListener('dblclick', event => {
        //         const id = event.currentTarget.id;
        //         const li = document.getElementById(id);
        //         console.log(li)
        //         if (li) {
        //             li.classList.add('editing');
        //         }
        //     })
        // });

        document.addEventListener(NEED_RERENDER, (event) => {
            this.render();
        });

        // document.addEventListener('keyup', (event) => {
        //     if (event.which === 27) {
        //         document.querySelectorAll('li').forEach(item => {
        //             item.classList.remove('editing');
        //         });
        //     }
        //  });
        
    }

    renderCounter() {
        const $counter = document.querySelector('#js-total');
        $counter.innerHTML = `${this.items.length} items left`;
    }

    renderContent() {
        this.$content.innerHTML = '';
        this.items.forEach((task, index) => {
            const element = task.createElement();
            this.$content.append(element)
        });
    }

    getItemById(id) {
        let item = this.items.filter(i => i.id === id);
        return ((item.length) ? item[0] : null);
    }

    add(item) {
        this.items.push(item);
        this.render();
    }

    remove(item) {
        this.items = this.items.filter(i => (i.id !== item.id));
        this.render();
    }

    saveToLocalStorage() {
        localStorage = JSON.stringify(this.items);
        localStorage.setItem('TODO', localStorage);
    }

    loadFromStorage() {
        const items = JSON.parse(localStorage.getItem('TODO'));
        return items;
    }
}
export default List;