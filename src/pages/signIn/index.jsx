import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignIn(){
  return(
    <Container>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          value="E-mail"
        />

        <Input
          icon={FiLock}
          value="Senha"
        />

        <Button
          value="Entrar"
        />

        <a href="">Criar conta</a>

      </Form>

      <Background/>
    </Container>
  )
}