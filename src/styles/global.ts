import { createGlobalStyle } from 'styled-components'

export const GlobalbalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52e54;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape: #FFFFFF
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2,h3,h4,h5, strong{
        font-weight: 600;
    }
    
    
`