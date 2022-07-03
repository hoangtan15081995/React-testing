import React, { useState } from 'react';
import TestHook from './components/TestHook';

function App() {
  const [state, setState] = useState("Some Text")
  const [name, setName] = useState("Moe")

  const changeName = () => {
    setName("Steve")
  }

  return (
    <div>
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
    </div>
  )
}

export default App;
