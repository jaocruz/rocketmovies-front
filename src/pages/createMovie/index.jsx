import { Container, Form } from "./styles";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/input";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { MovieItem } from "../../components/movieItem";

export function CreateMovie(){
  return(
    <Container>
      <Header/>

      <main>
        <Link to="/"><FiArrowLeft/> Voltar</Link>

        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputs">
            <Input
              placeholder="Título"
            />

            <Input
              placeholder="Sua nota (de 0 a 5)"
            />
          </div>

          <textarea name="" id="" placeholder="Observações"></textarea>

          <h2>Marcadores</h2>

          <div className="tagsMovie">
            <MovieItem
              value="React"
            />

            <MovieItem
              placeholder="Novo filme"
              isNew
            />
          </div>

          <div className="buttons">
            <Button
              title="Excluir filme"
            />
            
            <Button
              title="Salvar alterações"
            />  
          </div>
        </Form>
      </main>
    </Container>
  )
}