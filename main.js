canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color ="gray"

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth= 2;
ctx.rect(200,200,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth= 5;
ctx.arc(300,250,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth= 5;
ctx.arc(350,300,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth= 5;
ctx.arc(400,250,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth= 5;
ctx.arc(450,300,40,0,2*Math.PI);
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth= 5;
ctx.arc(500,250,40,0,2*Math.PI);
ctx.stroke(); 