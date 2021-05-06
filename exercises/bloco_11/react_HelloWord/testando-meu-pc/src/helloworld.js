import React, { Component} from "react";

class HelloWorld extends Component {
  render () {
    return (
      <h1 class='helloWorld'>Sobre {this.props.firstName} {this.props.lastName}!!</h1>
    )
  }
}

export default HelloWorld;