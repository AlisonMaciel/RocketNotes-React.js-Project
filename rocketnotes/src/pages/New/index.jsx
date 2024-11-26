import { Container, Form } from "./styles";

import {Link} from "react-router-dom"

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {Section} from "../../components/Section"
import {NoteItem} from "../../components/NoteItem"
import {Buttonn} from "../../components/Buttonn"

export function New() {
    return (
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>

                    <Input 
                    placeholder="Título"
                    type="text"/>

                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem placeholder="https://rocketseat.com"/>
                        <NoteItem placeholder="Novo link" isNew/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem placeholder="React"/>
                            <NoteItem placeholder="Novo marcador" isNew/>
                        </div>
                    </Section>
                    
                    <Buttonn title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}