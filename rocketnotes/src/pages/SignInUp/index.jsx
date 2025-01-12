import { useState } from "react";

import {FiUser, FiMail, FiLock } from "react-icons/fi"
import {Link, useNavigate} from "react-router-dom"

import { Container, Background, Form } from "./styles";

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn"

import {api} from "../../services"
 
export function SignInUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos para continuar")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso")
            navigate(-1)
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não foi possível cadastrar")
            }
        }) 

    }

    return (
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input 
                icon={FiUser} 
                placeholder="Nome" 
                type="text"
                onChange={e => setName(e.target.value)}
                />

                <Input 
                icon={FiMail} 
                placeholder="E-mail" 
                type="E-mail"
                onChange={e => setEmail(e.target.value)}
                />

                <Input 
                icon={FiLock} 
                placeholder="Senha" 
                type="password"
                onChange={e => setPassword(e.target.value)}
                />

                <Buttonn title="Cadastrar" onClick={handleSignUp}/>

                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>

        </Container>
    )
}