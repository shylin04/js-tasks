const rangeFromInput = document.getElementById('range-from');
const rangeToInput = document.getElementById('range-to');
const divisibleValueInput = document.getElementById('divisible-value');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', () => {
  const rangeFrom = parseInt(rangeFromInput.value);
  const rangeTo = parseInt(rangeToInput.value);
  const divisibleValue = parseInt(divisibleValueInput.value);

  if (isNaN(rangeFrom) || isNaN(rangeTo) || isNaN(divisibleValue)) {
    resultDiv.textContent = 'Please enter valid numbers for all inputs.';
    return;
  }

  const numbers = [];

  for (let i = rangeFrom; i <= rangeTo; i++) {
    if (i % divisibleValue === 0) {
      numbers.push(i);
    }
  }

  if (numbers.length === 0) {
    resultDiv.textContent = `There are no numbers between ${rangeFrom} and ${rangeTo} that are divisible by ${divisibleValue}.`;
    return;
  }

  resultDiv.textContent = `Numbers between ${rangeFrom} and ${rangeTo} that are divisible by ${divisibleValue}: ${numbers.join(', ')}.`;
});
