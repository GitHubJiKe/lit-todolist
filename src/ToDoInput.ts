import { LitElement, html, css } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';


@customElement('todo-input')
export default class ToDoInput extends LitElement {


    static styles = css`div { text-align:center;width:100%; } button {cursor:pointer;}`;

    @query('input', true)
    _input!: HTMLInputElement;
    protected render() {
        return html`
        <div>
        <input @keydown="${this.onKeyDown}" placeholder="请输入"></input>
        <button @click="${this.onAdd}">add</button>
        </div>`
    }


    private onKeyDown(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            this.onAdd()
        }
    }

    private onAdd() {
        const v = this._input.value.trim();
        this.dispatchEvent(new CustomEvent('onadd', { detail: { id: Date.now(), content: v }, bubbles: true, composed: true }));
        this._input.value = ''
    }
}
