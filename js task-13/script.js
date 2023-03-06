// get the id attribute of the html element //
const radios = document.getElementsByName('color');

// box element
const box = document.getElementById('box');

// Add event listener click to each radio button
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    box.style.backgroundColor = radio.value;
  });
});