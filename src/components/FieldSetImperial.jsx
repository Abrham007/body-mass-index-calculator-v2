import React, { useState } from "react";

function FieldSetImperial(props) {
  const [imperialInput, setImperialInput] = useState({
    heightFt: "",
    heightIn: "",
    weightSt: "",
    weightLbs: "",
  });

  function getImperialInput(event) {
    const { name, value } = event.target;
    setImperialInput((prevValue) => ({ ...prevValue, [name]: value }));

    let heightFt = imperialInput.heightFt;
    let heightIn = imperialInput.heightIn;
    let weightSt = imperialInput.weightSt;
    let weightLbs = imperialInput.weightLbs;

    if (heightFt && weightSt && heightIn && weightLbs) {
      var heightVal = heightFt * 30.48 + heightIn * 2.54;
      var weightVal = weightSt * 6.35 + weightLbs * 0.453;
      let bmi = Math.round(weightVal / (heightVal / 100) ** 2).toFixed(1);
      props.getBmi(bmi, heightVal);
    }
  }

  return (
    <fieldset class="bmi-form__fieldset bmi-form__fieldset_imperial">
      <fieldset class="bmi-form__fieldset">
        <label class="bmi-form__text bmi-form__text_ft">
          Height
          <br />
          <input
            name="heightFt"
            onChange={getImperialInput}
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement height-ft"
          />
        </label>
        <label class="bmi-form__text bmi-form__text_in">
          <br />
          <input
            name="heightIn"
            onChange={getImperialInput}
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement height-in"
          />
        </label>
      </fieldset>
      <fieldset class="bmi-form__fieldset">
        <label class="bmi-form__text bmi-form__text_st">
          Weight
          <br />
          <input
            name="weightSt"
            onChange={getImperialInput}
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement weight-st"
          />
        </label>
        <label class="bmi-form__text bmi-form__text_lbs">
          <br />
          <input
            name="weightLbs"
            onChange={getImperialInput}
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement weight-lbs"
          />
        </label>
      </fieldset>
    </fieldset>
  );
}

export default FieldSetImperial;
