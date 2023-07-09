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
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";

interface ILoginProps {
  UserEmail: string;
  UserPassword: string;
}

const Login: React.FC<ILoginProps> = ({ UserEmail, UserPassword }) => {
  const [email, setEmail] = useState(UserEmail);
  const [password, setPassword] = useState(UserPassword);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(email, password);
      // Login realizado com sucesso

      console.log("Login realizado com sucesso!");
      navigate("/home"); // Redirecionar para a página de home após o login
    } catch (error) {
      // Tratar erros de login
      console.error(error);
    }
  };

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
    </Container>
  );
};

export default Login;