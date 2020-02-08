import { LitElement, html, css } from 'lit-element'
import '../ing-ventaja'

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
          <h2>Y como siempre, con todas las ventajas</h2>
          <div class="wrapper-ventajas">
            <ing-ventaja></ing-ventaja>
            <ing-ventaja></ing-ventaja>
            <ing-ventaja></ing-ventaja>
            <ing-ventaja></ing-ventaja>
          </div>
      </div>
    `
  }
}
