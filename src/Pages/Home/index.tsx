import React, { useEffect, useState } from "react";

import GameList from "../../components/GameList";
import Loader from "../../components/Loader";
import SearchInput from "../../components/SearchInput";
import GenreFilter from "../../components/GenreFilter";


import {Container,ErrorMessage} from './style'
import axios from "axios";

const API_BASE_URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
    'dev-email-address': 'joaosilva0721@gmail.com',
  };

 
  
const Home: React.FC = () => {
    

    
  
    return (
      <Container>
     <h1>ola mundo</h1>
      
    </Container>
    );
  };
  
  export default Home;