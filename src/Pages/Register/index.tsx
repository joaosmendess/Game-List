import React, { useState } from "react";
import Input from "../../components/Input";
import { BsController } from "react-icons/bs";
import {
  Container,
  Form,
  FormTitle,
  Button,
  Logo,
  InputContainer,
  StyleLink,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import {
  sendEmailVerification,
  createUserWithEmailAndPassword,
} from "firebase/auth";


// https://firebase.google.com/docs/auth/web/password-auth?hl=pt-br#web-modular-api
interface IRegisterProps {
  UserEmail: string;
  UserPassword: string;
}

const Register: React.FC<IRegisterProps> = ({ UserEmail, UserPassword }) => {
  const [email, setEmail] = useState(UserEmail);
  const [password, setPassword] = useState(UserPassword);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (userCredential && user) {
          // Registro realizado com sucesso
          await sendEmailVerification(userCredential.user);
          console.log("E-mail de confirmação enviado!");
          console.log("Registro realizado com sucesso!");
          navigate("/login"); // Redirecionar para a página de login
        }
      })
      .catch((error) => {
        console.log(error);
        
      });
  };

  return (
    <Container>
      <Logo>
        <BsController size={40} color="#FFFF" />
        <h2>GameList</h2>
      </Logo>

      <Form>
        <FormTitle>Cadastrar</FormTitle>
        <InputContainer>
          <Input type="text" required placeholder="Nome" />
        </InputContainer>
        <InputContainer>
          <Input
            type="email"
            required
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          {/* Coloque aqui o código correspondente ao campo adicional */}
        </InputContainer>

        <InputContainer>
          <Input
            type="password"
            required
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>

        <Link to="/login">
          <StyleLink>Já possui uma conta?</StyleLink>
        </Link>

        <Button type="submit" onClick={handleRegister}>
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
