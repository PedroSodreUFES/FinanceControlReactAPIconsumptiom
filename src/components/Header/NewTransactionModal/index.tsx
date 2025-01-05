import * as Dialog from "@radix-ui/react-dialog"
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButtom } from "./styles"
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react"

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action="">
                    <input type="text" placeholder="Descrição" required/>
                    <input type="text" placeholder="Preço" required/>
                    <input type="text" placeholder="Categoria" required/>

                    <TransactionType>
                        <TransactionTypeButtom variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButtom>

                        <TransactionTypeButtom variant="outcome" value="outcome"  >
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButtom>
                    </TransactionType>

                    <button type="submit">Cadastrar</button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}