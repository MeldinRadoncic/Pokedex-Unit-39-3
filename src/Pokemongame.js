import React from "react";
import Pokedex from "./Pokedex";

const PokemonGame = (props) => {
  let hand1 = [];
  let hand2 = [...props.pokemon];

  while (hand1.length < hand2.length) {

    let randIdx = Math.floor(Math.random() * hand2.length);
    let randPokemon = hand2.splice(randIdx, 1)[0];
    hand1.push(randPokemon);
  }

  let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
  let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

  return (
    <div>
      <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
      <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
    </div>
  );
}

PokemonGame.defaultProps = {
  pokemon: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62,img:'http://freepngimg.com/png/117727-charmander-download-hd'},
    { id: 7, name: "Squirtle", type: "water", base_experience: 63,img:'https://flyclipart.com/image-squirtle-png-351956' },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72, img:'https://www.pngwing.com/en/search?q=metapod' },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178, img:'https://www.nicepng.com/ourpic/u2w7e6i1u2w7r5a9_lanas-butterfree-pokemon-butterfree/' },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112, img:'https://www.pngegg.com/en/search?q=pikachu' },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95, img:"https://www.pngkey.com/detail/u2q8o0e6e6o0i1w7_pokemon-jigglypuff-png-jigglypuff-pokemon/" },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225,img:'https://pokemonunite.fandom.com/wiki/Gengar' },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65, img: "https://ficspecies.fandom.com/wiki/Eevee" }
  ]
};

export default PokemonGame;