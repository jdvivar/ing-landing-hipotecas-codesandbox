import { css } from 'lit-element'

export const styles = css`
    .wrapper {
        border-radius: 6px;
        border: 2px solid #e5e5e5;
        padding: 18px;
        text-align: center;
        box-shadow: rgb(229,229,229) 8px 8px 0px 0px;
        position: relative;
        margin-top: 50px;
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
        top: -50px;
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
        font-size: 19px;
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
