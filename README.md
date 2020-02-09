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
    <slot slot=titulo>Hipoteca LIMÓN 🍋</slot>
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-1 src=doc/tutorial-1-titulo.gif />

### Subtitle
This will empty the subtitle
```html
<ing-landing-hipoteca>
    <slot slot=subtitulo></slot>
</ing-landing-hipoteca>
```
<img style="border: 1px solid #ddd; width: 100%;" alt=tutorial-2 src=doc/tutorial-2-subtitulos.gif />

### Logo
This will paint a little ball of kitten furr instead of the logo and your heart will melt 😻
```html
<ing-landing-hipoteca>
    <img slot=logo src=http://placekitten.com/300/100 />
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

### Where are the quotes around attribute values?
You might have noticed all the documentation is showing this:
```html
<tag attribute=value>
```
... instead of this:
```html
<tag attribute="value">
```
That is because:
1. It's perfectly valid, as long as you don't use whitespaces
1. Personally I think it's cleaner

To know more about unquoted attribute values read this [article by Mathias Bynens](https://mathiasbynens.be/notes/unquoted-attribute-values).

### Do you have unaddressed questions?

Please don't hesitate and [open an issue](https://github.com/jdvivar/ing-landing-hipotecas-demo/issues/new) assigning `question` as label. I'll answer as soon as I can plus you'll help improve this documentation.