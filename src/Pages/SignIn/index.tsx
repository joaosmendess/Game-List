import React from "react";






import { Container,  Form, FormTitle, Button } from "./style";

const SignIn: React.FC = () => {
  

  

  return (
    <Container>
      
      <h2> GameList</h2>

      <Form >
        <FormTitle> Entrar </FormTitle>
        

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
