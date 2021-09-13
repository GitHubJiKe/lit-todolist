import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
export * as  ToDoTitle from './ToDoTitle'

@customElement('todo-list')
export class ToDoList extends LitElement {

    @property()
    title = 'some title';

    render() {
        return html`
        <div>
            <todo-title content="${this.title}"></todo-title>
        </div>
        `;
    }
}
