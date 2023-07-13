import React, { useState, useEffect } from "react";
import { CardWrapper,  GameImage, GameLink, GameTitle } from "./styled";


interface GameCardProps {
  title: string;
  image: string;
  game_url: string;
  genre: string;

}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  game_url,
  genre,
  
  
}) => {
  const [genreChange, setGenreChange] = useState(false);
  

  useEffect(() => {
    setGenreChange(true);
    const timeout = setTimeout(() => {
      setGenreChange(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [genre]);

  
  return (
    <CardWrapper genreChange={genreChange}>
      <GameLink href={game_url} target="_blank" rel="noopener noreferrer">
        <GameImage src={image} alt={title} />
      </GameLink>
      <GameTitle>{title}</GameTitle>
    </CardWrapper>
  );
};

export default GameCard;
