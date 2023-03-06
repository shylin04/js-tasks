// get the id attribute of the html element //
let familyMember = document.getElementsByTagName("li");

for(let i=0; i<familyMember.length; i++){ 
   
  familyMember[i].addEventListener("click", function(){
   if(i % 2 == 0) // if the clicked list (li) is in even order change the color to red//
   {
     this.style.color= "red";
   }
   else{ //else change to green//
     this.style.color= "green";
   }
});
}

