import React, { Component } from 'react';

class Pokemon extends Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{`AW: ${ averageWeight.value} ${ averageWeight.measurementUnit}`}</p>
        <img src={ image } alt={`foto de ${name}`}></img>
      </div>
    );
  }
}


export default Pokemon;