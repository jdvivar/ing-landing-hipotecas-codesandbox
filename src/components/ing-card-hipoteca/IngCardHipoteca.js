import { LitElement, html } from 'lit-element'
import { styles } from './styles'

export class IngCardHipoteca extends LitElement {
  static get styles () {
    return styles
  }

  render () {
    this.style.setProperty('--delay', `${Math.random()}s`)
    this.style.setProperty('--amp', `${Math.random() + 3}%`)
    return html`
      <div class="wrapper">
        <div class="atencion floater">
          <svg class="triangle" xmlns="http://www.w3.org/2000/svg" width="33" height="33">
            <path stroke="none" fill="#20be86" d="M12.169872981078 4.1794919243112a5 5 0 0 1 8.6602540378444 0l11.339745962156 19.641016151378a5 5 0 0 1 -4.3301270189222 7.5l-22.679491924311 0a5 5 0 0 1 -4.3301270189222 -7.5"></path>
          </svg>
          <p><slot name="atencion"></slot></p>
        </div>
        <h3 class="titulo"><slot name="titulo"></slot></h3>
        <p class="descripcion">
          <slot name="descripcion"></slot>
        </p>
        <p class="condiciones">
          <slot name="condiciones"></slot>
        </p>
        <div class="button-wrapper">
          <button><slot name="boton"></slot></button>
        </div>
        <a href="/masinformacion"><slot name="mas-informacion"></slot></a>
      </div>
    `
  }
}
