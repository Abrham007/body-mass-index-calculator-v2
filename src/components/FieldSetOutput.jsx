import React from "react";

function FieldSetOutput(props) {
  let bmiClassification = "";
  const bmi = parseInt(props.bmi);

  if (bmi <= 18.5) {
    bmiClassification = "underweight";
  } else if (18.5 < bmi && bmi <= 24.9) {
    bmiClassification = "normal weight";
  } else if (25 <= bmi && bmi <= 29.9) {
    bmiClassification = "overweight";
  } else if (30 < bmi && bmi <= 34.9) {
    bmiClassification = "class I obese";
  } else if (35 < bmi && bmi <= 39.9) {
    bmiClassification = "class II obese";
  } else {
    bmiClassification = "class III obese";
  }

  let lowRange = Math.round((props.heightVal / 100) ** 2 * 18.5).toFixed(1);
  let highRange = Math.round((props.heightVal / 100) ** 2 * 24.9).toFixed(1);

  return props.bmi ? (
    <div className="bmi-form__output" role="presentation">
      <p className="bmi-from__bmi-p">
        Your BMI is...
        <br />
        <span className="bmi-form__bmi-num">{bmi}</span>
      </p>
      <p className="bmi-from__weight-p">
        Your BMI suggests you're {bmiClassification}.Your ideal weight is
        between {lowRange} - {highRange}
      </p>
    </div>
  ) : (
    <div
      className="bmi-form__output bmi-form__output_empty"
      role="presentation"
    >
      <h2>Welcome!</h2>
      <p className="bmi-from__bmi-p">
        Enter your height and weight and you'll see your BMI result here
      </p>
    </div>
  );
}

export default FieldSetOutput;
