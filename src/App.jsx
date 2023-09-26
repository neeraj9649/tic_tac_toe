// import './App.css';
import { useState } from 'react';
import './styles.scss';
function App() {
  const [curren, setcurren] = useState(0);

  const onbtclick = event => {
    console.log('hello', event);
    setcurren(curren + 1);
  };

  return (
    <div className="app">
      <div>
        <button onClick={onbtclick}>click me</button>
        <div>
          <h1>{curren}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
