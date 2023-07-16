import React from "react";
import {ListWrapper} from "./style"
import GameCard from "../GameCard";
interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean;
  rating:number;
}

interface GameListProps {
  games: Game[];
  favoriteGames: Game[];
  setFavoriteGames: React.Dispatch<React.SetStateAction<Game[]>>;
}


const GameList: React.FC<GameListProps> = ({ games,  setFavoriteGames }) => {
  return (
    <ListWrapper>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          image={game.thumbnail}
          game_url={game.game_url}
          genre={game.genre}
          favorite={game.favorite}
          setFavoriteGames={setFavoriteGames}
          game={game}
        />
      ))}
    </ListWrapper>
  );
};

export default GameList;
