import { Container } from "./styles";
import { formatPrice, formatDate } from '../util/format'
import { useContext } from 'react'
import { TransactionsContext } from "../TransactionsContext";




export function TransactionTable(){    

const { transactions } = useContext(TransactionsContext)

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
                {transactions.map((transaction) =>{
                    return(

                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td>{formatPrice(Number(transaction.amount))}</td>
                        <td>{transaction.category}</td>
                        <td>{formatDate(new Date(transaction.created_at))}</td>
                    </tr>
                        )
                })}                  
            </tbody>
        </table>
        </Container>
    )
}