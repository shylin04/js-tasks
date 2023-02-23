let familyMember = document.getElementsByTagName("li");
for(let i=0; i<familyMember.length; i++){
   familyMember[i].addEventListener("click", function(){
   if(i % 2 == 0)
   {
     this.style.color= "red";
   }
   else{
     this.style.color= "green";
   }
});
}
