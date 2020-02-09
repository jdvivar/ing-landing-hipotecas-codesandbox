import { LitElement, html, css } from 'lit-element'

export class IngVentaja extends LitElement {
  static get styles () {
    return css`
      :host {
        --max-width: 300px;
      }

      @media (min-width: 768px) {
        :host {
          width: 50%;
        }
      }

      @media (min-width: 1024px) {
        :host {
          flex-basis: 0;
          flex-grow: 1;
        }
      }

      .wrapper {
        text-align: center;
        padding: 0 20px;
        max-width: var(--max-width);
        margin: 0 auto;
      }

      .title {
        font-size: 62px;
        color: var(--naranja);
        font-weight: bold;
      }

      .subtitle {
        font-size: 19px;
        color: var(--naranja);
      }

      .description {
        font-size: 16px;
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <div class="title"><slot name="titulo"></slot></div>   
        <p class="subtitle"><slot name="subtitulo"></slot></p>   
        <p class="description"><slot name="descripcion"></slot></p>  
      </div> 
    `
  }
}
