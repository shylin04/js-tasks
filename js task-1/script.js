<<<<<<< HEAD
let previousClicked =[];
document.querySelectorAll('.box').forEach(function (box){
  box.addEventListener('click', function(){
     if(previousClicked.length===0){
         alert(this.innerHTML);
         previousClicked.push(this.innerHTML);
     }else{
         alert(previousClicked + ',' +this.innerHTML);
         previousClicked.push(this.innerHTML);
}
});
});
=======
let previousClicked =[];
document.querySelectorAll('.box').forEach(function (box){
  box.addEventListener('click', function(){
     if(previousClicked.length===0){
         alert(this.innerHTML);
         previousClicked.push(this.innerHTML);
     }else{
         alert(previousClicked + ',' +this.innerHTML);
         previousClicked.push(this.innerHTML);
}
});
});
>>>>>>> 747c7cadbaa8a604a3c70909430da6b537ac34da
