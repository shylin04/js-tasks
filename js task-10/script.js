var previousBox = null; /* define a previous box  to track previously hidden box*/

var boxes = document.querySelectorAll('.box');

for ( i = 0; i < boxes.length; i++) {
 
  /*when a box is clicked function inside eventlistener execute*/
  
  boxes[i].addEventListener('click', function() {
    if (previousBox) {
      previousBox.classList.remove('hidden'); /*we can remove the box using classList.remove property*/
    }
    this.classList.add('hidden'); /*set the previous hidden box to add*/
    previousBox = this;
  });
}
