let colors = ['red', 'green', 'blue', 'orange', 'yellow',"white","black","violet","gray","brown"];
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
   
	let randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.background=randomColor;
    console.count(randomColor);
});
	
