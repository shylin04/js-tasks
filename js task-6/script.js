<<<<<<< HEAD
let colors = ['red', 'green', 'blue', 'orange', 'yellow',"yellowgreen","pink","violet","gray","brown"];
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
   
	let randomColor=colors[Math.floor(Math.random()*colors.length)]; /* generate random color*/
    document.body.style.background=randomColor; /*apply randomColor to body background*/
    console.count(randomColor); /*count number of times that each color change*/
});
	
=======
let colors = ['red', 'green', 'blue', 'orange', 'yellow',"white","black","violet","gray","brown"];
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
   
	let randomColor=colors[Math.floor(Math.random()*colors.length)];
    document.body.style.background=randomColor;
    console.count(randomColor);
});
	
>>>>>>> 747c7cadbaa8a604a3c70909430da6b537ac34da
