const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#calculate");
const results = document.querySelector("#results");

button.addEventListener("click", function (e) {

    e.preventDefault();

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    const heightInMeter = heightValue / 100;

    const bmi = weightValue / (heightInMeter * heightInMeter);

    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});