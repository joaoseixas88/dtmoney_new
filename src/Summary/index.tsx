import { useContext } from "react";
import { Container } from "./styles";
import { formatPrice } from '../util/format'
import { TransactionsContext } from "../TransactionsContext";



export function Summary(){

   const { transactions } = useContext(TransactionsContext)
   
   const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income'){
        acc.income += Number(transaction.amount);
        acc.total += Number(transaction.amount)

    } else {
        acc.outcome += Number(transaction.amount);
        acc.total -= Number(transaction.amount)
        
    }
    return acc
}, {
    income: 0,
    outcome: 0,
    total: 0,
})
    return(
        <Container>            
            <div>
                <header>
                    <p>Entradas</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong>{formatPrice(summary.income)}</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong>{formatPrice(summary.outcome)}</strong>
                </header>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src='../assets/income.svg' alt="" />
                    <strong
                    style={summary.total > 0 ? {color: "var(--green)"}: {color: "var(--red)"}}
                    >{formatPrice(summary.total)}</strong>
                </header>
            </div>
        </Container>
    )
}