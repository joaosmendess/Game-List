import React, { useEffect, useState } from "react";
import axios from "axios";
import GameList from "../../components/GameList";
import GenreFilter from "../../components//GenreFilter";
import Loader from "../../components//Loader";
import SearchInput from "../../components/SearchInput";

import {Container,ErrorMessage} from './style'
const API_BASE_URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
    'dev-email-address': 'joaosilva0721@gmail.com',
  };

 
  
const Home: React.FC = () => {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(API_BASE_URL, { headers });
      setGames(response.data);
      setLoading(false);
      setErrorMessage("");
    } catch (error: any) {
      setLoading(false);
      if (
        [500, 502, 503, 504, 507, 508, 509].includes(error.response.status)
      ) {
        setErrorMessage("O servidor falhou em responder, tente recarregar a página");
      } else {
        setErrorMessage("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde");
      }
    }
  };
  
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    if (genre === "") {
      setFilteredGames(games);
    } else {
      const filtered = games.filter((game) => game.genre === genre);
      setFilteredGames(filtered);
    }
  };


  const handleSearch = (searchText) => {
    setSearchText(searchText);
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
     <h1>ola mundo</h1>
      
    </Container>
    );
  };
  
  export default Home;