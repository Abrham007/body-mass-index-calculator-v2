import React, { useState } from "react";
import FieldSetRadio from "./FieldSetRadio";
import FieldSetNum from "./FieldSetNum";

function App() {
  const [unit, setUnit] = useState("metric");

  function changeUnit(event) {
    const value = event.target.value;
    setUnit(value);
  }
  return (
    <div>
      <form class="bmi-form hero__bmi-form">
        <h2 class="bmi-form__h2">Enter your details below</h2>
        <FieldSetRadio unit={unit} changeUnit={changeUnit} />
        <FieldSetNum unit={unit} />
        <div
          class="bmi-form__output bmi-form__output_empty"
          role="presentation"
        >
          <h2>Welcome!</h2>
          <p class="bmi-from__bmi-p">
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>

        <div
          class="bmi-form__output bmi-form__output_value"
          role="presentation"
        >
          <p class="bmi-from__bmi-p">
            Your BMI is...
            <br />
            <span class="bmi-form__bmi-num">23.4</span>
          </p>
          <p class="bmi-from__weight-p">
            Your BMI suggests you're
            <span class="bmi-form__bmi-classification">normal weight</span>
            .Your ideal weight is between
            <span class="bmi-form__ideal-weight">63.3kgs - 85.2kgs</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default App;
