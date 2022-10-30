import './App.css';
import React, {useEffect, useState} from 'react'
import Header from './components/Header';
import Pokedex from './components/Pokedex';
import axios from 'axios'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [collection, setCollection] = useState([])

useEffect(() =>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000')
.then((res) => {
  console.log(res.data.results)
  setAllPokemon(res.data.results)
})
},[])


  return (
    <div className="App">
      <Header />
      <Pokedex allPokemon={allPokemon} setCollection={setCollection}/>
    </div>
  );
}

export default App;
