import React, { useState } from "react";
import { FilterWrapper, FilterButton } from "./style";

interface IGame {
  genre: string;
  favorite: boolean;
}

interface IGenreFilterProps {
  games: IGame[];
  onGenreSelect: (genre: string) => void;
  onGenreDeselect: () => void;
}

const GenreFilter: React.FC<IGenreFilterProps> = ({
  games,
  onGenreSelect,
  onGenreDeselect
}) => {
  const genres = [
    "All",
    
    ...new Set(games.map((game) => game.genre))
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleGenreSelect = (genre: string) => {
    if (genre === selectedGenre) {
      setSelectedGenre("");
      onGenreDeselect();
    } else if (genre === "All") {
      setSelectedGenre("All");
      onGenreSelect("");
    } else {
      setSelectedGenre(genre);
      onGenreSelect(genre);
    }
  };

  const hasMultipleGenres = genres.length > 3;

  return (
    <FilterWrapper>
      {hasMultipleGenres &&
        genres.map((genre, index) => (
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
