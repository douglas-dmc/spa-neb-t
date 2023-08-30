import styled from "styled-components"

export const LoaderContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;
    border: 1px solid gray;
    border-radius: 0 0 8px 8px;
    background: linear-gradient(
        to left top,
        var(--bg-color-gradiente1),
        var(--bg-color-gradiente2) 30%,
        var(--bg-color-gradiente3)
    );
`
export const Loader = styled.section`
    padding: 20px 50px;
    display: flex;
    background-color: #fff;
    justify-content: center;
    align-self: center;
`

