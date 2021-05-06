import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
interface HeaderProps {
    onOpenNewTransacitonModal:() =>void;
}
export function Header({onOpenNewTransacitonModal} : HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransacitonModal}>
                    Novo transação
                </button>
              
            </Content>
        </Container>
    )
}