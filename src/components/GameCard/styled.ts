import styled, {keyframes} from 'styled-components'

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

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardWrapper = styled.div`
  
  color: #ffffff;
 
  padding: 15px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;

  animation: ${fadeInAnimation} 0.9s ease-in-out;

  



  @media (width: 414px) {
    margin-left: 18px;
  

  }



`;

export const Title = styled.h3`
  font-size: 18px;
  padding: 5px;
 
 
  
`;

export const Image = styled.img`
   width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  &:hover {
    animation: ${hoverAnimation} 1s ease-in-out infinite;
  }
`;
