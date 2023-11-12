import logo from './logo.png';
import './App.css';
// import Prueba from './components/Prueba.js';
import MenuNav from './components/MenuNav.js';
import { Pokedex } from './components/Pokedex.js';
import { Color } from './components/Color.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Color/>
        <MenuNav/>
      </header>
      <div className="pokedex">
      <Pokedex/>
      </div>
    </div>
  );
}

export default App;
