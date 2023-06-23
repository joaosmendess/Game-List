import React from "react";


import GameCard from "../GameCard";

import {ListWrapper} from './style'

interface Game {
    title: string;
    image: string;
  }
  
  interface GameListProps {
    games: Game[];
  }

const GameList: React.FC<GameListProps> = ({ games }) => {
    return (
      <ListWrapper>
        {games.map((game, index) => (
          <GameCard key={index} title={game.title} image={game.image} />
        ))}
      </ListWrapper>
    );
  };
  
  export default GameList;