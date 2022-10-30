import React from 'react'

const PokemonCard = ({pokemon, index, setCollection}) => {

    const addToCollection = () =>{
        setCollection((prevState) =>{
            let newState = [...prevState, pokemon.id]
            return newState
        })

    }
  return (
    <div className='pokedex-card'>
        <img className='pokemon-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
        <h2>{pokemon.name}</h2>
        <button onClick={addToCollection}>Add To Collection</button>
    </div>
  )
}

export default PokemonCard