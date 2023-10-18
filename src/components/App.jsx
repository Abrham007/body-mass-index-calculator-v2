import React, { useState } from "react";
import FieldSetRadio from "./FieldSetRadio";
import FieldSetNum from "./FieldSetNum";
import FieldSetOutput from "./FieldSetOutput";

function App() {
  const [unit, setUnit] = useState("metric");

  function changeUnit(event) {
    const value = event.target.value;
    setUnit(value);
  }

  const [bmi, setBmi] = useState();
  const [heightVal, setHeightVal] = useState();

  function getBmi(newBmi, newHeight) {
    setBmi(newBmi);
    setHeightVal(newHeight);
  }

  return (
    <div>
      <form class="bmi-form hero__bmi-form">
        <h2 class="bmi-form__h2">Enter your details below</h2>
        <FieldSetRadio unit={unit} changeUnit={changeUnit} />
        <FieldSetNum unit={unit} getBmi={getBmi} />
        <FieldSetOutput bmi={bmi} heightVal={heightVal} />
      </form>
    </div>
  );
}

export default App;
