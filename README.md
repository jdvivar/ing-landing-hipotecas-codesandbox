# `<ing-landing-hipoteca>`
A landing page made with a single tag, ultra customisable via slots.

## Why?
This demo has one goal and one goal only: gain the love and conquer the hearts of a group of unconvinced yet creative skeptics that Web Components can be used to manage **web content** effortlessly... by anyone!

## How?
Web Components are extremely powerful. For this particular scenario —with the web content management mindset in place— the philosophy was about creating a simple and contentful experience by default, which could be tweaked later for other content.

This is the landing page used for inspiration:

https://www.ing.es/hipotecas/simula-hipoteca.html.

This is all the markup you need:
```html
<ing-landing-hipoteca></ing-landing-hipoteca>
```

... and this is the result:
![screenshot](doc/landing-screenshot.png)

## What technologies are being used?
I've tried to keep it simple (stupid, as in [KISS](https://en.wikipedia.org/wiki/KISS_principle)). Just [LitElement](https://github.com/Polymer/lit-element) for defining Web Components and [Parcel](https://github.com/parcel-bundler/parcel) for bundling and serving the app. For consistent code I used [Standard](https://github.com/standard/standard) as linter.

But you don't really need to know any of that to start, keep reading...

## Get started
Want to give it a shot? Go ahead: click here and explore it within the warmth of your browser 😌

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/jdvivar/ing-landing-hipotecas-demo)

<img style="border: 1px solid #ddd; width: 100%;" alt="Glitch start" src=doc/glitch-start.gif>

> **Advanced users**
>
> If you want to execute locally instead, clone the repo, install dependencies and then just type:
> ```bash
> npm start
> ```

## Things to try
For the following steps to work, just stay on [`markup.html`](markup.html)

### Main title
This will change the main title
```html
<ing-landing-hipoteca>
    <slot slot="titulo">Hipoteca LIMÓN 🍋</slot>
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-1 src=doc/tutorial-1-titulo.gif />

### Subtitle
This will empty the subtitle
```html
<ing-landing-hipoteca>
    <slot slot="subtitulo"></slot>
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-2 src=doc/tutorial-2-subtitulos.gif />

### Logo
This will paint a little ball of kitten furr instead of the logo and your heart will melt 😻
```html
<ing-landing-hipoteca>
    <img slot="logo" src="http://placekitten.com/300/100" />
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-3 src=doc/tutorial-3-logo.gif />

### Floating notices
This will remove the first notice and change the text of the second notice
```html
<ing-landing-hipoteca>
    <slot slot="hipoteca-1-atencion"></slot>
    <slot slot="hipoteca-2-atencion">Esta hipoteca mola!</slot>
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-4 src=doc/tutorial-4-atencion.gif />

### Mortgage card
This will change the title, description and floating notice of the 2nd mortgage card
```html
<ing-landing-hipoteca>
    <slot slot="hipoteca-2-atencion">Esta ha bajado más!</slot>
    <slot slot="hipoteca-2-titulo">Hipoteca Jamón y Queso</slot>
    <slot slot="hipoteca-2-descripcion">
      Los 10 primeros añitos de nuestra relación a 1.49% TIN,</br>
      luego manda el euríbor al que hay que poner 0.99%,</br>
      y nos obligan a decirte que eso en total es TAE variable del 2.16%<sup>3</sup>
    </slot>
</ing-landing-hipoteca>
```

### Conditions, button and more information link
By design, these are the same for any mortgage card and therefore this markup will change the content in all of them. This prevent unnecessary copy errors. This markup will change all of them:
```html
<ing-landing-hipoteca>
    <slot slot="condiciones">
        Necesitamos tu nómina y que contrates seguros de vida y hogar. Todo queda en casa!
    </slot>
    <slot slot="boton">
        Empezar!
    </slot>
    <slot slot="mas-informacion">
      + INFO
    </slot>
</ing-landing-hipoteca>
```

### Benefits title
This will change the title of the 2nd list of benefits
```html
<ing-landing-hipoteca>
    <slot slot="ventajas-2-titulo">
        Cero comisiones
    </slot>
</ing-landing-hipoteca>
```

### Benefits list, update
This will update the 1st list of benefits, and instead use 3 different benefits
```html
<ing-landing-hipoteca>
    <slot slot="ventajas-1-lista">
        <ing-ventaja>
          <slot slot="titulo">0 %</slot>
          <slot slot="subtitulo">Comisión por reembolso o amortización anticipada total o parcial</slot>
        </ing-ventaja>
        <ing-ventaja>
          <slot slot="titulo">0 %</slot>
          <slot slot="subtitulo">Comisión de apertura</slot>
        </ing-ventaja>
    </slot>
</ing-landing-hipoteca>
```

### Benefits list, update a specifig benefit
This will remove all the descriptions from the 1st list of benefits
```html
<ing-landing-hipoteca>
    <slot slot="ventajas-1-lista-1-descripcion"></slot>
    <slot slot="ventajas-1-lista-2-descripcion"></slot>
    <slot slot="ventajas-1-lista-3-descripcion"></slot>
    <slot slot="ventajas-1-lista-4-descripcion"></slot>
</ing-landing-hipoteca>
```

### Benefits list, add another benefit
This will add a 5th benefit to the 2nd list of benefits
```html
<ing-landing-hipoteca>
    <ing-ventaja slot="ventajas-2-lista-extra">
        <slot slot="titulo">0 €</slot>
        <slot slot="subtitulo">Gastos inventados</slot>
        <slot slot="descripcion">Sin más gastos sorpresa </slot>
    </ing-ventaja>
</ing-landing-hipoteca>
```

### All available slots
- `titulo`
- `subtitulo`
- `logo`
- `hipoteca-*-titulo`
- `hipoteca-*-descripcion`
- `condiciones`
- `boton`
- `mas-informacion`
- `ventajas-*-titulo`
- `ventajas-*-lista`
- `ventajas-*-lista-extra`
- `ventajas-*-lista-*-titulo`
- `ventajas-*-lista-*-subtitulo`
- `ventajas-*-lista-*-descripcion`

Where `*` is a number for the n-item, starting in `1`.

## FAQ

### I want to modify/add/remove X thing but it doesn't seem like any of these slots will do the work for me
Sure, ask me what you want to customise [opening an issue](https://github.com/jdvivar/ing-landing-hipotecas-demo/issues/new) and I'll do it as soon as I can.

### What is Glith? Are you planning to use Glitch for managing web content?
To the last question: no way! Glitch is just a tool to edit code directly in the browser without much hassle. I think it gives anyone the opportunity to play and explore in ways they might have never thought of before.

### Do you have unaddressed questions?
Please don't hesitate and [open an issue](https://github.com/jdvivar/ing-landing-hipotecas-demo/issues/new) assigning `question` as label. I'll answer as soon as I can plus you'll help improve this documentation.