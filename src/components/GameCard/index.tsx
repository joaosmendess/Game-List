import React, { useState, useEffect } from "react";
import { CardWrapper, Title, Image, Link } from "./styled";
import FavoriteButton from "../FavoriteButton";

interface GameCardProps {
  title: string;
  image: string;
  game_url: string;
  genre: string;
  favorite: boolean;
  onFavorite: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  image,
  game_url,
  genre,
  favorite,
  onFavorite,
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
      <Link href={game_url} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt={title} />
      </Link>
      <Title>{title}</Title>

      <FavoriteButton isFavorite={favorite} onClick={onFavorite} />
    </CardWrapper>
  );
};

export default GameCard;
