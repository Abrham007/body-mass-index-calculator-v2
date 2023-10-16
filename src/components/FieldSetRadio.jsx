import React, { useState } from "react";
import RadioInput from "./RadioInput";

function FieldSetRadio(props) {
  return (
    <fieldset className="bmi-form__fieldset">
      <label class="bmi-form__radio">
        <input
          onClick={props.changeUnit}
          type="radio"
          name="unit"
          id="metric"
          value="metric"
          class="bmi-form__radio-input"
        />
        Metric
      </label>
      <label className="bmi-form__radio">
        <input
          onClick={props.changeUnit}
          type="radio"
          name="unit"
          id="imperial"
          value="imperial"
          class="bmi-form__radio-input"
        />
        Imperial
      </label>
    </fieldset>
  );
}

export default FieldSetRadio;
