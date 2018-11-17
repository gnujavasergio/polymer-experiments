import { PolymerElement, html } from "@polymer/polymer/polymer-element";
import '@polymer/polymer/lib/elements/dom-if';

class EncuestaOption extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display: block;
                }
                <p>[[encuesta]]</p>
                <template is="dom-if" if="[[marcado]]">
                    Eso es verdad
                </template>                
            </style>
         `;
    } i

    static get is() {
        return 'encuesta-option'
    }

    static get properties() {
        return {
            encuesta: String,
            marcado: {
                type: Boolean,
                value: false
            }
        }
    }
}

customElements.define(EncuestaOption.is, EncuestaOption);
