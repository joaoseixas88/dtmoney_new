import styled from "styled-components"


export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: -8rem;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    
        div{
            display: flex;
            justify-content: center;
            
        }
        &.y{
            color: var(--green)
        }
        &.n{
            color: var(--red)
        }
       

`