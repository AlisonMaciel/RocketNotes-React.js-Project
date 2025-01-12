import { useState } from "react"
import {FiUser, FiMail, FiLock, FiArrowLeft, FiCamera} from "react-icons/fi"

import {Container, Header, Form, Avatar, Back} from "./styles"

import { useAuth } from "../../hooks/auth"

import placeholderImg from "../../assets/avatar_placeholder.svg"

import {Input} from "../../components/Input"
import {Buttonn} from "../../components/Buttonn"

import { api } from "../../services"

export function Profile() {
    const {user, updateProfile} = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const user = {
            name,
            email,
            passwordNew,
            passwordOld
        }
        
    await updateProfile({user, avatarFile})
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>

        <Header>
            <Back to="/">
            <FiArrowLeft/>
            </Back>
        </Header>

        <Avatar>
            <img 
                src={avatar}
                alt="Avatar do usuário" />

            <label htmlFor="avatar">
                <FiCamera/>

                <input
                    type="file"
                    id="avatar"
                    onChange={handleChangeAvatar}
                />
            </label>
        </Avatar>

         <Form>
            <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <Input
                placeholder="E-mail"
                type="E-mail"
                icon={FiMail}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <Input
                placeholder="Senha atual"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordOld(e.target.value)}
            />

            <Input  
                placeholder="Nova senha"
                type="password"
                icon={FiLock}
                onChange={e => setPasswordNew(e.target.value)}
            />

            <Buttonn title="Salvar" onClick={handleUpdate}/>
         </Form>
        </Container>
    )
}