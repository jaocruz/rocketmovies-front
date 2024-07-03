import { useAuth } from "../../hooks/auth";

import { Container, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../input";

export function Header(){
  const { signOut } = useAuth();

  return(
    <Container>
      
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input
        placeholder="Pesquisar pelo título"
      />

      <Profile>
        <div>
          <h2>João Pedro Cruz</h2>
          <a onClick={signOut}>sair</a>
        </div>

        <Link to="/profile">
          <img src="https://github.com/jaocruz.png" alt="" />
        </Link>
      </Profile>

    </Container>
  )
}