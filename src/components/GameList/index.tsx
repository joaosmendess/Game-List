import React from "react";
import GameCard from "../GameCard";
import { ListWrapper } from "./style";

interface Game {
  id:number;

  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean; // Adicionada a propriedade favorite para indicar se o jogo foi favoritado
}

interface GameListProps {
  games: Game[];
  onFavorite: (game: Game) => Promise<void>; // Adicionada a função onFavorite para favoritar um jogo
}

const GameList: React.FC<GameListProps> = ({ games, onFavorite }) => {
  return (
    <ListWrapper>
      {games.map((game, index) => (
        <GameCard
          key={index}
          title={game.title}
          image={game.thumbnail}
          game_url={game.game_url}
          genre={game.genre}
          favorite={game.favorite}
          onFavorite={() => onFavorite(game)}
          
        />
      ))}
    </ListWrapper>
  );
};

export default GameList;
