import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class FirstcomponentApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <componente-basico id="basico"></componente-basico>
      <button on-click="change">Cambiar Propiedad</button>
      <button on-click="changeComponent">Cambiar Propiedad desde Componente</button>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'firstcomponent-app'
      }
    };
  }

  change(){
    this.$.basico.name = "cambiando nombre desde el padre";
  }

  changeComponent(){
    this.$.basico.change('Cambiando nombre desde el hijo');
  }
}

window.customElements.define('firstcomponent-app', FirstcomponentApp);
