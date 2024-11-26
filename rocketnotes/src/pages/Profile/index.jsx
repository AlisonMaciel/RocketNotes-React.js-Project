import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"

import {Container, Header, Form, Avatar, Back} from "./styles"

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn"

export function Profile() {
    return (
        <Container>

        <Header>
            <Back to="/">
            <FiArrowLeft/>
            </Back>
        </Header>

        <Avatar>
            <img 
                src="https://github.com/AlisonMaciel.png" 
                alt="Avatar do usuário" />

            <label htmlFor="avatar">
                <FiCamera/>

                <input
                    type="file"
                    id="avatar"
                />
            </label>
        </Avatar>

         <Form>
            <Input
                placeholder="Usuário"
                type="text"
                icon={FiUser}
            />

            <Input
                placeholder="R-mail"
                type="E-mail"
                icon={FiMail}
            />

            <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
            />

            <Input  
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
            />

            <Buttonn title="Salvar"/>
         </Form>
        </Container>
    )
}