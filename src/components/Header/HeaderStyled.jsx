import styled from "styled-components"

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    /* background-color: dodgerblue;  */
    background: linear-gradient(to left top, #1977d4, #2278e9, #238cf5);
    padding: 1rem;
    height: 12vh;
    
    img {
        width: 4.8rem;
        height: 5.8rem;
    }

    p {
        font-size: 2.8rem;
        font-weight: bold;
        text-shadow: 1px 2px 8px #000;
        color: #fff;
        padding-left: 2rem;
    }
`