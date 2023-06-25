import styled from 'styled-components'




export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
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