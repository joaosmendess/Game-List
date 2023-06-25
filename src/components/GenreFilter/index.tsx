import React, { useState } from "react";
import { FilterWrapper, FilterButton } from './style';

interface IGame {
  genre: string;
}

interface IGenreFilterProps {
  games: IGame[];
  onGenreSelect: (genre: string) => void;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({ games, onGenreSelect }) => {
  const genres = [...new Set(games.map((game) => game.genre))];
  const [selectedGenre, setSelectedGenre] = useState("");

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <FilterWrapper>
      {genres.map((genre, index) => (
        <FilterButton
          key={index}
          active={genre === selectedGenre}
          onClick={() => handleGenreSelect(genre)}
        >
          {genre}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

export default GenreFilter;