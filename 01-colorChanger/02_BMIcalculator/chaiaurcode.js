const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#calculate");
const results = document.querySelector("#results");

button.addEventListener("click", function (e) {

    e.preventDefault();

    if (height=== '' || height < 0 || isNaN(height) ){
        results.innerHTML = `please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}`
    }

    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    const heightInMeter = heightValue / 100;

    const bmi = weightValue / (heightInMeter * heightInMeter);

    results.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
});