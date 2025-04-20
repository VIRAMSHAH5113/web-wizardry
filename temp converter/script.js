function convert() {
    const celsius = parseFloat(document.getElementById('tempInput').value);
    const result = document.getElementById('result');
  
    if (isNaN(celsius)) {
      result.textContent = 'Please enter a valid number.';
      return;
    }
  
    const fahrenheit = (celsius * 9 / 5) + 32;
    result.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  }
  