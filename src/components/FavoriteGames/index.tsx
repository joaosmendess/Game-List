import React, { useEffect, useState } from "react";
import GameList from "../GameList";

interface Game {
  id: number;
  
  title: string;
  thumbnail: string;
  genre: string;
  game_url: string;
  favorite: boolean; // Adicionado a propriedade favorite para indicar se o jogo foi favoritado
}

interface FavoriteGamesProps {
  games: Game[];
  favoriteGames?: number[]; // A propriedade favoriteGames é opcional
  onFavorite: (game: Game) => Promise<void>; // Adicionada a função onFavorite para favoritar um jogo
}

const FavoriteGames: React.FC<FavoriteGamesProps> = ({ games, favoriteGames = [], onFavorite }) => {
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);

  useEffect(() => {
    const filtered = games.filter((game) => favoriteGames.includes(game.id));
    setFilteredGames(filtered);
  }, [games, favoriteGames]);

  return <GameList games={filteredGames} onFavorite={onFavorite} />;
};

export default FavoriteGames;
