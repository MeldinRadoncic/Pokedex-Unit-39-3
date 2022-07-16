
import React from "react";
import PokeCard from "./Pokecard";
import './Pokedex.css'



const Pokedex = (props) => {
  let winMessage = null;
  if (props.isWinner) {
    winMessage = <p className="Pokedex-winner">THIS HAND WINS!</p>;
  }

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <PokeCard
            key={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
            img={p.img}
          />
        ))}
      </div>
      <h4>Total experience: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;