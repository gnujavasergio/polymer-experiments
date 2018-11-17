import {PolymerElement, html} from '@polymer/polymer/polymer-element';

class ComponenteBasico extends PolymerElement {
    
    static get template(){
        return html`
            <style>
                :host {
                    display: block;
                    margin: 15px;
                }
            </style>
            <h1>[[name]]</h1>
            <p>Componente desde el Template</p>
        `;
    }

    static get is(){
        return 'componente-basico';
    }

    static get properties(){
        return {
            name: {
                type: String,
                value: 'First Component default'
            }
        }; 
    }

    change(value){
        this.name = value;
    }
}

window.customElements.define(ComponenteBasico.is, ComponenteBasico);