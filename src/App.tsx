import React, { useState } from "react";
import FirstForm from "./components/FirstForm";
import "./App.scss";
import Colors from "./components/Colors";
import SecondForm from "./components/SecondForm";

function App() {
  const [numOfColors, setNumOfColors] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color App</h1>
      </header>
      <FirstForm onSubmit={setNumOfColors} />
      <SecondForm />
      <Colors numOfColors={numOfColors} />
    </div>
  );
}

export default App;
