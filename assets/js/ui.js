let heightCm = document.querySelector(".height-cm");
let weightKg = document.querySelector(".weight-kg");
let heightFt = document.querySelector(".height-ft");
let heightIn = document.querySelector(".height-in");
let weightSt = document.querySelector(".weight-st");
let weightLbs = document.querySelector(".weight-lbs");
let measurement = document.querySelectorAll(".measurement");
let metricInp = document.querySelector("#metric");
let imperialInp = document.querySelector("#imperial");

metricInp.addEventListener("change", unitSelector);
imperialInp.addEventListener("change", unitSelector);

for (let i = 0; i < measurement.length; i++) {
  measurement[i].addEventListener("input", bmiCalculator);
}

function unitSelector() {
  let metricFeildset = document.querySelector(".bmi-form__fieldset_metric");
  let imperialFeildset = document.querySelector(".bmi-form__fieldset_imperial");
  if (metricInp.checked) {
    metricFeildset.style.display = "flex";
    imperialFeildset.style.display = "none";
  } else {
    metricFeildset.style.display = "none";
    imperialFeildset.style.display = "flex";
  }
}

function bmiCalculator() {
  let bmiNum = document.querySelector(".bmi-form__bmi-num");
  let bmiIdealWeitght = document.querySelector(".bmi-form__ideal-weight");
  let bmiClassification = document.querySelector(
    ".bmi-form__bmi-classification"
  );
  let bmiOutputValue = document.querySelector(".bmi-form__output_value");
  let bmiOutputEmpty = document.querySelector(".bmi-form__output_empty");
  if (metricInp.checked) {
    var heightVal = heightCm.value;
    var weightVal = weightKg.value;
  } else {
    var heightVal = heightFt.value * 30.48 + heightIn.value * 2.54;
    var weightVal = weightSt.value * 6.35 + weightLbs.value * 0.453;
  }

  if (heightVal && weightVal) {
    bmiOutputValue.style.display = "flex";
    bmiOutputEmpty.style.display = "none";

    let bmi = Math.round(weightVal / (heightVal / 100) ** 2).toFixed(1);
    bmiNum.textContent = bmi;

    if (bmi <= 18.5) {
      bmiClassification.textContent = "underweight";
    } else if (18.5 < bmi && bmi <= 24.9) {
      bmiClassification.textContent = "normal weight";
    } else if (25 < bmi && bmi <= 29.9) {
      bmiClassification.textContent = "overweight";
    } else if (30 < bmi && bmi <= 34.9) {
      bmiClassification.textContent = "class I obese";
    } else if (35 < bmi && bmi <= 39.9) {
      bmiClassification.textContent = "class II obese";
    } else {
      bmiClassification.textContent = "class III obese";
    }

    let lowRange = Math.round((heightVal / 100) ** 2 * 18.5).toFixed(1);
    let highRange = Math.round((heightVal / 100) ** 2 * 24.9).toFixed(1);
    bmiIdealWeitght.textContent = `${lowRange}kgs - ${highRange}kgs`;
  }
}
