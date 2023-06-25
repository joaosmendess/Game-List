import styled from 'styled-components'


export const CardWrapper = styled.div`
  background-color: #252A48;
  color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  @media (width: 414px) {
    margin-left: 18px;
  

  }
  transition: transform 0.3s;

&:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}


`;

export const Title = styled.h3`
  font-size: 18px;
  padding: 5px;
 
 
  
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: scale-down;
  border-radius: 4px;
  cursor: pointer;
`;
