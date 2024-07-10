import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile(){
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  function handleBack(){
    navigate(-1)
  }

  return(
    <Container>
      <header>
        <a onClick={handleBack}><FiArrowLeft/>Voltar</a>
      </header>

      <Form>

        <Avatar>
          <img src={avatar} alt="" />

          <label htmlFor="avatar">
            <FiCamera/>

            <input
              id="avatar"
              type="file"
              onChange={handleChangeAvatar}
            />
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