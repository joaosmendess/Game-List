import React, { useState } from "react";
import { FilterWrapper, FilterButton } from './style';
import { StyleSheetManager } from "styled-components";

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
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "active"}>
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
    </StyleSheetManager>
  );
};

export default GenreFilter;