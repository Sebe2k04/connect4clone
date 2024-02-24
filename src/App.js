import './App.css';
import GameBoard from './Components/GameBoard/GameBoard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Connect 4 Clone
        </h1>
      </header>
      <div className="App-Content">
      <GameBoard />
      </div>
      
      <footer>
        <p>GenRio @2024 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
