import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return (
        <Container>
            <Profile to="/Profile">
                <img 
                src="https://github.com/AlisonMaciel.png" 
                alt="Imagem do usuário" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Alison Maciel</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}