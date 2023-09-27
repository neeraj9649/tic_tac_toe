import { useState } from 'react';
import { calculateWinner } from './Winner';
import History from './component/History';
import Board from './component/board';
import StatusMessage from './component/statusmessage';
import './styles.scss';

function App() {
  // const [squares, setsquares] = useState(Array(9).fill(null));
  // const [isXNext, setisXNext] = useState(true);
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];
  // const winner = calculateWinner(squares);
  const Winner = calculateWinner(gamingBoard.squares);
  const handlesquareclick = clickedposition => {
    // if the square is already filld (checking)
    if (gamingBoard.squares[clickedposition] || Winner) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;
      console.log({ isTraversing, currentMove });
      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];
      const nextSquareStare = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedposition == position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );
      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareStare,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(Move => Move + 1);
  };
  const moveTo = move => {
    // console.log('check');
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      {/* <h2>{currstatus}</h2> */}
      <StatusMessage Winner={Winner} gamingBoard={gamingBoard} />
      <Board
        squares={gamingBoard.squares}
        handlesquareclick={handlesquareclick}
      />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
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
