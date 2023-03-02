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

