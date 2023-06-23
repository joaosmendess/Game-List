import React, { useEffect } from "react";


import {Container} from './style'
import axios from "axios";

const API_BASE_URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data/";

const headers = {
    'dev-email-address': 'joaosilva0721@gmail.com',
  };

  

const Home: React.FC = () => {
    
    useEffect (() => {
           axios.get(API_BASE_URL, {headers} )
           .then(response => {
            console.log(response.data);
         })
         .catch(error => {
            console.error(error)
        })
        
    }, [])
  
    return (
      <Container>
        <h1> Hello world</h1>
      </Container>
    );
  };
  
  export default Home;