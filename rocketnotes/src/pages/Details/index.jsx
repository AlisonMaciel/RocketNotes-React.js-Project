import { useEffect, useState } from "react"

import { Container, Links, Content } from "./styles"

import { useParams, useNavigate } from "react-router-dom"

import { api } from "../../services"

import { ButtonTxt } from "../../components/Buttontext"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Buttonn } from "../../components/Buttonn"

export function Details() {
  
  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()
  
  async function removeNote(id) {
    const isOk = confirm("Deseja mesmo remover essa nota ?")
    
    if(isOk) {
      await api.delete(`/notes/${id}`)
      alert("Nota removida com sucesso!")
      navigate(-1)
    } else {
      return
    }
  }

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fechNotes() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    } 
    fechNotes()
  }, [])

  return (
    <Container>
      <Header/>
      { data ? (
      <main>
      <Content>
      <ButtonTxt 
      title="Excluir nota"
      isActive
      onClick={() => removeNote(params.id)}
      />

      <h1>{data.note.title}</h1>

      <p>{data.note.descripiton}</p>

      <Section title="Links úteis">
      {data && data.links.map(link => (
        <Links>
          <li key={String(link.id)}>
            <a href={link.url} target="_blank">
              {link.url}
            </a>
          </li>
        </Links>
      ))}
      </Section>

      <Section title="Marcadores">
        {data && data.tag.map(tag => (
          <Tag
            key={tag.id} 
            title={tag.name}/>
        ))}
      </Section>

      <Buttonn 
      title="Voltar"
      onClick={handleBack}
      />

      </Content>
      </main>
      ) : (<p>Carregando...</p>)}
    </Container>
  )
} 
