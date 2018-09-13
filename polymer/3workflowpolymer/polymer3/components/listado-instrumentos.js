import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import './instrumento-musical';

class ListadoInstrumentos extends PolymerElement {

    static get is() {
        return 'listado-instrumentos';
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
                    return [
                        {
                            nombre: 'Guitarra',
                            clasificacion: 'Cuerda',
                            descripcion: 'Instrumento Musical de cuerda pulsada, compuesto de una caja de resonacia'
                        },
                        {
                            nombre: 'Tambor',
                            clasificacion: 'Percución',
                            descripcion: 'Instrumento Musical de sonido indeterminado'
                        },
                        {
                            nombre: 'Piano',
                            clasificacion: 'Teclado y Cuerdas',
                            descripcion: 'Esta compuesto por una caja de resonancia, a la que se ha agregado cuerdas'
                        }
                    ]
                }
            }
        }
    }
}

customElements.define(ListadoInstrumentos.is, ListadoInstrumentos);