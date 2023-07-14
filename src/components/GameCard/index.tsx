import React, { useState, useEffect } from "react";
import { CardWrapper,  GameImage, GameLink, GameTitle } from "./styled";
import FavoriteButton from "../FavoriteButton";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean;
}

interface GameCardProps {
  title: string;
  image: string;
  game_url: string;
  genre: string;
game: Game 
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  game_url,
  genre,
  game
  
  
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
      <FavoriteButton game={game}/>
    </CardWrapper>
  );
};

export default GameCard;
