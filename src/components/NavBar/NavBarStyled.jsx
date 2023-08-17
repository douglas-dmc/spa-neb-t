import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color: #000;
        color: #fff;
        width: 100vw;
    }

    li {
        display: inline-flex;
        width: 70px;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
    }

    li:hover {
        background-color: #fff;
        color: #000;
        font-weight: bold;
    }
`
