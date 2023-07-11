import React, { useState } from "react";
import Input from "../../components/Input";
import { BsController } from "react-icons/bs";
import {
  Container,
  Form,
  FormTitle,
  Button,
  Logo,
  StyleLink,
  ErrorMessage
} from "./style";
import { Link, useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface ILoginProps {
  UserEmail: string;
  UserPassword: string;
}

const Login: React.FC<ILoginProps> = ({ UserEmail, 
  UserPassword }) => {
  const [email, setEmail] = useState(UserEmail);
  const [password, setPassword] = useState(UserPassword);
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();



  
  const handleLogin = async (e: React.FormEvent  ) => {
    e.preventDefault();


    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos de login.");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        if (user) {
          console.log("Login realizado com sucesso!");
          navigate("/home");
        } else {
          setErrorMessage("Erro ao fazer login. Verifique suas credenciais.");
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        setErrorMessage("Erro ao fazer login. Email e/ou senha inválidos.");
      });
    
    }
  return (
    <Container>
      <Logo>
        <BsController size={40} color="#FFFF" />
        <h2>GameList</h2>
      </Logo>

      <Form>
        <FormTitle>Entrar</FormTitle>
        
        <Input
          type="email"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <Input
          type="password"
          required
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}

        />
        

        <Link to="/register">
          <StyleLink>Ainda não tem uma conta?</StyleLink>
        </Link>

        <Button type="submit" onClick={handleLogin}>
          Acessar
        </Button>
      </Form>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
};

export default Login;

