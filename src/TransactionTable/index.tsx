import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";
import { formatPrice, formatDate } from '../util/format'


interface Transaction{
    id: number;
    title: string;
    amount: number;
    category: string;
    created_at: string;
}

export function TransactionTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    useEffect( () => {
        async function loadTransactions(){
         await api.get('/transactions')
               .then(res => setTransactions(res.data))
        }
        loadTransactions()
    },[])
    
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
                    <td>{formatPrice(transaction.amount)}</td>
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