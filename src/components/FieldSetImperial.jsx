import React from "react";

function FieldSetImperial() {
  return (
    <fieldset class="bmi-form__fieldset bmi-form__fieldset_imperial">
      <fieldset class="bmi-form__fieldset">
        <label class="bmi-form__text bmi-form__text_ft">
          Height
          <br />
          <input
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement height-ft"
          />
        </label>
        <label class="bmi-form__text bmi-form__text_in">
          <br />
          <input
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
            type="number"
            placeholder="0"
            class="bmi-form__text-input measurement weight-st"
          />
        </label>
        <label class="bmi-form__text bmi-form__text_lbs">
          <br />
          <input
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
