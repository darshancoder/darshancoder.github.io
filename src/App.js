import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0)
  return (
    <div className="App">
     <h1> {count}</h1>
     <button onClick={setcount(count+1)}>Count</button>
    </div>
  );
}

export default App;
