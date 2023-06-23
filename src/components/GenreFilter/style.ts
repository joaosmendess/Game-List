import styled, { css } from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

interface IFilterButtonProps {
  active: boolean;
}

export const FilterButton = styled.button<IFilterButtonProps>`
  background-color: ${(props) => (props.active ? "#3498db" : "#f2f2f2")};
  color: ${(props) => (props.active ? "#ffffff" : "#000000")};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;

  ${(props) =>
    props.active.toString() === "true" &&
    css`
      font-weight: bold;
      background-color: red;
    `}
`;