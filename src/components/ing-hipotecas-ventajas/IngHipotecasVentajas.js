import { LitElement, html, css } from 'lit-element'

export class IngHipotecasVentajas extends LitElement {
  static get styles () {
    return css`
    .wrapper {
      max-width: var(--max-width);
      margin: 80px auto 0;
    }
    
    @media (min-width: 768px) {
      .wrapper-ventajas {
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
      }
    }
    
    @media (min-width: 1024px) {
      .wrapper-ventajas {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
      }
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
