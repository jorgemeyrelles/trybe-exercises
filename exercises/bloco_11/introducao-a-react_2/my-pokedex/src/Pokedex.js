import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <div className='pokedex'>
        { this.props.pokemons.map((e) => <Pokemon key={e.id} pokemon={e} />) }
      </div>
    )
  }
}

export default Pokedex;