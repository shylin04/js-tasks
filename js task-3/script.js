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
