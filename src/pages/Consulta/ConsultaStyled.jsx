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

    .pesquisa {
        justify-self: flex-end;
    }

    .pesquisa input {
        outline: none;
        padding: 5px;
        margin-right: 3px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .pesquisa button {
        background-color: var(--bg-color-button) !important;
        color: var(--color-font-button) !important;
        border: 1px solid var(--bg-color-button);
        border-radius: 5px;
        padding: 5px;
        transition: 0.2s;
    }

    .pesquisa button:hover {
        background-color: var(--color-font-button) !important;
        color: var(--bg-color-button) !important;
        border: 1px solid var(--color-font-button);
    }

    .rdt_TableHeadRow {
        font-weight: bold;
        color: #000;
        background-color: #e7e3e3;
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
        font-size: .9rem !important;
        font-weight: bold;
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

`