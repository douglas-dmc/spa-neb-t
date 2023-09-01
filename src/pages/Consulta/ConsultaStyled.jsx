import styled from "styled-components"

export const ConsultaContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;

    fieldset {
        justify-content: center;
        align-items: center;
        border: none;
        max-width: 1000px;
    }

    .legenda {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr;
        grid-template-areas: "legenda legenda legenda legenda";
        justify-self: flex-end;
    }

    fieldset legend {
        font-family: Arial, sans-serif;
        color: var(--color-font-title-form);
        font-size: 1.1rem;
        background-color: var(--bg-color-title-form);
        padding: 10px 40px;
        margin: 0;
        border-radius: 15px 15px 0 0;
        grid-column-start: 1;
        grid-column-end: 5;
        grid-area: legenda;
    }

    .tabela {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        padding: 10px 20px;
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
    }

    .tabela > div {
        border-radius: 8px;
    }

    .tabela .sc-gXCJSa {
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 0.9rem !important;
        font-weight: bold;
        outline: none;
    }

    .tabela button {
        color: var(--bg-color-button);
        background: transparent;
        cursor: pointer;
        border: none;
    }

    .tabela h2 {
        padding: 10px;
        margin: 10px;
    }

    .pesquisa {
        align-self: flex-end;
    }

    .pesquisa input {
        outline: none;
        padding: 5px;
        margin-right: 6px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .pesquisa button {
        background-color: var(--bg-color-button);
        color: var(--color-font-button);
        padding: 3px 8px;
        border: 1px solid var(--bg-color-button);
        border-radius: 4px;
    }

    .pesquisa button:hover {
        background-color: var(--color-font-button);
        color: var(--bg-color-button);
        border-color: #fff;
    }

    .btn_acao:hover {
        color: var(--color-font-button);
        background-color: var(--bg-color-button);
        padding: 5px;
        border: 1px solid var(--bg-color-button);
        border-radius: 3px;
    }

    .rdt_TableHeadRow {
        font-weight: bold;
        color: #000;
        background-color: #e7e3e3;
    }

    dl {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        margin-top: 5px;
    }

    dl dt strong {
        margin-left: 70px;
        margin-bottom: 10px;
    }

    dl dd {
        margin: 5px 5px 10px 70px;
    }

    .mais {
        margin: 0 auto;
    }
`
