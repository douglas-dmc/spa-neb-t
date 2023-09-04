import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    ul {
        display: flex;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;
        background-color: var(--bg-color-navbar);
        color: var(--color-font-navbar);
        width: 100vw;
    }

    li {
        justify-items: center;
        margin: 0;
        padding: 10px 15px;
        font-size: 1rem;
        cursor: pointer;
        transition: background .4s;
        border-right: 1px solid var(--color-font-navbar);
    }
    
    li:not(:nth-child(6)):hover {
        background-color: var(--color-font-navbar);
        color: var(--bg-color-navbar);
    }

    li:nth-child(6) {
        border-right: none;
        cursor: context-menu;
        margin-left: auto;
    }

    li i, li .iconNavbar {
        margin-right: 10px;
    }

    li:last-child {
        border-right: none;
        margin-left: auto;
        cursor: context-menu;
        padding: 10px 20px;
    }

    li a {
        color: var(--color-font-navbar);
        text-decoration: none;
        transition: background .4s;
        padding: 10px 15px;
    }

    li a:hover {
        color: var(--bg-color-navbar);
        border-bottom: 4px solid var(--bg-color-navbar);
    }
`
