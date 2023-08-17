import styled from "styled-components"

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    background-color: dodgerblue; 
    padding: 1rem;
    height: 12vh;
    
    img {
        width: 5.5rem;
        height: 6.5rem;
    }

    p {
        font-size: 3.5rem;
        font-weight: bold;
        text-shadow: 1px 1px 5px #000;
        color: #fff;
        padding-left: 2rem;
        // text-transform: uppercase;
    }
`