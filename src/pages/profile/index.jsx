import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function Profile(){
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
          value="Nome"
        />

        <Input
          icon={FiMail}
          value="E-mail"
        />

        <Input
          icon={FiLock}
          value="Senha atual"
        />

        <Input
          icon={FiLock}
          value="Nova senha"
        />

        <Button
          value="Salvar"
        />
      </Form>

    </Container>
  )
}