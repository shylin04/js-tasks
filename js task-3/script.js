
var text = document.getElementById("myInput"); //get the id attribute from the html and assigning it to the "text" variable//

//when the button is clicked function inside the eventListener execute//
document.getElementById("button").addEventListener("click", function() {
    alert( text.value );
    text.innerText=this.value; // give alert message of text content of an HTML element to the value of a input element //
 
}
);
function showText() {
   let text = document.getElementById("myInput").value;
   document.getElementById("text").innerHTML = "You wrote: " + text;
 }
