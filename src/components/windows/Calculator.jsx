import React, { useState } from "react";
import "./calculator.scss";
import MacWindow from "./macWindows";


const buttons = [
  "AC", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  "0", ".", "="
];

export default function Calculator() {
  const [value, setValue] = useState("0");

  const handleClick = (btn) => {
    if (btn === "AC") {
      setValue("0");
    } else if (btn === "=") {
      try {
        const result = eval(
          value
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-")
        );
        setValue(String(result));
      } catch {
        setValue("Error");
      }
    } else {
      setValue((prev) =>
        prev === "0" ? btn : prev + btn
      );
    }
  };

  return ( 
    <MacWindow width="30vw" height="70vh">
    <div className="calculator">
      <div className="display">{value}</div>

      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={`btn ${
              ["÷", "×", "−", "+", "="].includes(btn)
                ? "operator"
                : ""
            } ${btn === "0" ? "zero" : ""}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
    </MacWindow>
  );
}

