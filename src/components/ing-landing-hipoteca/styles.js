import { css } from 'lit-element'

export const styles = css`
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 40px;
}

.main {
    grid-area: 1 / 1 / 2 / 2;
}

h1 {
    font-size: 24px;
    color: var(--naranja);
}

p {
    font-size: 38px;
    margin-block-start: 16px;
    margin-block-end: 16px;

}

p::after {
    display: block;
    content: "";
    height: 3px;
    background-color: var(--naranja);
    width: 205px;
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
