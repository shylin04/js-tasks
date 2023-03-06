 // define a 10 different colors in colors array// 
let colors = ['red', 'green', 'blue', 'orange', 'yellow',"white","black","violet","gray","brown"];

  //when a button is clicked function inside eventlistener execute//
btn.addEventListener("click",function(){
   
	let randomColor=colors[Math.floor(Math.random()*colors.length)];  // apply a random color in the background from the colors array //
    document.body.style.background=randomColor;
    console.count(randomColor);
});
	

