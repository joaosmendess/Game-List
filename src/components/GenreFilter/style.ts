import styled, { css } from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
flex-direction: row;
  margin-bottom: 16px;


  @media (max-width: 768px) {
    display: flex;
flex-direction: row;
  margin-bottom: 16px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3px;
  
  

  }
 
 
  
`;

interface IFilterButtonProps {
  active: boolean;
}

export const FilterButton = styled.button<IFilterButtonProps>`
  background-color: ${(props) => (props.active ? "#f7931B" : "#252A48")};
  color: #ffffff;
  
  border: 1px solid  black;
 
 border-radius: 4px;

 padding: 8px 16px;
 margin-right: 8px;
 margin: 2px;
 font-weight: bold;
 

display: flex;
justify-content: center;
align-items: center;
font-size: 12px;

  cursor: pointer;


  
  

  @media (min-width: 416px ) {
    width: 130px;
  

  }
  @media (min-width: 765px) {
    width: 145px;
    
  
  }

  @media (min-width: 1200px) {
    width: 65px;
  
  }
  ${(props) =>
    props.active.toString() === "true" &&
    css`
      font-weight: bold;
     
    `}


    transition: background-color 0.3s, color 0.3s;
    &:hover {
    background-color: ${(props) => (props.active ? "#f7931B" : "#1d1f38")};
    color: #ffffff;

  }

`;