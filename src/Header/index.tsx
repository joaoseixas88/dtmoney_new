import { Container, Content } from "./styles";
import imgLogo from "../assets/logo.svg"

interface HeaderProps{
    setOpenTransactionModal: () => void; 
}


export function Header({setOpenTransactionModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <img src={imgLogo} alt="" />                       
                <button
                onClick={setOpenTransactionModal}
                >
                    Nova tansação
                </button>
            </Content>    
        </Container>
        
    )
}