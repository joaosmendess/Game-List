import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

import GameList from "../../components/GameList";
import GenreFilter from "../../components/GenreFilter";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";

import { BsGithub, BsLinkedin, BsExclamationTriangle } from "react-icons/bs";

import { Container, ErrorMessage, Header, Logo, Nav, NavLink, ViewMoreButton, BackButton, ButtonContainer  } from "./style";

const API_BASE_URL =
  "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
  "dev-email-address": "joaosilva0721@gmail.com",
};

interface Game {
  title: string;
  thumbnail: string;
  genre: string;
  game_url: string;
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [visibleGames, setVisibleGames] = useState(12);
  const [selectedGenre, setSelectedGenre] = useState("");

  const gameListRef = useRef<HTMLDivElement>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get<Game[]>(API_BASE_URL, { headers });
      setGames(response.data);
      setLoading(false);
      setErrorMessage("");
    } catch (error: any) {
      setLoading(false);
      if ([500, 502, 503, 504, 507, 508, 509].includes(error.response.status)) {
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
  }, []);

  useEffect(() => {
    // Filtrar jogos pelo gênero selecionado
    if (selectedGenre === "") {
      setFilteredGames(games.slice(0, visibleGames));
    } else {
      const filtered = games.filter((game) => game.genre === selectedGenre);
      setFilteredGames(filtered.slice(0, visibleGames));
    }
  }, [games, selectedGenre, visibleGames]);

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    setVisibleGames(12); // Redefinir o número de jogos visíveis ao selecionar um gênero
  };

  const handleGenreDeselect = () => {
    setSelectedGenre("");
    setVisibleGames(12); // Redefinir o número de jogos visíveis ao desmarcar o gênero
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
    if (gameListRef.current) {
      gameListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Header>
        <Logo> GAME LIST</Logo>
        <Nav>
          <NavLink
            href="https://github.com/joaosmendess"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={28} />
          </NavLink>
          <NavLink
            href="https://www.linkedin.com/in/joaosmendess/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin size={28} />
          </NavLink>
        </Nav>
      </Header>

      <SearchInput onSearch={handleSearch} />
      <GenreFilter
        games={games}
        onGenreSelect={handleGenreSelect}
        onGenreDeselect={handleGenreDeselect}
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
          <div ref={gameListRef}>
            <GameList games={filteredGames} />
          </div>
          {filteredGames.length < games.length && (
            <>
              <ButtonContainer>
                <ViewMoreButton onClick={handleGoBack}>Voltar</ViewMoreButton>
                <BackButton onClick={handleLoadMore}>Carregar mais</BackButton>
              </ButtonContainer>
            </>
          )}
        </div>
      )}
    </Container>
  );
};

export default Home;
