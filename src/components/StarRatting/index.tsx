import React, { useState, useEffect } from 'react';
import { Container } from './style';
import Rating from '@material-ui/lab/Rating';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore, auth } from '../../services/firebaseConfig';

interface StarRatingProps {
  initialRating: number;
  gameId: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating, gameId }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(firestore, 'users', user.uid, 'ratings', String(gameId));
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            setRating(userSnapshot.data().rating);
          }
        }
      } catch (error) {
        console.log('Erro ao obter a classificação:', error);
      }
    };

    fetchRating();
  }, [gameId]);

  const handleRatingChange = async (_event: React.ChangeEvent<{}>, value: number | null) => {
    if (value !== null) {
      setRating(value);
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(firestore, 'users', user.uid, 'ratings', String(gameId));
          await setDoc(userRef, { rating: value });
        }
      } catch (error) {
        console.log('Erro ao salvar a classificação:', error);
      }
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
