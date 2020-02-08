import { LitElement, html, css } from 'lit-element'

export class IngVentaja extends LitElement {
  static get styles () {
    return css`
      .wrapper {
        text-align: center;
        padding: 0 20px;
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
        <div class="title">0 %</div>   
        <p class="subtitle">Comisión por reembolso o amortización anticipada total o parcial</p>   
        <p class="description">Adelanta tus pagos y cancela tu hipoteca cuando quieras sin coste.</p>  
      </div> 
    `
  }
}
