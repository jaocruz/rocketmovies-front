import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignUp(){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

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
          value="Senha"
        />

        <Button
          value="Cadastrar"
        />

        <Link to="/"><FiArrowLeft/>Voltar para o login</Link>

      </Form>

      <Background/>
    </Container>
  )
}