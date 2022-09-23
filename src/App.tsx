import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./Components/CharacterGallery/CharacterGallery";
import axios from "axios";




export default function App() {


  const url = "https://rickandmortyapi.com/api/character";

  let [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get(url)
        .then((response)=>{
          return response.data
        }).then((data)=>{
      setCharacters(data.results)
    })
        .catch((error) =>{
      console.log(error)
    })
  },[]);

  return (
      < CharacterGallery characters={characters}/>
  );
}


