import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services";

import placeholderImg from "../../assets/avatar_placeholder.svg"

import { useNavigate } from "react-router-dom";

export function Header() {

    const {user, signOut} = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg

    return (
        <Container>
            <Profile to="/Profile">
                <img 
                src={avatarUrl}
                alt={user.name} />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}