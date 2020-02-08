import { LitElement, html, css } from 'lit-element'

export class IngHipotecasVentajas extends LitElement {
  static get styles () {
    return css`
    .wrapper {
      max-width: var(--max-width);
      margin: 80px auto 0;
    }
    
    .wrapper-ventajas {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .wrapper-ventajas ing-ventaja {
      flex-basis: 0;
      flex-grow: 1;
    }

    h2 {
      font-size: 32px;
      color: var(--naranja);
      text-align: center;
    }
    `
  }

  render () {
    return html`
      <div class="wrapper">
          <h2><slot name="titulo"></slot></h2>
          <div class="wrapper-ventajas">
            <slot name="ventajas"></slot>
          </div>
      </div>
    `
  }
}
