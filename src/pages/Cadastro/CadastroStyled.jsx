import styled from "styled-components"

export const CadForm = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;

    fieldset {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
    }

    fieldset legend {
        font-family: "Franklin Gothic Medium", Arial, sans-serif;
        color: var(--color-font-title-form);
        font-size: 1.1rem;
        background-color: var(--bg-color-title-form);
        padding: 10px 48px;
        margin: 0;
        border-radius: 15px 15px 0 0;
        width: 87.6%;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 35px 5px 35px;
        margin-top: 0;
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
        width: 700px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
    }

    form input,
    form textarea,
    form select,
    button {
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
        width: 95%;
        padding: 7px;
        margin: 8px;
        font-size: 0.9rem;
        border: 1px solid gray;
        border-radius: 4px;
        background-color: var(--bg-color-components);
    }

    form select {
        width: 97.5%;
        margin-bottom: 5px;
    }

    form select option:first-child {
        color: gray;
    }

    form select option:not(:first-child) {
        color: black;
    }

    form input[type="file"] {
        font-size: 0.9rem;
        margin: 5px 0;
    }

    form div {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 5px;
    }

    form aside {
        display: flex;
        flex-direction: row;
        justify-content: right;
        width: 37%;
    }

    form aside button {
        font-family: "Franklin Gothic Medium", Arial, sans-serif;
        font-size: 1rem;
        background-color: var(--bg-color-button);
        color: var(--color-font-button);
        border: 1px solid var(--bg-color-button);
        border-radius: 5px;
        padding: 7px;
        transition: 0.4s;
    }

    form aside button i {
        margin-right: 10px;
    }

    form aside button:hover {
        background-color: var(--color-font-button);
        color: var(--bg-color-button);
        cursor: pointer;
    }

    form span {
        border: 1px solid var(--bg-color-span);
        border-radius: 5px;
        color: var(--color-font-span);
        background-color: var(--bg-color-span);
        padding: 5px;
        margin-bottom: 5px;
        width: 95%;
        text-align: center;
    }

    form span i {
        padding-right: 10px;
    }
`
