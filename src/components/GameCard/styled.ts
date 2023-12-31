import styled, { keyframes, css } from "styled-components";

const hoverAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;



const genreChangeAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div<{ genreChange: boolean }>`
  color: #ffffff;
  padding: 15px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;

  ${({ genreChange }) =>
    genreChange &&
    css`
      animation: ${genreChangeAnimation} 1s;
    `};
`;

export const GameTitle = styled.h3`
  font-size: 18px;
  padding: 5px;
`;

export const GameImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

  &:hover {
    animation: ${hoverAnimation} 1s ease-in-out infinite;
  }
`;

export const GameLink = styled.a``;

export const RatingContainer = styled.div`
  display: flex;

`;

export const FavoriteContainer = styled.div`
  display: flex;
  background-color: pink;
  margin-left: 10px;
  justify-content: space-between;
`;