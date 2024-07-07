import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../input";
import { useEffect, useState } from "react";

export function Header(){
  const { signOut, user } = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  return(
    <Container>
      
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
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