var message = document.getElementById("message");
document.getElementById("button").addEventListener("click", function() {
    alert( message.value );
    text.innerText=this.value;
 
}
);
message.oninput=showTexts;
function showResult(){
  text.innerText=this.value;
}
