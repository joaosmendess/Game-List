import React from "react";
import Input from "../../components/Input";
import { BsController } from "react-icons/bs";
import {
  Container,
  Form,
  FormTitle,
  Button,
  Logo,
  InputContainer,
  StyleLink
} from "./style";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Implemente aqui a lógica de Register desejada
    console.log("Register realizado com sucesso!");
  };

  return (
    <Container>
      <Logo>
        <BsController size={40} color="#FFFF" />
        <h2>GameList</h2>
      </Logo>

      <Form onSubmit={handleRegister}>
        <FormTitle>Cadastrar</FormTitle>
        <InputContainer>
          <Input type="text" required placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <Input type="email" required placeholder="E-mail" />
        </InputContainer>
        <InputContainer>
          <Input type="password" required placeholder="Senha" />
        </InputContainer>
        <InputContainer>
          <Input type="date" required placeholder="Data de Nascimento" />
        </InputContainer>
<Link to ="/login"> 

<StyleLink>

Já possui uma conta?
</StyleLink>
</Link>


       
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
