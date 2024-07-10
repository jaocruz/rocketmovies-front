import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, Profile } from "./styles";
import { Input } from "../input";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onSearch }){
  const { signOut, user } = useAuth();

  const [search, setSearch] = useState('');
  
  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  return(
    <Container>
      
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input
        type="text"
        placeholder="Pesquisar pelo título"
        value={search}
        onChange={handleSearch}
      />

      <Profile>
        <div>
          <h2>{user.name}</h2>
          <a onClick={handleSignOut}>sair</a>
        </div>

        <Link to="/profile">
          <img src={avatarURL} alt="" />
        </Link>
      </Profile>

    </Container>
  )
}