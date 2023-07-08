import React from 'react';
import { Container } from './style';
import { InputHTMLAttributes } from 'react';


type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC  <IInputProps> = ({...rest}) => {
  return (
    <Container {...rest} />

    
  );
};

export default Input;
