import { css } from 'lit-element'

export const styles = css`

    :host {
        --top: 87px;
        --description-font-size: 14px;
        --max-width: 300px;
    }

    @media (min-width: 768px) {
        :host{
            --description-font-size: 16px;
        }
    }

    @media (min-width: 1024px) {
        :host{
            --description-font-size: 19px;
        }
    }

    .wrapper {
        border-radius: 6px;
        border: 2px solid #e5e5e5;
        padding: 18px;
        text-align: center;
        box-shadow: rgb(229,229,229) 8px 8px 0px 0px;
        position: relative;
        margin: 0 auto;
        margin-top: var(--top);
        max-width: var(--max-width);
    }

    .atencion {
        position: absolute;
        top: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background: var(--indigo);
        color: white;
        display: flex;
        font-size: 19px;
        border-radius: 100%;
        top: calc(-1 * var(--top));
    }

    .atencion p {
        margin: auto;
    }

    .triangle {
        left: 5px;
        bottom: -2px;
        position: absolute;
        transform: rotate(-27deg);
        z-index: -1;
    }

    .triangle path {
        fill: var(--indigo);
    }

    .titulo {
        font-size: 22px;
        color: var(--naranja);
        margin-top: 0;
    }

    .descripcion {
        font-size: var(--description-font-size);
    }

    .condiciones {
        font-size: 13px;
    }

    button {
        font-size: 18px;
        width: 195px;
        height: 40px;
        background-color: var(--naranja);
        color: white;
        border: 1px solid transparent;
        border-radius: 4px;
        font-weight: bold;
        transition: all 0.3s ease;
        font-family: INGMe, Arial, sans-serif;
    }

    button:hover {
        border-color: var(--naranja);
        background: transparent;
        color: var(--naranja);
    }

    a {
        text-decoration-style: dashed;
        text-decoration-color: var(--naranja);
        color: black;
        font-size: 16px;
        margin-top: 10px;
        display: block;
    }

    .floater{
        animation-name: floater;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-delay: var(--delay);
    }
    
    @keyframes floater {
        0% {
            transform: translateY(0%);
        }
        50% {
            transform: translateY(var(--amp));
        }
        100% {
            transform: translateY(0%);
        }
    }
`
