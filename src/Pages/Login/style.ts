import styled from "styled-components";



export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1B1F38;


  
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  > h2 {
    background-color: #1B1F38;
    margin-left: 7px;
    color: #fff;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  padding: 25px;
  border-radius: 10px;
  background-color: #313862;
  
`;

export const FormTitle = styled.h1`
  margin-bottom: 25px;
  color: #fff;
  border-bottom: 2px solid  #f7931B;
  padding-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  margin: 15px 0;
  padding: 10px;
  border-radius: 4px;
  font-weight: bold;
  color: #fff;
  background-color:  #f7931B;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const StyleLink = styled.span`

color: #FFF;
  text-decoration: none;
  font-weight: 100;
  transition: color 0.3s ease;
  display: flex;
  margin: 2px 0;
  

  &:hover {
    color:  #f7931B;
  }
`;

export const ErrorMessage =styled.p `
 color: red;
  font-size: 14px;
  margin-top: 10px;
`