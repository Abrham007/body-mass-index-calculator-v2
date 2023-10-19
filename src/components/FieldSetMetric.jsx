import React, { useState } from "react";

function FieldSetMetric(props) {
  const [metricInput, setMetricInput] = useState({
    height: "",
    weight: "",
  });

  function getMetricInput(event) {
    const { name, value } = event.target;

    setMetricInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  let heightVal = parseInt(metricInput.height);
  let weightVal = parseInt(metricInput.weight);

  if (heightVal && weightVal) {
    let newBmi = Math.round(weightVal / (heightVal / 100) ** 2).toFixed(1);

    props.getBmi(newBmi, heightVal);
  }

  return (
    <fieldset className="bmi-form__fieldset bmi-form__fieldset_metric">
      <label className="bmi-form__text bmi-form__text_cm">
        Height
        <br />
        <input
          name="height"
          onChange={getMetricInput}
          type="number"
          placeholder="0"
          className="bmi-form__text-input measurement height-cm"
        />
      </label>
      <label className="bmi-form__text bmi-form__text_kg">
        Weight
        <br />
        <input
          name="weight"
          onChange={getMetricInput}
          type="number"
          placeholder="0"
          className="bmi-form__text-input measurement weight-kg"
        />
      </label>
    </fieldset>
  );
}

export default FieldSetMetric;
