import React, { useState } from "react";

function RadioInput(props) {
  const [unit, setUnit] = useState("");

  function changeUnit(event) {
    const value = event.target.value;
    setUnit(value);
    console.log(unit);
  }

  return (
    <input
      onClick={changeUnit}
      type="radio"
      className="bmi-form__radio-input"
      value={props.value}
    />
  );
}

export default RadioInput;
