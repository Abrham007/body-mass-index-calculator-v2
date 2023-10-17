import React, { useState } from "react";

function FieldSetMetric() {
  const [measurement, setMeasurement] = useState({
    height: "",
    weight: "",
  });

  function changeMeasurement(event) {
    const { name, value } = event.target;
    setMeasurement((prevValue) => ({ ...prevValue, [name]: value }));
  }

  return (
    <fieldset class="bmi-form__fieldset bmi-form__fieldset_metric">
      <label class="bmi-form__text bmi-form__text_cm">
        Height
        <br />
        <input
          name="height"
          onChange={changeMeasurement}
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
          onChange={changeMeasurement}
          type="number"
          placeholder="0"
          class="bmi-form__text-input measurement weight-kg"
        />
      </label>
    </fieldset>
  );
}

export default FieldSetMetric;
