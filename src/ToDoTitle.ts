import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('todo-title')
export default class ToDoTitle extends LitElement {
    static styles = css`h1 { text-align:center;width:100%;color:red; }`;

    @property()
    content = 'title content';

    render() {
        return html`<h1>${this.content}</h1>`;
    }
}
