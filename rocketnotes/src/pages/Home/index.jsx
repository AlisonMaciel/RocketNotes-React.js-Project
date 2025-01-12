import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import {FiPlus, FiSearch} from "react-icons/fi"

import {Container, Brand, Menu, NewNotes, Search, Content} from "./styles"

import { Note } from "../../components/Notes"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { ButtonTxt } from "../../components/Buttontext"
import { api } from "../../services"

export function Home() {

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const navigate = useNavigate()

    function handleTagsSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName)

        if(alreadySelected) {
            const filteredTag = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTag)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id) {
        navigate(`/Details/${id}`)
    }

    function handletUntagTags() {
        setTagsSelected([])
    }

    useEffect(() => {
    async function searchTags() {
        const response = await api.get("/tags")
        setTags(response.data)
    }
        searchTags()      
    }, [])

    useEffect(() => {
        try {
            async function searchNotes() {
                const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
                setNotes(response.data)
            }
            searchNotes()

        } catch (error) {
            return console.error(error.message)
        }
    }, [tagsSelected, search])

    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header/>
                
            <Menu>
            <li>
                <ButtonTxt title="Todos"
                onClick={handletUntagTags}
                isActive={tagsSelected.length === 0}
                />
            </li>

            {
                tags && tags.map(tag => ( 
                    <li key={String(tag.id)} >
                        <ButtonTxt
                            title={tag.name}
                            onClick={() => handleTagsSelected(tag.name)}
                            isActive={tagsSelected.includes(tag.name)}
                        />
                    </li>
                ))
            }

            </Menu>

            <Search>
                <Input 
                placeholder="Pesquisar por nota" 
                icon={FiSearch}
                onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
              <Section title="Minhas notas">
                {
                    notes && notes.map(note => (
                        <Note 
                        key={String(note.id)}
                        data={note}
                        onClick={() => handleDetails(note.id)}
                        />
                    ))
                }
              </Section>

            </Content>

            <NewNotes to="/New">
                <FiPlus/>
                Criar Nota
            </NewNotes>

        </Container>
    )
}
