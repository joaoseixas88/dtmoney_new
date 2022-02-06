import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue)
`

export const Content = styled.div`

    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 10rem;
    align-items: center;
    
    button{
        background: var(--blue-light);
        border: none;
        border-radius: 1rem;
        padding: 0.3rem;
        font-size: 1rem;
        color: var(--shape);
        cursor: pointer;
    }

`