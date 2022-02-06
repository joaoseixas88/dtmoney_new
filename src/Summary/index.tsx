import { Container } from "./styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong>1000,00</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong>1000,00</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong>1000,00</strong>
                </header>
            </div>
        </Container>
    )
}