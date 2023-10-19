import React, { useState } from "react";

function FieldSetRadio(props) {
  const clickedObj = {
    border: "7.5px solid hsla(227, 92%, 58%, 0.15)",
    backgroundColor: "#345ff6",
    backgroundClip: "padding-box",
  };
  return (
    <fieldset className="bmi-form__fieldset">
      <label className="bmi-form__radio">
        <input
          style={props.unit === "metric" ? clickedObj : null}
          onClick={props.changeUnit}
          type="radio"
          name="unit"
          id="metric"
          value="metric"
          className="bmi-form__radio-input"
        />
        Metric
      </label>
      <label className="bmi-form__radio">
        <input
          style={props.unit === "imperial" ? clickedObj : null}
          onClick={props.changeUnit}
          type="radio"
          name="unit"
          id="imperial"
          value="imperial"
          className="bmi-form__radio-input"
        />
        Imperial
      </label>
    </fieldset>
  );
}

export default FieldSetRadio;
