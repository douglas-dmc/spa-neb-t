import styled from "styled-components"

export const SobreContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;

    fieldset {
        justify-content: center;
        align-items: center;
        border: none;
    }

    .legenda {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-template-areas: "legenda legenda legenda legenda";
    }

    fieldset legend {
        font-family: Arial, sans-serif;
        color: var(--color-font-title-form);
        font-size: 1.1rem;
        background-color: var(--bg-color-title-form);
        padding: 10px 55px;
        margin: 0;
        border-radius: 15px 15px 0 0;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-area: legenda;
    }

    .contato {
        display: flex;
        flex-direction: column;
        padding: 40px 60px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
    }

    div h2 {
        margin-bottom: 20px;
    }

    div p {
        margin-top: 10px;
    }

    div p:nth-child(3) {
        margin-top: 30px;
    }

    div p:nth-child(5) {
        margin-top: 30px;
    }

    div span {
        font-weight: bold;
    }
`
