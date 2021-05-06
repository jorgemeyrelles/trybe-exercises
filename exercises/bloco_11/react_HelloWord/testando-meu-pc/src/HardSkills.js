import React, { Component } from "react";

class HardSkills extends Component {
  render() {
    const list = ['Git', 'GitHub', 'Unix', 'HTML', 'CSS', 'Javascript', 'React Native'];
    const hs = list.map((element, index) => {
      return <li key={ index }>{ element }</li>
    })
    return (
      <section>
        <h3>Hard-Skills adquiridos</h3>
        <ul>
          {hs}
        </ul>
      </section>
    )
  }
}

export default HardSkills;