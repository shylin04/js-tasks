let previousClicked =[]; // define a previousClicked  to add the clicked button//
 
document.querySelectorAll('.box').forEach(function (box){
  box.addEventListener('click', function(){
 
    // if there is no previously clicked button//  
    if(previousClicked.length===0){ 
        alert(this.innerHTML); // give alert messege of currently clicked button content  //
         previousClicked.push(this.innerHTML); // push the clicked button to the previousClicked //
     
        // if there is previously clicked button alert previosly clicked button and currently clicked button content//
        }else{
         alert(previousClicked + ',' +this.innerHTML);  
         previousClicked.push(this.innerHTML);
}
});
});
