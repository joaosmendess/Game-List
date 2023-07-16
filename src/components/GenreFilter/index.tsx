import React, { useState } from "react";
import { FilterWrapper, FilterButton } from "./style";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean;
  rating:number
}

interface GenreFilterProps {
  games: Game[];
  onGenreSelect: (genre: string) => void;
  onGenreDeselect: () => void;
  setFavoriteGames: React.Dispatch<React.SetStateAction<Game[]>>;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ games, onGenreSelect, onGenreDeselect,  }) => {
  const genres = [
    "All",
    "Favorites",
    ...new Set(games.map((game) => game.genre)),
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleGenreSelect = (genre: string) => {
    if (genre === selectedGenre) {
      setSelectedGenre("");
      onGenreDeselect();
    } else if (genre === "All") {
      setSelectedGenre("All");
      onGenreSelect("");
    } else if (genre === "Favorites") {
      setSelectedGenre("Favorites");
      onGenreSelect("Favorites");
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
