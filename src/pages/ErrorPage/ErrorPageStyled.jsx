import styled from 'styled-components'

export const ErrorBlock = styled.main`
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
        padding: 10px 48px;
        margin: 0;
        border-radius: 15px 15px 0 0;
        width: 82.5%;
    }

    fieldset div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 50px 15px 50px;
        margin-top: 0;
        border: 1px solid gray;
        border-radius: 0 0 8px 8px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
        gap: 5px;
        width: 440px;
    }

    p {
        font-size: 1.4rem;
    }
`