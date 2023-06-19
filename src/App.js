import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("black");
  const [countChar, setCountChar] = useState(0);

  const handleText = (e) => {
    let { value } = e.target;
    setText(value);
  };

  const handleColor = (e) => {
    const { value } = e.target;
    setColor(value);
  };

  useEffect(() => {
    setCountChar(text.length);
  }, [text]);

  return (
    <>
      <div className="container">
        <select name="" id="" value={color} onChange={handleColor}>
          <option value="black">Black</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </select>

        <textarea
          value={text}
          onChange={handleText}
          style={{ color: `${color}` }}
        ></textarea>
        <p>Total Character - {countChar}</p>
      </div>
    </>
  );
}

export default App;
