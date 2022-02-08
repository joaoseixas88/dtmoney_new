import { useState } from "react";
import { Dashboard } from "./Dashboard";
import { Header } from "./Header";
import { GlobalbalStyle } from "./styles/global";
import { TransactionModal } from "./TransactionModal";
import { TransactionProvider } from './TransactionsContext'




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
 

  function setModalOff(){
    setIsModalOpen(false)
  }
  
  function setOpenTransactionModal(){
        setIsModalOpen(true)
  }

          
  return (
    <TransactionProvider>
    <Header setOpenTransactionModal={() => setOpenTransactionModal()}/>
    <Dashboard />
    <TransactionModal isOpen={isModalOpen} closeModal={setModalOff}/>
    <GlobalbalStyle />
    </TransactionProvider>
  );
}

export default App;
