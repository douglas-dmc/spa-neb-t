import styled from "styled-components"

export const CadForm = styled.main`
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

    form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(7, 1fr);
        grid-template-areas:
            "titulo    titulo   titulo    titulo"
            "objetivo  objetivo objetivo  objetivo"
            "objetivo  objetivo objetivo  objetivo"
            "tipo      numero   edicao    status"
            "bi_numero bi_data  be_numero be_data"
            "arquivo   arquivo  arquivo   arquivo"
            "btn_reset  btn_reset  btn_submit  btn_submit";
        column-gap: 10px;
        row-gap: 8px;
        align-items: center;
        justify-content: space-between;
        padding: 10px 35px;
        margin: 0;
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
    }

    form input,
    form textarea,
    form select {
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        padding: 7px;
        margin: 0;
        font-size: 0.9rem;
        border: 1px solid gray;
        border-radius: 4px;
        background-color: var(--bg-color-components);
    }

    form input[name="titulo"] {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-area: titulo;
    }

    form textarea {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-area: objetivo;
    }

    form select[name="tipo"] {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-area: tipo;
    }

    form select:invalid,
    form input:invalid {
        color: gray;
    }

    form select:valid,
    form input:invalid {
        color: #000;
    }

    form input[name="numero"] {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-area: numero;
    }

    form select[name="edicao"] {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-area: edicao;
    }

    .status {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-area: status;
        color: var(--bg-color-button);
        font-size: 1.2rem;
        margin: 0;
    }

    .status > * {
        padding: 0px 7px;
        margin: 0;
    }

    form input[name="bi_numero"] {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-area: bi_numero;
    }

    form input[name="bi_data"] {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-area: bi_data;
    }

    form input[name="be_numero"] {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-area: be_numero;
    }

    form input[name="be_data"] {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-area: be_data;
    }

    form input[type="file"] {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-area: arquivo;
    }

    form button[type="reset"] {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-area: btn_reset;
    }

    form button[type="submit"] {
        grid-column-start: 4;
        grid-column-end: 5;
        grid-area: btn_submit;
    }

    form button {
        font-family: "Franklin Gothic Medium", Arial, sans-serif;
        font-size: 1rem;
        background-color: var(--bg-color-button);
        color: var(--color-font-button);
        border: 1px solid var(--bg-color-button);
        border-radius: 5px;
        padding: 7px;
        margin-top: 10px;
        transition: 0.4s;
    }

    form button i {
        margin-right: 10px;
    }

    form button:hover {
        background-color: var(--color-font-button);
        color: var(--bg-color-button);
        cursor: pointer;
    }

    form span {
        grid-column-start: 1;
        grid-column-end: 5;
        border: 1px solid var(--bg-color-span);
        border-radius: 5px;
        color: var(--color-font-span);
        background-color: var(--bg-color-span);
        padding: 5px;
        margin-bottom: 5px;
        text-align: center;
    }

    form span i {
        padding-right: 10px;
    }
`
