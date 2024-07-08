import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { useState } from "react";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../input";

export function Header({ onSearch }){
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  };

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
          <a onClick={signOut}>sair</a>
        </div>

        <Link to="/profile">
          <img src={avatarURL} alt="" />
        </Link>
      </Profile>

    </Container>
  )
}