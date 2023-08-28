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
    }

    fieldset legend {
        font-family: "Franklin Gothic Medium", Arial, sans-serif;
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
        padding: 15px 20px;
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
        font-size: 1rem !important;
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
    font-size: 1rem !important;
    height: 10px !important;
   }

   /* .tabela .rdt_TableFooter {
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem !important;
    height: 10px !important;
   } */
`