import { Container, Links, Content } from "./styles"

import { ButtonTxt } from "../../components/Buttontext"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { Buttonn } from "../../components/Buttonn"

export function Details() {

  return (
    <Container>
      <Header/>
      <main>
      <Content>
      <ButtonTxt title="Excluir nota" isActive/>

      <h1>
        Introdução ao React
      </h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum neque ad libero quia cupiditate magni expedita non id, minus laudantium! Obcaecati, consectetur! Quam, excepturi deserunt. Numquam optio error rerum temporibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, temporibus. Atque quia cum laudantium eius itaque neque. Maxime asperiores culpa amet modi ab aliquid laboriosam, nisi assumenda nemo quas facilis!
      </p>

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express"/>
        <Tag title="node"/>
      </Section>
      
      <Buttonn title="Voltar" loading/>
      </Content>
      </main>
    </Container>
  )
} 