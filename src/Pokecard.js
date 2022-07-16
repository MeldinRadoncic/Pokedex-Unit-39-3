import React from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';



const PokeCard = (props) => {
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        
        <div className='Pokecard'>
            <h4 className='Pokecard-title'>{props.name}</h4>
            <div className='Pokecard-data'>
            <img className='Pokecard-img' src={props.img} alt="PokeImg"/>
            <h4>{props.type}</h4>
            <h4>{props.exp}</h4>

            </div>
        </div>
        
        
    )
}

export default PokeCard;