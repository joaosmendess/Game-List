import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FavButton } from "./style";

import { useSpring, animated } from "react-spring";

interface FavoriteButtonProps {
  isFavorite: boolean;
  gameId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,

}) => {
  const [reverse, setReverse] = useState(false);

  
  

  const springProps = useSpring<{ transform: string }>({
    transform: `scale(${isFavorite ? 1.5 : 1.2})`,
    config: { mass: 5, tension: 280, friction: 10 },
    onRest: () => setReverse(false),
    reverse,
  });

  const handleClick = () => {
    
    if (isFavorite) {
      setReverse(true);
    }
   
  };

  return (
    <FavButton onClick={handleClick}>
      <animated.div style={springProps}>
        {isFavorite ? (
          <FavoriteIcon style={{ color: "red" }} />
        ) : (
          <FavoriteIcon style={{ color: "#FFF", backgroundColor: "#1B1F38" }} />
        )}
      </animated.div>
    </FavButton>
  );
};

export default FavoriteButton;
