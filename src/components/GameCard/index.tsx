import React from "react";
import {CardWrapper,Title, Image} from './styled' ;

interface GameCardProps {
  title: string;
  image: string;
}



const GameCard: React.FC<GameCardProps> = ({ title, image }) => {
    return (
      <CardWrapper>
        <Title>{title}</Title>
        <Image src={image} alt={title} />
      </CardWrapper>
    );
  };
  
  export default GameCard;