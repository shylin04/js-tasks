// get the id attribute of the html element //
const rangeFromInput = document.getElementById('range-from');
const rangeToInput = document.getElementById('range-to');
const divisibleValueInput = document.getElementById('divisible-value');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// add EventListener click to the buttons //
submitBtn.addEventListener('click', () => {
  const rangeFrom = parseInt(rangeFromInput.value); //using parseInt() storing the parsed range values //
  const rangeTo = parseInt(rangeToInput.value);
  const divisibleValue = parseInt(divisibleValueInput.value);

  // check if all the values are valid numbers using isNaN() //
  if (isNaN(rangeFrom) || isNaN(rangeTo) || isNaN(divisibleValue)) {
    resultDiv.textContent = 'Please enter valid numbers for all inputs.'; // if not valid display this textContent //
    return;
  }

  const numbers = []; // empty array for storing the values divisible by divisible value //

  for (let i = rangeFrom; i <= rangeTo; i++) {
    if (i % divisibleValue === 0) {
      numbers.push(i);   // if it is divisible by the value push it to the numbers array //
    }
  }
 // if there are no divisible values display this textContent //
  if (numbers.length === 0) {
    resultDiv.textContent = `There are no numbers between ${rangeFrom} and ${rangeTo} that are divisible by ${divisibleValue}.`;
    return;
  }
// if there are divisible values display this textContent and also display the numbers using join method //
  resultDiv.textContent = `Numbers between ${rangeFrom} and ${rangeTo} that are divisible by ${divisibleValue}: ${numbers.join(', ')}.`;
});
