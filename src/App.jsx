import Board from './component/board';
import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './Winner';

function App() {
  const [squares, setsquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);

  // const winner = calculateWinner(squares);
  const Winner = calculateWinner(squares);
  console.log(Winner);
  const nextPlayer = isXNext ? 'The next is X' : 'The next is O';
  const currstatus = Winner ? `Winner is ${Winner}` : nextPlayer;
  const handlesquareclick = clickedposition => {
    // if the square is already filld (checking)
    if (squares[clickedposition] || Winner) {
      return;
    }
    setsquares(currentsquare => {
      return currentsquare.map((squareValue, position) => {
        if (clickedposition == position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setisXNext(currentIsNext => !currentIsNext);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{currstatus}</h2>
      <Board squares={squares} handlesquareclick={handlesquareclick} />
    </div>
  );
}

export default App;
// this is used to learn usestate at learning time
// const [curren, setcurren] = useState(0);
// const onbtclick = event => {
//   console.log('hello', event);
//   setcurren(curren + 1);
// };
