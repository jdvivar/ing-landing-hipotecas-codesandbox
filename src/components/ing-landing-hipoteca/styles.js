import { css } from 'lit-element'

export const styles = css`
    :host {
        --subtitulo-font-size: 24px;
        --gap: 30px;
        --display: block;
        --padding: 20px;
    }

    @media (min-width: 768px) {
        :host{
            --gap: 15px;
            --display: grid;
            --padding: 40px;
        }
    }

    @media (min-width: 1024px) {
        :host{
            --subtitulo-font-size: 38px;
            --gap: 30px;
        }
    }

    .wrapper {
        display: var(--display);
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: var(--gap);
        grid-row-gap: 0px;
        max-width: var(--max-width);
        margin: 0 auto;
        padding: var(--padding);
    }

    .main {
        grid-area: 1 / 1 / 2 / 2;
    }

    h1 {
        font-size: 24px;
        color: var(--naranja);
    }

    p {
        font-size: var(--subtitulo-font-size);
        margin-block-start: 16px;
        margin-block-end: 16px;

    }

    p::after {
        display: block;
        content: "";
        height: 3px;
        background-color: var(--naranja);
        width: 38.196601125%;
        margin-top: 20px;
    }

    .hip-1 {
        grid-area: 1 / 2 / 2 / 3;
    }

    .hip-2 {
        grid-area: 1 / 3 / 2 / 4;
    }

    .logo img {
        width: 134px;
    }

    .fondo {
        width: 100%;
    }
`
