import { Container } from "./styles";

export function TransactionTable(){
    return(
        <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Comprar o ventilador</td>
                    <td>R$ 169,00</td>
                    <td>Casa</td>
                    <td>01/02/2022</td>                    
                </tr>
                <tr>
                    <td>Comprar armário</td>
                    <td>R$ 1000,00</td>
                    <td>Casa</td>
                    <td>01/02/2022</td>
                </tr>
            </tbody>
        </table>
        </Container>
    )
}