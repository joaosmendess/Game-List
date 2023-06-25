import React, { useEffect, useState } from "react";
import axios from "axios";

import GameList from "../../components/GameList";
import GenreFilter from "../../components/GenreFilter";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import { Container, ErrorMessage, Header, Logo, Nav, NavLink } from "./style";

const API_BASE_URL =
  "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
  "dev-email-address": "joaosilva0721@gmail.com",
};

interface Game {
  title: string;
  thumbnail: string;
  genre: string;
}

const Home: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  

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

  const handleGenreSelect = (genre: string) => {
    if (genre === "") {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) => game.genre === genre);
      setFilteredGames(filtered);
    }
  };

  const handleSearch = (searchText: string) => {
    if (searchText === "") {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) =>
        game.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredGames(filtered);
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
      <GenreFilter games={games} onGenreSelect={handleGenreSelect} />
      {loading ? (
        <Loader />
      ) : errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <GameList games={filteredGames} />
      )}
    </Container>
  );
};

export default Home;