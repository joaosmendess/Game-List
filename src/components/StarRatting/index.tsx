import React, { useState, useEffect } from 'react';
import { Container } from './style';
import Rating from '@material-ui/lab/Rating';


interface StarRatingProps {
  initialRating: number;
  gameId: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, gameId }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating:${gameId}`);
    if (storedRating) {
      setRating(Number(storedRating));
    }
  }, [gameId]);

  const handleRatingChange = (_event: React.ChangeEvent<{}>, value: number | null) => {
    if (value !== null) {
      setRating(value);
      localStorage.setItem(`rating:${gameId}`, String(value));
    }
  };

  return (
    <Container>
      <Rating
        name={`star-rating-${gameId}`}
        value={rating}
        onChange={handleRatingChange}
        precision={1}
        max={4}
      />
    </Container>
  );
};

export default StarRating;
