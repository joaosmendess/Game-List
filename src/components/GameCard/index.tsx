import React from "react";
import {CardWrapper,Title, Image} from './styled' ;

interface GameCardProps {
  title: string;
  image: string;
}



const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
    return (
      <CardWrapper>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
      </CardWrapper>
    );
  };
  
  export default GameCard;