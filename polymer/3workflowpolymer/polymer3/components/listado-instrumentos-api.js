import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import { InstrumentoMusical } from './instrumento-musical.js';

class ListadoInstrumentosApi extends PolymerElement {

    static get is() {
        return 'listado-instrumentos-api';
    }

    static get template() {
        return html`
            <style>
                :host {
                    display:block;
                }                
            </style>        
            <template is="dom-repeat" items="[[instrumentos]]"> 
                <instrumento-musical 
                    nombre="[[item.nombre]]"
                    descripcion="[[item.descripcion]]"
                    clasificacion="[[item.clasificacion]]">
                </instrumento-musical>               
            </template>
        `;
    }

    static get properties() {
        return {
            instrumentos: {
                type: Array,
                value: function () {
                    return [];
                }
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();
        fetch('http://localhost:3000/instrumentos', {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                this.instrumentos = json;
            });
    }
}

customElements.define(ListadoInstrumentosApi.is, ListadoInstrumentosApi);