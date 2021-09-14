import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('todo-item')
export default class ToDoItem extends LitElement {


    static styles = css`.todo-item { width:100%;height:40px;text-align:center;color:red;cursor:pointer;border:1px solid green;line-height:40px;margin-top:8px; }`;

    @property()
    content = 'title content';

    @property({ type: Number })
    _id = 0;

    protected render() {
        return html`<div class="todo-item" data-id="${this.id}" @click="${this.onDelete}">
           ID: ${this.id}   ${this.content}
        </div>`
    }

    private onDelete(e: { target: { dataset: { [x: string]: any; }; }; }) {
        const id = Number(e.target.dataset['id']);
        console.log(id);
        this.dispatchEvent(new CustomEvent('ondel', { detail: id }))
    }

}
