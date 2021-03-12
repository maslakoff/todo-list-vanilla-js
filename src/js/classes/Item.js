import { rerenderEvent } from '../events';
import { ID } from '../utils';

class Item {
    constructor(text = "",  completed = false, id = "") {
        this.id = (id) ? id : ID();
        this.text = text;
        this.completed = completed;
    }

    createElement() {

        const $li = document.createElement('li');
        $li.id = this.id;

        $li.addEventListener('dblclick', event => {
            $li.classList.add('editing');
            $editInput.value = this.text;
        })

        const $wrap = document.createElement('div');
        $wrap.className = 'todo';

        const $toggle = document.createElement('input');
        $toggle.type = 'checkbox';
        $toggle.className = 'toggle';
        if (this.completed) {
            $toggle.checked = 'checked';
            $li.classList.add('completed');
        }
        $toggle.addEventListener('click', () => {
            console.log('click')
            this.toggleStatus();
            console.log(this);
            document.dispatchEvent(rerenderEvent)
            // this.renderItem();
        });

        // $wrap.insertAdjacentHTML('beforeend', `<input type="checkbox" class="toggle" ${this.completed ? 'checked="true"' : ''}>`)
        $li.append($toggle);
        $wrap.insertAdjacentHTML('beforeend', `<span>${this.text}</span>`)
        $wrap.insertAdjacentHTML('beforeend', `<button data-id=${this.id} class="destroy"></button>`)

        $li.append($wrap);

        const $editInput = document.createElement('input');
        $editInput.type = 'text';
        $editInput.className = 'edit';
        $editInput.addEventListener('keyup', (event) => {
            if (event.which === 27) {
                $li.classList.remove('editing');
                $editInput.value = '';
            }
            if (event.which === 13) {
                $li.classList.remove('editing');
                this.text = $editInput.value;
                // document.dispatchEvent(rerenderEvent);
                this.renderItem();
            }
         });

         $li.appendChild($editInput);
        return $li;
    }

    toggleStatus() {
        this.completed = !this.completed;
    }

    renderItem() {
        const el = this.createElement();
        const li = document.getElementById(this.id);
        li.replaceWith(el);
        // this.$content.append(element)
    }
}
export default Item;