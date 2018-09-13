import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class InstrumentoMusical extends PolymerElement {

    static get is() {
        return 'instrumento-musical';
    }
    static get template() {
        return html`
        <style>
            :host {
                display: block;
                padding: 10px 15px;
                background-color: rgb(211, 247, 247);
                color: rgb(36, 54, 77);
                border-radius: 6px;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                margin-bottom: 10px;
            }            

            h1{
                font-size: 1.4em;
                margin: 0;
                color: #f52757;                
            }
            p {
                font-size: .9em;
                color: #2055a8;
            }

            p span {
                font-weight: bold;
            }
        </style>                
        <h1>[[nombre]]</h1>
        <p on-click="resaltarDescripcion">[[descripcion]]</p>
        <p><span>clasificacion: </span>[[clasificacion]]</p>   
        `;
    }

    static get properties() {
        return {
            nombre: String,
            clasificacion: {
                type: String,
                value: 'Sin Clasificar'
            },
            descripcion: String
        };
    }

    resaltarDescripcion() {
        this.descripcion = this.descripcion.toUpperCase();
    }
}

customElements.define(InstrumentoMusical.is, InstrumentoMusical);