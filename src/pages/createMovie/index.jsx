import { Container, Form } from "./styles";

import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/input";
import { Header } from "../../components/header";
import { Button } from "../../components/button";

export function CreateMovie(){
  return(
    <Container>
      <Header/>

      <main>
        <a href=""><FiArrowLeft/> Voltar</a>

        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputs">
            <Input
              value="Título"
            />

            <Input
              value="Sua nota (de 0 a 5)"
            />
          </div>

          <textarea name="" id="" placeholder="Observações"></textarea>

          <h2>Marcadores</h2>

          <div className="tagsMovie">

          </div>

          <div className="buttons">
            <Button
              value="Excluir filme"
            />

            <Button
              value="Salvar alterações teste"
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}