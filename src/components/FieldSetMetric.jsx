import React, { useState } from "react";

function FieldSetMetric(props) {
  const [metricInput, setMetricInput] = useState({
    height: 0,
    weight: 0,
  });
  const [bmi, setBmi] = useState(0);

  function getMetricInput(event) {
    const { name, value } = event.target;
    let heightVal = parseInt(metricInput.height);
    let weightVal = parseInt(metricInput.weight);
    if (heightVal && weightVal) {
      // let bmi = Math.round(weightVal / (heightVal / 100) ** 2).toFixed(1);

      setBmi(Math.round(weightVal / (heightVal / 100) ** 2).toFixed(1));
      props.getBmi(49, heightVal);
    }
    setMetricInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <fieldset class="bmi-form__fieldset bmi-form__fieldset_metric">
      <label class="bmi-form__text bmi-form__text_cm">
        Height
        <br />
        <input
          name="height"
          onChange={getMetricInput}
          type="number"
          placeholder="0"
          class="bmi-form__text-input measurement height-cm"
        />
      </label>
      <label class="bmi-form__text bmi-form__text_kg">
        Weight
        <br />
        <input
          name="weight"
          onChange={getMetricInput}
          type="number"
          placeholder="0"
          class="bmi-form__text-input measurement weight-kg"
        />
      </label>
    </fieldset>
  );
}

export default FieldSetMetric;
