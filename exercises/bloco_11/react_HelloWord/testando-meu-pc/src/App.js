import React from 'react';
import './App.css';
import HelloWorld from './helloworld';

const element1 = 'Hello World!';
function App(element) {
  element = element1;
  return <HelloWorld firstName='Jorge' lastName='Meyrelles Jr'/>
}

window.onload = App;

export default App;
