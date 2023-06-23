import styled from 'styled-components'


export const CardWrapper = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-top: 8px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: scale-down;
  border-radius: 4px;
`;
