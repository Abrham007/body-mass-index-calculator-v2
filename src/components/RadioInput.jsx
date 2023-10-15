import React from "react";

function RadioInput() {
  return (
    <input
      type="radio"
      name="unit"
      id="metric"
      value="metric"
      class="bmi-form__radio-input"
      checked
    />
  );
}

export default RadioInput;
