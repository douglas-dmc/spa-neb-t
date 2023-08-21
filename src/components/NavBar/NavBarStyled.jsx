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
        background-color: var(--bg-color-navbar);
        color: var(--color-font-navbar);
        width: 100vw;
    }

    li {
        display: inline-flex;
        justify-content: center;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        border-right: 1px solid var(--color-font-navbar);
        transition: background .4s;
    }

    li:not(:last-child) {
        width: 100px;
    }

    li:first-child {
        margin-left: 50px;
        border-left: 1px solid #fff;
    }

    li:not(:last-child):hover {
        background-color: var(--color-font-navbar);
        color: var(--bg-color-navbar);
        font-weight: bold;
    }

    li:last-child {
        border-right: none;
        float: right;
        margin-right: 20px;
        align-content: center;
        cursor: context-menu;
    }

    li i {
        margin-right: 10px;
    }
`
