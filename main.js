var canvas=document.getElementById("mycan1");
var ctx=canvas.getContext("2d");
console.log(ctx);
ctx.fillStyle="white";
ctx.strokeStyle="black";
ctx.beginPath();
ctx.fillRect(197,142,450,300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=4;
ctx.fillStyle="white";
ctx.arc(300,217,40,0,Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.fillStyle="white";
ctx.arc(410,217,40,0,Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.fillStyle="white";
ctx.arc(510,217,40,0,Math.PI*2);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=4;
ctx.arc(360,260,40,0,Math.PI*2);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=4;
ctx.arc(460,260,40,0,Math.PI*2);
ctx.stroke();

