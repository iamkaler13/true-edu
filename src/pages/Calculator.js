import React, { useState } from "react";
import { evaluate, sqrt, log, sin, cos, tan, pi, e, pow, factorial } from "mathjs";
import "./Calculator.css"; // Ensure you create this CSS file and include your styles

const Calculator = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleClick = (value) => {
    setError("");
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setError("");
    setInput("");
  };

  const handleDelete = () => {
    setError("");
    setInput(input.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setError("Invalid Input");
      setInput("");
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-heading">Advanced Calculator</h1>
      <div className="calculator bg-gray-900 text-black rounded-lg shadow-lg p-6 max-w-md mx-auto mt-10">
        <div className="display bg-gray-800 text-right p-4 rounded-lg mb-4 text-2xl font-mono">
          {input || "0"}
        </div>
        {error && <div className="error text-red-500 text-right mb-4">{error}</div>}
        <div className="buttons grid grid-cols-4 gap-2">
          <button onClick={() => handleClick("sin(")} className="btn">sin</button>
          <button onClick={() => handleClick("cos(")} className="btn">cos</button>
          <button onClick={() => handleClick("tan(")} className="btn">tan</button>
          <button onClick={() => handleClick("log(")} className="btn">log</button>

          <button onClick={() => handleClick("7")} className="btn">7</button>
          <button onClick={() => handleClick("8")} className="btn">8</button>
          <button onClick={() => handleClick("9")} className="btn">9</button>
          <button onClick={() => handleClick("/")} className="btn">/</button>

          <button onClick={() => handleClick("4")} className="btn">4</button>
          <button onClick={() => handleClick("5")} className="btn">5</button>
          <button onClick={() => handleClick("6")} className="btn">6</button>
          <button onClick={() => handleClick("*")} className="btn">*</button>

          <button onClick={() => handleClick("1")} className="btn">1</button>
          <button onClick={() => handleClick("2")} className="btn">2</button>
          <button onClick={() => handleClick("3")} className="btn">3</button>
          <button onClick={() => handleClick("-")} className="btn">-</button>

          <button onClick={() => handleClick("0")} className="btn">0</button>
          <button onClick={() => handleClick(".")} className="btn">.</button>
          <button onClick={handleDelete} className="btn bg-red-600">DEL</button>
          <button onClick={handleClear} className="btn bg-red-600">AC</button>

          <button onClick={() => handleClick("(")} className="btn">(</button>
          <button onClick={() => handleClick(")")} className="btn">)</button>
          <button onClick={() => handleClick("^")} className="btn">^</button>
          <button onClick={() => handleClick("sqrt(")} className="btn">√</button>

          <button onClick={() => handleClick(`${pi}`)} className="btn">π</button>
          <button onClick={() => handleClick(`${e}`)} className="btn">e</button>
          <button onClick={() => handleClick("!")} className="btn">!</button>
          <button onClick={handleCalculate} className="btn bg-green-600 col-span-2">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
