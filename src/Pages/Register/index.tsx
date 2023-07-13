import React, { useState } from "react";
import Input from "../../components/Input";
import { BsController } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

interface IRegisterProps {
  UserEmail: string;
  UserPassword: string;
}

const Register: React.FC<IRegisterProps> = ({ UserEmail, UserPassword }) => {
  const [email, setEmail] = useState(UserEmail);
  const [password, setPassword] = useState(UserPassword);
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if(email==="" || password ===""){
      toast.error("Erro ao registrar. Preencha todos os dados.")
      return
    }
    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

  
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        if (user) {
          // Salvar o nome no Local Storage
          localStorage.setItem("userName", name);
          toast.success("Registro realizado com sucesso!");

          await sendEmailVerification(user);
          toast.success("Registro realizado com sucesso!");
          navigate("/login"); // Redirecionar para a página de login
        }
      })
      .catch(() => {
        toast.error("Erro ao registrar. Preencha todos os dados.");
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
          <Input type="text" required placeholder="Nome" onChange={(e) => setName(e.target.value)} />
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
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </Container>
  );
};

export default Register;
