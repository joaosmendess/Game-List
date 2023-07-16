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
  StyleLink,
  PasswordContainer,
  PasswordInput ,
  PasswordToggle 

} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";


interface ILoginProps {
  UserEmail: string;
  UserPassword: string;
}

const Login: React.FC<ILoginProps> = ({ UserEmail, UserPassword }) => {
  const [email, setEmail] = useState(UserEmail);
  const [password, setPassword] = useState(UserPassword);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, preencha todos os campos de login.");
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        if (user) {
         {user ? navigate("/home") : navigate("/login")  }
         toast.success("Login realizado com sucesso!");

          console.log("Muito feliz com o que pude entregar nesse projeto, nunca tinha utilizado firebase antes, foi um desfio que curti muito fazer. Infelizmnete poderia ter feito mais,porém não tinha mais tempo. Muito obrigado pela oportunidade!");
          
        } else {
          toast.error("Erro ao fazer login. Verifique suas credenciais.");
        }
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        toast.error("Erro ao fazer login. Email e/ou senha inválidos.");
      });
  };
  
  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Por favor, insira seu email para recuperar a senha.");
      return;
    }
   

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.info("Um email de recuperação de senha foi enviado para o seu endereço de email.");
      })
      .catch((error) => {
        console.error("Erro ao enviar email de recuperação de senha:", error);
        toast.error("Erro ao enviar o email de recuperação de senha. Verifique se o email está cadastrado e tente novamente.");
      });
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
       <PasswordContainer>
  <PasswordInput
    type={showPassword ? "text" : "password"}
    required
    placeholder="Senha"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <PasswordToggle
  
  
  onClick={toggleShowPassword}
  style={{  color: showPassword ? "#f7931B" : "#666" }}
>
  {showPassword ? <AiOutlineEyeInvisible size={20}   /> : <AiOutlineEye size={20} />}
</PasswordToggle>
</PasswordContainer>
   

        <Link to="/register">
          <StyleLink>Ainda não tem uma conta?</StyleLink>
        </Link>
        <StyleLink  onClick={handleForgotPassword}>
          Esqueci minha senha
        </StyleLink>
        
        <Button type="submit" onClick={handleLogin}>
          Acessar
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

export default Login;
