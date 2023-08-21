import styled from "styled-components"

export const SobreContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 74vh;

    div {
        display: flex;
        flex-direction: column;
        padding: 50px 60px;
        background: linear-gradient(
            to left top,
            var(--bg-color-gradiente1),
            var(--bg-color-gradiente2) 30%,
            var(--bg-color-gradiente3)
        );
        gap: 10px;
        border: 1px solid gray;
        border-radius: 10px;
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
