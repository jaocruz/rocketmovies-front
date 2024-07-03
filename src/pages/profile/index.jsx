import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    await updateProfile({ user });
  }

  return(
    <Container>
      <header>
        <Link to="/"><FiArrowLeft/>Voltar</Link>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/jaocruz.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera/>
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={e => setOldPassword(e.target.value)}
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button
          title="Salvar"
          onClick={handleUpdate}
        />
      </Form>

    </Container>
  )
}