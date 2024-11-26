import {FiPlus, FiSearch} from "react-icons/fi"
import {Container, Brand, Menu, NewNotes, Search, Content} from "./styles"

import { Note } from "../../components/Notes"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonTxt } from "../../components/Buttontext"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
                
            <Menu>

            <li>
                <ButtonTxt title="todos" isActive/>
            </li>
            <li>
                <ButtonTxt title="nodejs" isActive/>
            </li>
            <li>
                <ButtonTxt title="react"/>
            </li>

            </Menu>

            <Search>
                <Input placeholder="Pesquisar por nota" icon={FiSearch}/>
            </Search>

            <Content>
              <Section title="Minhas notas">
                <Note data={{
                    title: "React",
                    tags: [
                        {id: "1", name: "express"},
                        {id: "2", name: "nodejs"}
                    ]
                    }}/>
              </Section>

            </Content>

            <NewNotes to="/New">
                <FiPlus/>
                Criar Nota
            </NewNotes>

        </Container>
    )
}
