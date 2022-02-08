import styled from "styled-components"
import { transparentize } from "polished"


interface TypeButtonProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E40'
}

export const TypeContainer = styled.div`
   
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
        gap: 2rem;

`

export const TypeButton = styled.button<TypeButtonProps>`
        width: 100%;
        padding: 0.5rem;
        height: 4rem;
        justify-content: center;
        display: flex;
        align-items: center;
        cursor: pointer;

       background: ${(props) => props.isActive ? transparentize(0.4, colors[props.activeColor] ): 'transparent'};
        
`


export const Container = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;


    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;
    }

    .submit{
        background-color: var(--green);
        width: 100%;
        padding: 0.5rem;
        height: 4rem;
        justify-content: center;
        display: flex;
        align-items: center;
        color: var(--shape);
        cursor: pointer;
    }

`