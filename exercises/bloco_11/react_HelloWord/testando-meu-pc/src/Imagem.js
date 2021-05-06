import React, { Component } from 'react';

class Imagem extends Component {
  render() {
    return (
      <div className='secImg'>
        <img className='imgm' src={this.props.source} alt={this.props.alt} />;
      </div>
    )
  }
}

export default Imagem;