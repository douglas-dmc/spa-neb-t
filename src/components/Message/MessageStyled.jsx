import styled, { css } from "styled-components"

export const Msg = styled.span`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 0.8rem;
    margin: 0 auto;
    font-family: "Franklin Gothic Medium", Arial, sans-serif;
    font-size: 1.1rem;
    text-align: center;

    ${(props) => {
        switch (props.$mode) {
            case "success":
                return css`
                    color: #176e2b;
                    background-color: #d4edda;
                    border-color: #c3e6cb;
                `
            case "error":
                return css`
                    color: #721c24;
                    background-color: #f8d7da;
                    border-color: #f5c6cb;
                `
            default:
                return css`
                    border: none;
                `
        }
    }}

    i {
        margin-right: 10px;
        font-size: 1.3rem
    }
`
