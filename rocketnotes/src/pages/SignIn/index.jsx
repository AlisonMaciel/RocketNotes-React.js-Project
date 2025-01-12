import { Background, Container, Form } from "./styles";
import {Link} from "react-router-dom"

import { useState } from "react";

import {FiMail, FiLock} from "react-icons/fi"

import {useAuth} from "../../hooks/auth.jsx"

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn" 

export function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")
    
    const {signIn} = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={e => setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={e => setpassword(e.target.value)}

                />

                <Buttonn title="Entrar" onClick={handleSignIn}/>

                <Link to="/signinup">
                    Criar nota
                </Link>

            </Form>

            <Background/>
        </Container>
    )
}