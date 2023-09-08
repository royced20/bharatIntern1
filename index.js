const convertButton = document.getElementById("convert");
const celsiusInput = document.getElementById("celsius");
const resultParagraph = document.getElementById("result");

convertButton.addEventListener("click", () => {
    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultParagraph.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultParagraph.textContent = "Please enter a valid temperature in Celsius.";
    }
});
