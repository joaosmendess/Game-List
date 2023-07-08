import React from "react";
import Input from "../../components/Input";
import {BsController  } from "react-icons/bs";




import { Container,  Form, FormTitle, Button, Logo } from "./style";

const Login: React.FC = () => {
  

  

  return (
    <Container>
      
      <Logo>
        <BsController size={40} color="#FFFF"/>
        <h2> GameList</h2>
      </Logo>

      <Form >
        <FormTitle> Entrar </FormTitle>
        <Input
          type="email"
          required
          placeholder="e-mail"
       
        />
        <Input
          placeholder="senha"
          type="password"
          required
        
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default Login;
