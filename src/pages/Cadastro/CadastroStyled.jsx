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
        padding: 30px 35px;
        border: 1px solid #3b3b3b;
        border-radius: 8px;
        width: 600px;
        //background-color: dodgerblue;
    }

    form input,
    form textarea,
    form select, button {
        outline: none;
        width: 95%;
        padding: 7px;
        margin: 8px;
        font-size: 1rem;
        border: 1px solid #000;
        border-radius: 5px;
    }

    form select {
        width: 98%;
        background-color: #fff;
    }

    form input[type="file"] {
        font-size: 0.9rem;
    }

    form div {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: 15px;
    }

    form div button {
        background-color: #fff;
        color: #000;
    }

    form div button:hover {
        background-color: dodgerblue;
        color: #fff;
        cursor: pointer;
    }

    form span {
        border: 1px solid #f8a9a9;
        border-radius: 5px;
        color: #da3737;
        background-color: #f8a9a9c0;
        padding: 5px;
        width: 96%;
        text-align: center;
    }
`
