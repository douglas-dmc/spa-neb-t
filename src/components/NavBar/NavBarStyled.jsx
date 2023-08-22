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
        padding: 0;
        font-size: 1rem;
        cursor: pointer;
        border-right: 1px solid var(--color-font-navbar);
        transition: background .4s;
    }

    li a {
        color: var(--color-font-navbar);
        text-decoration: none;
        transition: background .4s;
        padding: 10px 20px;
    }

    li:not(:last-child) {
        //width: 130px;
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
    
    li a:hover {
        color: var(--bg-color-navbar);
    }

    li:last-child {
        border-right: none;
        float: right;
        margin-right: 20px;
        align-content: center;
        cursor: context-menu;
        padding: 10px 15px;
    }

    li i {
        margin-right: 10px;
    }
`
