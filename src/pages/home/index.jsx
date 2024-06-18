import { Container } from "./styles";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/header";
import { Button } from "../../components/button";

export function Home(){
  return(
    <Container>
      <Header/>

      <main>
        <h1>Meus Filmes</h1>

        <Button
          value="Adicionar filme"
        />
      </main>

    </Container>
  )
}