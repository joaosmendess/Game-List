import React, { useState, useEffect } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { FavButton, FavDiv } from "./style";
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestore } from "../../services/firebaseConfig";
import { auth } from "../../services/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSpring, animated } from "react-spring";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean;
  rating:number;
}

interface FavoriteButtonProps {
  game: Game;
  setFavoriteGames: React.Dispatch<React.SetStateAction<Game[]>>;   // Adiciona o tipo da prop setFavoriteGames
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ game, setFavoriteGames }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const user = auth.currentUser;
  
        // Verificar se o usuário está autenticado
        if (!user) {
          console.log(
            "Usuário não autenticado. Não é possível verificar o status de favorito."
          );
          return;
        }
  
        const userRef = doc(firestore, "users", user.uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();
  
        if (userData) {
          const isGameFavorited = userData.favorites?.includes(game.id) || false;
          setIsFavorite(isGameFavorited);
        }
      } catch (error) {
        toast.error("Erro ao verificar status de favorito.");
      }
    };
  
    fetchFavoriteStatus();
  }, [game.id]);
  
  const springProps = useSpring<{ transform: string; color: string }>({
    transform: isFavorite ? "scale(1.2)" : "scale(1)",
    color: isFavorite ? "red" : "#FFF",
    config: { mass: 5, tension: 280, friction: 10 },
  });

  const handleToggleFavorite = async () => {
    setIsFavorite((prevState) => !prevState);
  
    // Verificar se o usuário está autenticado
    if (!auth.currentUser) {
      console.log(
        "Usuário não autenticado. Não é possível salvar jogos favoritos."
      );
      return;
    }
  
    try {
      const userRef = doc(firestore, "users", auth.currentUser.uid);
  
      // Obter os dados do documento do usuário
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();
  
      if (userData && userData.favorites) {
        // Verificar se o jogo já está favoritado
        const isGameFavorited = userData.favorites.includes(game.id);
  
        if (isGameFavorited) {
          // Remover o jogo dos favoritos
          await updateDoc(userRef, {
            favorites: arrayRemove(game.id),
          });
          toast.success(`${game.title} foi removido aos favoritos`)

          // Remover o jogo dos favoritos localmente
          setFavoriteGames((prevFavoriteGames) =>
            prevFavoriteGames.filter((favoriteGame) => favoriteGame.id !== game.id)
          );
        } else {
          // Adicionar o jogo aos favoritos
          await updateDoc(userRef, {
            favorites: arrayUnion(game.id),
          });
          toast.success(`${game.title} foi adicionado aos favoritos`)
  
          // Adicionar o jogo aos favoritos localmente
          setFavoriteGames((prevFavoriteGames) => [...prevFavoriteGames, game]);
        }
      } else {
        // Se não houver dados do usuário ou favoritos ainda, criar um novo documento
        await setDoc(userRef, {
          favorites: [game.id],
        });
  
        // Adicionar o jogo aos favoritos localmente
        setFavoriteGames((prevFavoriteGames) => [...prevFavoriteGames, game]);
      }
    } catch (error) {
      console.log("Erro ao salvar jogo favorito:", error);
    }
  };
  

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <FavDiv>
        <FavButton onClick={handleToggleFavorite}>
          <animated.div style={springProps}>
            <FavoriteIcon color={isFavorite ? "secondary" : "inherit"} />
          </animated.div>
        </FavButton>
      </FavDiv>
    </>
  );
};

export default FavoriteButton;
