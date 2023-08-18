import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    height: 4vh;

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
        justify-content: center;
        width: 100px;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        border-right: 1px solid #fff;
    }

    li:first-child {
        margin-left: 50px;
        border-left: 1px solid #fff;
    }

    li:not(:last-child):hover {
        background-color: #fff;
        color: #000;
        font-weight: bold;
    }

    li:last-child {
        border-right: none;
        width: 30%;
        float: right;
        margin-right: 70px;
        align-content: center;
        cursor: context-menu;
    }

    li i {
        margin-right: 10px;
    }
`
