import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsGithub, BsLinkedin, BsExclamationTriangle } from "react-icons/bs";

import {
  Container,
  ErrorMessage,
  Header,
  Logo,
  Nav,
  NavLink,
  ViewMoreButton,
  BackButton,
  ButtonContainer,
  WelcomeMessage,
  LogoutButton,
  WelcomeContainer,
  LogoContainer,
  SortButton
} from "./style";
import GenreFilter from "../../components/GenreFilter";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";
import GameList from "../../components/GameList";
import { auth, firestore } from "../../services/firebaseConfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  game_url: string;
  genre: string;
  favorite: boolean;
  rating: number;
}

const API_BASE_URL =
  "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
  "dev-email-address": "joaosilva0721@gmail.com",
};

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleGames, setVisibleGames] = useState(12);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [userName, setUserName] = useState<string>("");
  const [sortingOrder, setSortingOrder] = useState<"asc" | "desc">("asc");
  const [favoriteGames, setFavoriteGames] = useState<Game[]>([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get<Game[]>(API_BASE_URL, { headers });
      setGames(response.data);
      setLoading(false);

      // Obter os jogos favoritos do usuário
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(firestore, "users", user.uid);
        const userSnapshot = await getDoc(userRef);
        const userData = userSnapshot.data();

        if (userData && userData.favorites) {
          const favoriteGamesData = response.data.filter((game) =>
            userData.favorites.includes(game.id)
          );
          setFavoriteGames(favoriteGamesData);
        } else {
          // Se o usuário não tiver jogos favoritos, definir o estado favoriteGames como vazio
          setFavoriteGames([]);
        }
      }
    } catch (error: any) {
      setLoading(false);
      if (
        [500, 502, 503, 504, 507, 508, 509].includes(error.response?.status)
      ) {
        setErrorMessage(
          "O servidor falhou em responder, tente recarregar a página"
        );
      } else {
        setErrorMessage(
          "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
        );
      }
    }
  };

  useEffect(() => {
    fetchData();
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredGames(sortGamesByRating(games).slice(0, visibleGames));
    } else if (selectedGenre === "Favorites") {
      setFilteredGames(sortGamesByRating(favoriteGames).slice(0, visibleGames));
    } else {
      const filtered = games.filter((game) => game.genre === selectedGenre);
      setFilteredGames(sortGamesByRating(filtered).slice(0, visibleGames));
    }
  }, [games, favoriteGames, selectedGenre, sortingOrder, visibleGames]);

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setVisibleGames(12);
  };

  const handleGenreDeselect = () => {
    setSelectedGenre("");
    setVisibleGames(12);
  };

  const handleSearch = (searchText: string) => {
    if (searchText === "") {
      setFilteredGames(games.slice(0, visibleGames));
    } else {
      const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredGames(filtered.slice(0, visibleGames));
    }
  };

  const handleLoadMore = () => {
    setVisibleGames((prevVisibleGames) => prevVisibleGames + 15);
  };

  const handleGoBack = () => {
    setVisibleGames(12);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirecionar para a página de login após sair da conta
    } catch (error) {
      console.log("Erro ao sair da conta:", error);
    }
  };
  const handleSortingOrderChange = () => {
    setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
    const sortedGames = sortGamesByRating(filteredGames);
    setFilteredGames(sortedGames);
  };
  
  const sortGamesByRating = (games: Game[]) => {
    const sortedGames = [...games];
    sortedGames.sort((a, b) => {
      if (sortingOrder === "asc") {
        return a.rating - b.rating;
      } else {
        return b.rating - a.rating;
      }
    });
    return sortedGames;
  };
  const sortedFilteredGames = sortGamesByRating(filteredGames);

  return (
    <Container>
      <Header>
        <LogoContainer>
          <Logo>GAME LIST</Logo>
        </LogoContainer>

        <Nav>
          <NavLink
            href="https://github.com/seu-usuario-do-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={28} />
          </NavLink>

          <NavLink
            href="https://www.linkedin.com/seu-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={28} />
          </NavLink>
        </Nav>

        <WelcomeContainer>
          <WelcomeMessage>
            Bem-vindo, <span>{userName}</span>!
          </WelcomeMessage>

          <LogoutButton onClick={handleSignOut}>Sair da Conta</LogoutButton>
        </WelcomeContainer>
      </Header>

      <SearchInput onSearch={handleSearch} />

      <GenreFilter
        games={games}
        onGenreSelect={handleGenreSelect}
        onGenreDeselect={handleGenreDeselect}
        setFavoriteGames={setFavoriteGames}
      />

      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <ErrorMessage>
          <BsExclamationTriangle size={200} />
          {errorMessage}
        </ErrorMessage>
      ) : (
        <div>
          <div className="sort-button-container">
          <SortButton
  className={sortingOrder === "desc" ? "active" : ""}
  onClick={handleSortingOrderChange} // Remova os parênteses extras ao redor da função
>
</SortButton>

          </div>

          <GameList
            games={sortedFilteredGames}
            favoriteGames={favoriteGames}
            setFavoriteGames={setFavoriteGames}
          />

          {filteredGames.length < games.length && (
            <ButtonContainer>
              <ViewMoreButton onClick={handleGoBack}>Voltar</ViewMoreButton>
              <BackButton onClick={handleLoadMore}>Carregar mais</BackButton>
            </ButtonContainer>
          )}
        </div>
      )}
    </Container>
  );
};

export default Home;
