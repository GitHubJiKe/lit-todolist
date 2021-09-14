import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
export * as  ToDoTitle from './ToDoTitle'
export * as  ToDoInput from './ToDoInput'
export * as  ToDoItem from './ToDoItem'

type TODO = { id: Number, content: String }

@customElement('todo-list')
export class ToDoList extends LitElement {

    @property()
    title = 'some title';

    @state()
    todos: TODO[] = [{ id: 1, content: 'aaaaa' }]

    private addToDO(e: CustomEvent) {
        const todo = e.detail as TODO;
        this.todos = [...this.todos, todo];
    }

    private delToDo(e: CustomEvent) {
        const id = e.detail as Number
        const idx = this.todos.findIndex(v => v.id === id);

        if (idx > -1) {
            this.todos.splice(idx, 1)
            this.todos = [...this.todos]
        }

    }

    render() {
        return html`
        <div>
            <todo-title content="${this.title}"></todo-title>
            <todo-input @onadd="${this.addToDO}" ></todo-input>
            <div style="margin-top:20px;">
            ${this.todos.map(todo => html`<todo-item  @ondel="${this.delToDo}" id="${todo.id}" content="${todo.content}"></todo-item>`)}
            </div>
        </div>
        `;
    }
}
