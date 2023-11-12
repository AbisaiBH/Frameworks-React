import Pokemon from './Pokemon.js';
import arrPokemon from '../assets/data/data-pokemon.js';

function Pokedexpok({nombre, numero, imgUrl, tipo}){
    return(
        <Pokemon
        nombre = {nombre}
        numero = {numero}
        imgUrl= {imgUrl}
        tipo = {tipo}
        />
    )
}

export function Pokedex() {
    const listaPokemon = arrPokemon.map((pokemon, index) => (
      <Pokedexpok key={index} nombre={pokemon.name} numero={pokemon.num} imgUrl={pokemon.img} tipo={pokemon.type.slice(0, 2).join(', ')} />
    ));
  
    return <div className="pokedex">{listaPokemon}</div>;
  }