import { LitElement, html } from "lit-element";
import { styles } from "./styles";

class IngLandingHipoteca extends LitElement {
  renderTitle() {
    const title = this.querySelector('[slot="title"]');
    if (title) {
      return html`
        <h2><slot name="title"></slot></h2>
      `;
    } else {
      return html`
        <h2>No title</h2>
      `;
    }
  }

  static get styles() {
    return styles;
  }

  render() {
    return html`
      <div class="" id="cabecera">
        <div class="cont">
          <div class="cont-logo col12 center">
            <a
              class="logo"
              href="/"
              title="ING - People in progress [Ir a la página inicial]"
              ><img src="/comun/images/principal/logo-ing2.svg"
            /></a>
          </div>
          <div class="titular">
            <h1>Hipotecas NARANJA,</h1>
            <h2>Con estos precios,<br />¡quítate el miedo!</h2>
          </div>
          <div class="productos">
            <div class="hVariable">
              <div class="pointer092019-1">
                ¡Hemos<br />bajado el<br />precio!
              </div>
              <h3>Hipoteca Variable</h3>
              <p>
                Desde euríbor + 0,99 %<br />1,99 % TIN primer año<br />(2,65 %
                TAE Variable)<sup class="supHP">1</sup><br /><br /><span
                  class="subFrase062019"
                  style="color: #4e4e4e"
                  >Domiciliando tu nómina y contratando los seguros de hogar y
                  vida que te ofrecemos.</span
                >
              </p>
              <div class="cont-BTN">
                <a
                  href="#"
                  class="btn-N"
                  onclick="cancelEvent(event);$('html, body').animate({ scrollTop: $('.revamp').offset().top }, 1000);"
                  aria-label="Calcular mi cuota [Scroll hacia el simulador]"
                  ><div
                    onclick="omnitureContratar('btn:hipotecas:landing:distributiva:calcular-Hvariable');"
                  >
                    Calcular mi cuota
                  </div></a
                >
                <div>
                  <a
                    href="/hipotecas/hipoteca-variable"
                    class="link"
                    title="Más información sobre Hipoteca Variable [Nueva Ventana]"
                    aria-label="Más información sobre Hipoteca Variable [Nueva Ventana]"
                    onclick="omnitureClickBoton('btn:Hipotecas:Distribuidora:Variable:Masinformacion')"
                    >Más información</a
                  >
                </div>
              </div>
            </div>
            <div class="hMixta box092019">
              <div class="pointer092019-2">
                ¡Hemos<br />bajado el<br />precio!
              </div>
              <h3>Hipoteca Mixta</h3>
              <p>
                Desde 1,49 % TIN los 10 primeros años<br />Después desde euríbor
                + 0,99 %<br />(2,16 % TAE Variable)<sup class="supHP">3</sup
                ><br /><br /><span class="subFrase062019" style="color: #4e4e4e"
                  >Domiciliando tu nómina y contratando los seguros de hogar y
                  vida que te ofrecemos.</span
                >
              </p>
              <div class="cont-BTN">
                <a
                  href="#"
                  class="btn-N"
                  onclick="cancelEvent(event);$('html, body').animate({ scrollTop: $('.revamp').offset().top }, 1000);"
                  aria-label="Calcular mi cuota [Scroll hacia el simulador]"
                  ><div
                    onclick="omnitureContratar('btn:hipotecas:landing:distributiva:calcular-Hmixta');"
                  >
                    Calcular mi cuota
                  </div></a
                >
                <div>
                  <a
                    href="/hipotecas/hipoteca-mixta"
                    class="link"
                    title="Más información sobre Hipoteca Mixta [Nueva Ventana]"
                    aria-label="Más información sobre Hipoteca Mixta[Nueva Ventana]"
                    onclick="omnitureClickBoton('btn:Hipotecas:Distribuidora:Mixta:Masinformacion')"
                    >Más información</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("ing-landing-hipoteca", IngLandingHipoteca);
