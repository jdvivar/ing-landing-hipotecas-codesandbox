# `<ing-landing-hipoteca>`
A landing page made with a single tag, ultra customisable via slots.

## Why?
This demo has one goal and one goal only: gain the love and hearts from a group of people still unconvinced Web Components can be used to manage **web content** effortlessly... by anyone!

## How?
Web Components are extremely powerful. In this case, with the web content management mindset in place, the philosophy was about creating a default experience that can be easily managed with just some markup.

This is the landing page used for inspiration:

https://www.ing.es/hipotecas/simula-hipoteca.html.

This is all the markup you need:
```html
<ing-landing-hipoteca></ing-landing-hipoteca>
```

... and this is the result:
![screenshot](landing-screenshot.png)

## What technologies are being used?
I've tried to keep it simple (stupid, as in [KISS](https://en.wikipedia.org/wiki/KISS_principle)). Just [LitElement](https://github.com/Polymer/lit-element) for defining Web Components and [Parcel](https://github.com/parcel-bundler/parcel) for bundling and serving the app. For consistent code I used [Standard](https://github.com/standard/standard) as linter.

## Get started
Want to give it a shot? Go ahead: click here and explore it within the warmth on your browser 😌

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/jdvivar/ing-landing-hipotecas-demo)

> **Advanced users**
>
> If you want to execute locally instead, clone the repo, install dependencies and then just type:
> ```bash
> npm start
> ```

## Things to try
For the following steps to work, just stay on [`index.html`](index.html)

### Main title
This will change the main title
```html
<ing-landing-hipoteca>
    <slot slot=titulo>Hipoteca LIMÓN 🍋</slot>
</ing-landing-hipoteca>
```
### Subtitle
This will empty the subtitle
```html
<ing-landing-hipoteca>
    <slot slot=subtitulo></slot>
</ing-landing-hipoteca>
```
### Logo
This will paint a little ball of kitten furr instead of the logo and your heart will melt:
```html
<ing-landing-hipoteca>
    <img slot=logo src=http://placekitten.com/300/100 />
</ing-landing-hipoteca>
```

> TODO
> ... more to come soon!