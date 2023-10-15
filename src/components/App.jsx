import React from "react";
import RadioInput from "./RadioInput";

function App() {
  return (
    <div>
      <form class="bmi-form hero__bmi-form">
        <h2 class="bmi-form__h2">Enter your details below</h2>
        <fieldset class="bmi-form__fieldset">
          <label class="bmi-form__radio">
            <RadioInput />
            Metric
          </label>
          <label class="bmi-form__radio">
            <input
              type="radio"
              name="unit"
              id="imperial"
              value="imperial"
              class="bmi-form__radio-input"
            />
            Imperial
          </label>
        </fieldset>
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
        <fieldset class="bmi-form__fieldset bmi-form__fieldset_metric">
          <label class="bmi-form__text bmi-form__text_cm">
            Height
            <br />
            <input
              type="number"
              placeholder="0"
              class="bmi-form__text-input measurement height-cm"
            />
          </label>
          <label class="bmi-form__text bmi-form__text_kg">
            Weight
            <br />
            <input
              type="number"
              placeholder="0"
              class="bmi-form__text-input measurement weight-kg"
            />
          </label>
        </fieldset>
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
