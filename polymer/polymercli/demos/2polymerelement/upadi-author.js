import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `upadi-author`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class UpadiAuthor extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'upadi-author',
      },
    };
  }
}

window.customElements.define('upadi-author', UpadiAuthor);
