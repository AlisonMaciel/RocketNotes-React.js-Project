import { useState } from "react";

import { Container, Form } from "./styles";

import {Link, useNavigate} from "react-router-dom"

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {Section} from "../../components/Section"
import {NoteItem} from "../../components/NoteItem"
import {Buttonn} from "../../components/Buttonn"
import { api } from "../../services";

export function New() {

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [descripiton, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTags, setNewTags] = useState("")

    function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTags])
        setNewTags("")
    }

    function handleRemoveLinks(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(tags => tags !== deleted))
    }

    async function handleAddNotes() {

        if(!title) {
            return alert("Adicione um título")
        }

        if(newLink) {
            return alert("Voce deixou um Link no campo de adicionar, click em adicionar o Link ou deixe vazio.")
        }

        if(newTags) {
            return alert("Voce deixou um Tag no campo de adicionar, click em adicionar o Tag ou deixe vazio.")
        }
        
        try {
            await api.post("/notes", {
                title,
                descripiton,
                tags,
                links
            })
            alert("Nota cadastrada")
            navigate(-1)
        } catch(error) {
            if(error.response) {
                alert(error.response.data.message)
            }
        }
    }

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
                    type="text" 
                    onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">

                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)} 
                                value={link}
                                onClick={() => handleRemoveLinks(link)}
                                />
                            ))
                        }

                        <NoteItem 
                        placeholder="Novo link" 
                        isNew
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={(handleAddLink)}
                        />
                    </Section>

                    <Section title="Marcadores">


                        <div className="tags">
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                key={String(index)} 
                                value={tag}
                                onClick={() => handleRemoveTags(tag)}
                                />
                            ))
                        }
                            <NoteItem 
                            placeholder="Novo marcador" 
                            isNew
                            value={newTags}
                            onChange={e => setNewTags(e.target.value)}
                            onClick={handleAddTags}
                            />
                        </div>
                    </Section>
                    
                    <Buttonn 
                    title="Salvar"
                    onClick={handleAddNotes}
                    />
                </Form>
            </main>
        </Container>
    )
}