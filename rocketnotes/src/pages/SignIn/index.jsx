import { Background, Container, Form } from "./styles";
import {Link} from "react-router-dom"

import {FiMail, FiLock} from "react-icons/fi"

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn" 

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}/>

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}/>

                <Buttonn title="Entrar"/>

                <Link to="/signinup">
                    Criar nota
                </Link>

            </Form>

            <Background/>
        </Container>
    )
}