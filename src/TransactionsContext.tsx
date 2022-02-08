import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api'

interface Transaction{
    id: number;
    title: string;
    type: string;
    amount: string;
    category: string;
    created_at: string;
  }
  interface TransactionsProviderProps{

    children: ReactNode;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at' >

interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

 

export function TransactionProvider({children }: TransactionsProviderProps){
    
    const [ transactions, setTransactions ] = useState<Transaction[]>([])

 useEffect(() => {
            api.get('/transactions')
            .then(res => setTransactions(res.data))

 },[])
 
 async function createTransaction(transactionInput: TransactionInput){
    const res =  await api.post('/transactions', {...transactionInput, created_at: new Date()})
    const  transaction  = res.data
    
    setTransactions([...transactions, transaction])
 }
    return(
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            { children }
        </TransactionsContext.Provider>
    )
}