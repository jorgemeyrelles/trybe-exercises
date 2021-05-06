import React, { Component } from 'react';

class Profile extends Component {
  render () {
    const { natural, idade, formacao, inst, abstract } = this.props.info;

    return (
      <div className='secText'>
      Natural de {natural}<br /><br />
      Com {idade} anos<br /><br />
      Formado em {formacao}<br /><br />
      Nas instituições {inst}<br /><br />
      Resumo: {abstract}
      </div>
    )
  }
}

export default Profile;