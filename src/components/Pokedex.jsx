import React, {useState} from 'react'
import PokemonCard from './PokemonCard'

const Pokedex = ({allPokemon, setCollection}) => {
    const [search, setSearch] = useState('')

    let display = allPokemon
    .map((pokemon, index) =>{
        let newObj = {
            ...pokemon,
            id: index +1
        }
        return newObj
    })
    .filter((pokemon) =>{
        return pokemon.name.includes(search)
    })
    .map((pokemon, index) =>{
        return <PokemonCard pokemon={pokemon} index={index} key={index} setCollection={setCollection}/>
    })
  return (
    <section>
        <h1>Add To Your Collection</h1>
        <input placeholder='Search' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
        <div className='pokedex-container'>{display}</div>   
    </section>
  )
}

export default Pokedex