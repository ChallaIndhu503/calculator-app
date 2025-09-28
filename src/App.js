
import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [input, setInput] = useState("");

  const appendValue = (value) => {
    setInput(input + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
     
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="app">
      <div className="calculator-card">
        <h1 className="title">Calculator</h1>

     
        <input
          type="text"
          value={input}
          readOnly
          className="display"
        />

   <div className="buttons">
  <button onClick={clearDisplay} className="btn clear">C</button>
  <button onClick={deleteLast} className="btn del">DEL</button>
  <button onClick={() => appendValue("/")} className="btn op">/</button>
  <button onClick={() => appendValue("*")} className="btn op">*</button>

  <button onClick={() => appendValue("7")} className="btn">7</button>
  <button onClick={() => appendValue("8")} className="btn">8</button>
  <button onClick={() => appendValue("9")} className="btn">9</button>
  <button onClick={() => appendValue("-")} className="btn op">-</button>

  <button onClick={() => appendValue("4")} className="btn">4</button>
  <button onClick={() => appendValue("5")} className="btn">5</button>
  <button onClick={() => appendValue("6")} className="btn">6</button>
  <button onClick={() => appendValue("+")} className="btn op">+</button>

  <button onClick={() => appendValue("1")} className="btn">1</button>
  <button onClick={() => appendValue("2")} className="btn">2</button>
  <button onClick={() => appendValue("3")} className="btn">3</button>
  <button onClick={() => appendValue(".")} className="btn op">.</button>

  <button onClick={() => appendValue("0")} className="btn zero">0</button>
  <button onClick={calculateResult} className="btn equal">=</button>
</div>

      </div>
    </div>
  );
}

export default App;
