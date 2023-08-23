import styled from "styled-components"

export const Msg = styled.span`
    display: flex;
    justify-content: center;
    width: 100vw;
    padding: 0.8rem;
    margin: 0 auto;
    text-align: center;

    ${(props) => {
        switch (props.$mode) {
            case "success":
                return `
                    color: #176e2b;
                    background-color: #d4edda;
                    border-color: #c3e6cb;
                `
            case "error":
                return `
                    color: #721c24;
                    background-color: #f8d7da;
                    border-color: #f5c6cb;
                `
            default:
                return `
                    border: 1px solid #000;
                `
        }
    }}
`
