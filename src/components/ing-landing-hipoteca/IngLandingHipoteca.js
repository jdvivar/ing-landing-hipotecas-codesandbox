import { LitElement, html } from 'lit-element'
import { styles } from './styles'
import '../ing-card-hipoteca'
import '../ing-hipotecas-ventajas'
import '../ing-ventaja'

export class IngLandingHipoteca extends LitElement {
  static get styles () {
    return styles
  }

  renderMasInformacion () {
    const slotMasInformacion = this.querySelector('[slot="mas-informacion"]')
    return html`
      <slot slot="mas-informacion" name="mas-informacion">
        ${slotMasInformacion ? slotMasInformacion.innerHTML : 'Más información'}
      </slot>
    `
  }

  renderBoton () {
    const slotBoton = this.querySelector('[slot="boton"]')
    return html`
      <slot name="boton" slot="boton">
        ${slotBoton ? slotBoton.innerHTML : 'Calcular mi cuota'}
      </slot>
    `
  }

  renderCondiciones () {
    const slotCondiciones = this.querySelector('[slot="condiciones"]')
    return html`
      <slot name="condiciones" slot="condiciones">
        ${slotCondiciones ? slotCondiciones.innerHTML : 'Domiciliando tu nómina y contratando los seguros de hogar y vida que te ofrecemos.'}
      </slot>
    `
  }

  render () {
    return html`
        <div class="wrapper">
            <div class="main">
                <a class="logo" href="/" title="ING - People in progress [Ir a la página inicial]">
                    <slot name="logo"><img src="https://www.ing.es/comun/images/principal/logo-ing2.svg"/></slot>
                </a>
                <h1><slot name="titulo">Hipotecas NARANJA</slot></h1>
                <p><slot name="subtitulo">Con estos precios, ¡quítate el miedo!</slot></p>
            </div>
            <div class="hip-1">
                <ing-card-hipoteca>
                    <slot slot="atencion" name="hip-1-atencion">Hemos bajado el precio!</slot>
                    <slot slot="titulo" name="hip-1-titulo">Hipoteca Variable</slot>
                    <slot slot="descripcion" name="hip-1-description">
                        Desde euríbor + 0,99 %</br>
                        1,99 % TIN primer año</br>
                        (2,65 % TAE Variable)<sup>1</sup>
                    </slot>
                    ${this.renderCondiciones()}
                    ${this.renderBoton()}
                    ${this.renderMasInformacion()}
                </ing-card-hipoteca>
            </div>
            <div class="hip-2">
                <ing-card-hipoteca>
                    <slot slot="atencion" name="hip-2-atencion">Hemos bajado el precio!</slot>
                    <slot slot="titulo" name="hip-2-titulo">Hipoteca Mixta</slot>
                    <slot slot="descripcion" name="hip-2-description">
                        Desde 1,49 % TIN los 10 primeros años</br>
                        Después desde euríbor + 0,99 %</br>
                        (2,16 % TAE Variable)<sup>3</sup>
                    </slot>
                    ${this.renderCondiciones()}
                    ${this.renderBoton()}
                    ${this.renderMasInformacion()}
                </ing-card-hipoteca>
            </div>
        </div>
        <img class="fondo" src=https://www.ing.es/hipotecas/images/forma_fondo.svg>
        <ing-hipotecas-ventajas>
          <slot slot="titulo" name="ventajas-1-titulo">Y como siempre, con todas las ventajas</slot>
          <slot slot="ventajas" name="ventajas-1-lista">
            <ing-ventaja>
              <slot name="ventajas-1-lista-1-titulo" slot="titulo">0 %</slot>
              <slot name="ventajas-1-lista-1-subtitulo" slot="subtitulo">Comisión por reembolso o amortización anticipada total o parcial</slot>
              <slot name="ventajas-1-lista-1-descripcion" slot="descripcion">Adelanta tus pagos y cancela tu hipoteca cuando quieras sin coste.</slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-1-lista-2-titulo" slot="titulo">0 %</slot>
              <slot name="ventajas-1-lista-2-subtitulo" slot="subtitulo">Comisión de apertura</slot>
              <slot name="ventajas-1-lista-2-descripcion" slot="descripcion">No te cobramos por elegirnos como tu banco.</slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-1-lista-3-titulo" slot="titulo">0 %</slot>
              <slot name="ventajas-1-lista-3-subtitulo" slot="subtitulo">Comisión por subrogación</slot>
              <slot name="ventajas-1-lista-3-descripcion" slot="descripcion">Si encuentras mejores condiciones, eres libre para aprovecharlas.</slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-1-lista-4-titulo" slot="titulo">0 %</slot>
              <slot name="ventajas-1-lista-4-subtitulo" slot="subtitulo">Por cambio de condiciones</slot>
              <slot name="ventajas-1-lista-4-descripcion" slot="descripcion">Cambia el plazo y la cuota sin que te cueste nada.</slot>
            </ing-ventaja>
            <slot name="ventajas-1-lista-extra"></slot>
          </slot>
        </ing-hipotecas-ventajas>
        <ing-hipotecas-ventajas>
          <slot name="titulo" slot="titulo" name="ventajas-2-titulo">Y sin gastos, ninguno</slot>
          <slot slot="ventajas" name="ventajas-2-lista">
            <ing-ventaja>
              <slot name="ventajas-2-lista-1-titulo" slot="titulo">0 €</slot>
              <slot name="ventajas-2-lista-1-subtitulo" slot="subtitulo">Gastos de notaría</slot>
              <slot name="ventajas-2-lista-1-descripcion" slot="descripcion"></slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-2-lista-2-titulo" slot="titulo">0 €</slot>
              <slot name="ventajas-2-lista-2-subtitulo" slot="subtitulo">Gastos de gestoría</slot>
              <slot name="ventajas-2-lista-2-descripcion" slot="descripcion"></slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-2-lista-3-titulo" slot="titulo">0 €</slot>
              <slot name="ventajas-2-lista-3-subtitulo" slot="subtitulo">Gastos de registro</slot>
              <slot name="ventajas-2-lista-3-descripcion" slot="descripcion"></slot>
            </ing-ventaja>
            <ing-ventaja>
              <slot name="ventajas-2-lista-4-titulo" slot="titulo">0 €</slot>
              <slot name="ventajas-2-lista-4-subtitulo" slot="subtitulo">Gastos de tasación*</slot>
              <slot name="ventajas-2-lista-4-descripcion" slot="descripcion"></slot>
            </ing-ventaja>
          </slot>
          <slot name="ventajas-2-lista-extra"></slot>
        </ing-hipotecas-ventajas>
        <div style="background-color: #f0f0f0; height: 500px; margin-top: 50px;"></div>
    `
  }
}
