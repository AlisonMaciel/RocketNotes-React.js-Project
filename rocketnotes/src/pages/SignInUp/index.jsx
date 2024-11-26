import {FiUser, FiMail, FiLock } from "react-icons/fi"
import {Link} from "react-router-dom"

import { Container, Background, Form } from "./styles";

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn"
export function SignInUp() {
    return (
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input icon={FiUser} placeholder="Nome" type="text"/>
                <Input icon={FiMail} placeholder="E-mail" type="E-mail"/>
                <Input icon={FiLock} placeholder="Senha" type="password"/>

                <Buttonn title="Cadastrar"/>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )
}