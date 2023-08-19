import styled from "styled-components"

export const CadForm = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 74vh;

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 35px 25px 35px;
        border: 1px solid gray;
        border-radius: 8px;
        width: 650px;
        background: linear-gradient(to left top, dodgerblue, #fff 30%, #238cf5);
        background-color: #238cf5d5;
    }

    form input,
    form textarea,
    form select,
    button {
        outline: none;
        width: 95%;
        padding: 7px;
        margin: 8px;
        font-size: 1rem;
        border: 1px solid gray;
        border-radius: 5px;
        background-color: #fff;
    }

    form select {
        width: 97.5%;
        background-color: #fff;
        margin-bottom: 5;
    }

    form select option:first-child {
        color: gray;
    }

    form input[type="file"] {
        font-size: 0.9rem;
    }

    form div {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 10px;
    }

    form div button {
        background-color: #fff;
        color: #000;
    }

    form div button:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }

    form span {
        border: 1px solid #f8a9a9;
        border-radius: 5px;
        color: #da3737;
        background-color: #f8a9a9c0;
        padding: 5px;
        width: 95%;
        text-align: center;
    }
`
