import { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../TransactionsContext';
import { Container, TypeButton, TypeContainer } from './styles';

interface ModalProps{
    isOpen: boolean;
    closeModal: () => void;
}
export function TransactionModal({isOpen, closeModal}: ModalProps){
    const { createTransaction } = useContext(TransactionsContext)
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [type, setType] = useState('income')
    

    async function handleCreateTransaction(event: FormEvent){
        event.preventDefault()
               
        await createTransaction({
            title,
            amount,
            category,
            type                
        })
        setTitle('')
        setAmount('')
        setCategory('')
        setType('income')
        closeModal()
    }

    
         

    return(
        <Modal isOpen={isOpen}
        className="modal-content"
        overlayClassName="modal-overlay"
        onRequestClose={closeModal}
        >
            <button
            className='react-btn'
            onClick={closeModal}           
            >
                close
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h1>Cadastrar Transação</h1>
                <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <TypeContainer>
                    <TypeButton
                    activeColor="green"
                    type="button"
                    isActive={type === 'income'}
                    onClick={() => setType('income')}
                    >
                        Entrada
                    </TypeButton>
                    <TypeButton
                    activeColor="red"
                    type="button"
                    isActive={type === 'outcome'}
                    onClick={() => setType('outcome')}
                    >
                        Saida
                    </TypeButton>
                </TypeContainer>
                <input type="number" placeholder="Valor" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                <input type="text" placeholder="Categoria"value={category} onChange={(e) => setCategory(e.target.value)}/>
                <button
                type="submit"
                className="submit"
                >
                    Cadastrar
                </button>
                
            </Container>
        </Modal>
    )
}

