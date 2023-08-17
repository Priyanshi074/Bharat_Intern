const convertBtn = document.getElementById("convertBtn");
const temperatureInput = document.getElementById("temperatureInput");
const resultParagraph = document.getElementById("result");
const conversionTypeSelect = document.getElementById("conversionType");

convertBtn.addEventListener("click", () => {
    const temperatureValue = parseFloat(temperatureInput.value);
    const conversionType = conversionTypeSelect.value;

    if (!isNaN(temperatureValue)) {
        let convertedValue;
        let convertedUnit;

        if (conversionType === "celsiusToFahrenheit") {
            convertedValue = (temperatureValue * 9/5) + 32;
            convertedUnit = "°F";
        } else if (conversionType === "celsiusToKelvin") {
            convertedValue = temperatureValue + 273.15;
            convertedUnit = "K";
        }

        resultParagraph.textContent = `${temperatureValue.toFixed(2)}°C is ${convertedValue.toFixed(2)}${convertedUnit}`;
    } else {
        resultParagraph.textContent = "Please enter a valid temperature.";
    }
});
