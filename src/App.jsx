// import './App.css';
import { useState } from 'react';
import './styles.scss';
import Board from './component/board';
function App() {
  // this is used to learn usestate at learning time
  // const [curren, setcurren] = useState(0);
  // const onbtclick = event => {
  //   console.log('hello', event);
  //   setcurren(curren + 1);
  // };

  return (
    <div className="app">
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
