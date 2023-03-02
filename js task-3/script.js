<<<<<<< HEAD
var text = document.getElementById("myInput");
document.getElementById("button").addEventListener("click", function() {
    alert( text.value );
    text.innerText=this.value;
 
}
);
function showResult() {
   let text = document.getElementById("myInput").value;
   document.getElementById("text").innerHTML = "You wrote: " + text;
 }

=======
var text = document.getElementById("myInput");
document.getElementById("button").addEventListener("click", function() {
    alert( text.value );
    text.innerText=this.value;
 
}
);
function showText() {
   let text = document.getElementById("myInput").value;
   document.getElementById("text").innerHTML = "You wrote: " + text;
 }
>>>>>>> 747c7cadbaa8a604a3c70909430da6b537ac34da
