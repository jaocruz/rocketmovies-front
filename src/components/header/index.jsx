import { Container, Profile } from "./styles";

import { Input } from "../input";
import { FiPlus } from "react-icons/fi";

export function Header(){
  return(
    <Container>
      
      <h1>RocketMovies</h1>

      <Input
      icon={FiPlus}
        value="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <h2>João Pedro Cruz</h2>
          <a href="">sair</a>
        </div>
        <img src="https://github.com/jaocruz.png" alt="" />
      </Profile>

    </Container>
  )
}