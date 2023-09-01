import styled from "styled-components"

export const NoDataContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 25vw;
    background: linear-gradient(
        to left top,
        var(--bg-color-gradiente1),
        var(--bg-color-gradiente2) 30%,
        var(--bg-color-gradiente3)
    );
`
export const DataMsg = styled.section`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin-left: 25px;
        font-size: 1.1rem;
        font-weight: bold;
        color: var(--bg-color-title-form);
    }

    i {
        color: var(--bg-color-title-form);
        font-size: 2rem;
    }
`
