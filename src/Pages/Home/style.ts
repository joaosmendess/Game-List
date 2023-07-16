import styled, {keyframes} from 'styled-components'



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  
`;

export const ErrorMessage = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: lighter;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 10px;
  animation: ${fadeIn} 0.5s ease;



  
`;




export const Header = styled.header`
  background-color: #1B1F38;
  color: #FFF;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bolder;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 8px;
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;


  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  justify-content: space-between;
`;


export const ViewMoreButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #444;
  color: #FFF;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f7931B;
  }


`;

export const BackButton = styled.button`
margin-top: 16px;
  padding: 8px 16px;
  background-color: #444;
  color: #FFF;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f7931B;
  }

`;




export const WelcomeContainer = styled.div `
display: flex;
flex-direction: column;
margin-top: 13px 0; 


@media (max-width: 416px ) {
    display: flex;
  margin-left: 8px;
  
  

  }
`
export const WelcomeMessage =styled.p `
font-size: 24px;
  font-weight: bold;
  
  text-align: center;

  span {
    color: #ff9900;
    text-decoration: none;


  }


  @media (max-width: 416px ) {
    display: flex;
  font-size: 11px;
  flex-wrap: nowrap;
  
  

  }
`

export const LogoContainer = styled.div `
margin-top: 15px 0; 

`

export const LogoutButton = styled.button `
  background-color: #f44336;
  margin: 8px;
  color: #ffffff;
  font-size: 13px;
  padding: 7px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c62828;}

    @media (max-width: 416px ) {
  font-size: 10px;
  

  }
   
`

export const SortButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FFF;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: gold;
  }
`;
