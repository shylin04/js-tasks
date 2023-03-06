
// store the color radio buttons in radios 
const radios = document.getElementsByName('color');

// box element
const box = document.getElementById('box');

// Add event listener to each radio button
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    box.style.backgroundColor = radio.value;
  });

});