import styled from "styled-components"

export const LoaderContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
    width: 30vw;
    background: linear-gradient(
        to left top,
        var(--bg-color-gradiente1),
        var(--bg-color-gradiente2) 30%,
        var(--bg-color-gradiente3)
    );
`
export const Loader = styled.section`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @keyframes loading {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    img {
        width: 80px;
        animation: loading 2s linear infinite;
        margin-bottom: 15px;
    }

    h3 {
        color: var(--bg-color-title-form);
    }
`

