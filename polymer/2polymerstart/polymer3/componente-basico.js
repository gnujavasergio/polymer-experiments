import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ComponenteBasico extends PolymerElement {
    static get template() {
        return html`
                    <style>
                        h1 {
                            color:red;
                        }
                    </style>
                    <h1>Polymer 3</h1>
                    <p>Esta es un description</p>
                `;
    }
}

customElements.define('componente-basico', ComponenteBasico);