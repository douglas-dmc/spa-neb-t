import styled from "styled-components"

export const SobreContainer = styled.main`
    display: flex;
    flex-direction: column;
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
        padding: 10px 38px 10px 58px;
        margin: 0;
        border-radius: 15px 15px 0 0;
        width: 78.6%;
    }

    div {
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
