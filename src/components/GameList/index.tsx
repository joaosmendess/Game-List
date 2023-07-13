import React from "react";
import GameCard from "../GameCard";
import { ListWrapper } from "./style";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  
}

interface GameListProps {
  games: Game[];
}

const GameList: React.FC<GameListProps> = ({ games,  }) => {
  return (
    <ListWrapper>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          image={game.thumbnail}
          game_url={game.game_url}
          genre={game.genre}
        />
      ))}
    </ListWrapper>
  );
};

export default GameList;
