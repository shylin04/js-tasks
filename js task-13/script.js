<<<<<<< HEAD
// get the id attribute of the html element //
const radios = document.getElementsByName('color');

// box element
const box = document.getElementById('box');

// Add event listener click to each radio button
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    box.style.backgroundColor = radio.value;
  });
=======
// store the color radio buttons in radios 
const radios = document.getElementsByName('color');

// box element
const box = document.getElementById('box');

// Add event listener to each radio button
radios.forEach(radio => {
  radio.addEventListener('click', () => {
    box.style.backgroundColor = radio.value;
  });
>>>>>>> 2ae3cc70f0f1480af9021003b53506e7973f21ca
});