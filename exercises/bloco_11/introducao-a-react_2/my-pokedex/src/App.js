import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
