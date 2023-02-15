const friendList=document.querySelector("#list");
const vowels=["a","e","i","o","u"];
list.addEventListener("click", function(event){
 if(event.target.tagName==="LI"){
   const firstLetter=event.target.textContent[0];
   if(vowels.includes(firstLetter)){
     event.target.classList.add("red-background");
     event.target.classList.remove("green-background");
   }else{
     event.target.classList.add("green-background");
     event.target.classList.remove("red-background");
}
}
});
