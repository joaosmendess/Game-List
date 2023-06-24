import styled, { css } from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
flex-direction: row;
  margin-bottom: 16px;
 
 
  
`;

interface IFilterButtonProps {
  active: boolean;
}

export const FilterButton = styled.button<IFilterButtonProps>`
  background-color: ${(props) => (props.active ? "#f7931B" : "#252A48")};
  color: ${(props) => (props.active ? "#ffffff" : "#ffffff")};
  
  border: 1px solid  black;
 
 border-radius: 4px;

 padding: 8px 16px;
 margin-right: 8px;
 font-weight: bold;
 
 width: 72px;

display: flex;
justify-content: center;
align-items: center;
font-size: 12px;

  cursor: pointer;

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