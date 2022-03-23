import { useState } from 'react';
import './App.css';
import Registration from './Registration';

function App() {
  const [focused, setFocused] = useState(false);
  return (
    <div className="App">
        <Registration focused={focused} setFocused={setFocused}/>
    </div>
  );
}

export default App;
