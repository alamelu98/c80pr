var canvas=document.getElementById("canvas1");
var ctx=canvas.getContext("2d");
var color="black";
var line_width=1;
var last_x_pos;
var last_y_pos;
var cur_x_pos;
var cur_y_pos;
var mouseevent="empty";
var radius=10;

canvas.addEventListener("mousedown",moudwn);
function moudwn(e)
{
    color=document.getElementById("clr").value;
    line_width=document.getElementById("lw").value;
    radius=document.getElementById("rd").value;
    mouseevent="mousedown";
}
canvas.addEventListener("mousemove",momove);
function momove(e){
 cur_x_pos=e.clientX-canvas.offsetLeft;
 cur_y_pos=e.clientY-canvas.offsetTop;
 if(mouseevent=="mousedown")
 {
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=line_width;
     console.log("last position of x and last position of y");
     console.log("x="+last_x_pos+"y="+last_y_pos);
     //ctx.moveTo(last_x_pos,last_y_pos);
     console.log("current position of x and current position of y");
     console.log("x="+cur_x_pos+"y="+cur_y_pos);
     ctx.arc(cur_x_pos,cur_y_pos,radius,0,Math.PI*2);
    ctx.stroke();
    

 }
 last_x_pos=cur_x_pos;
    last_y_pos=cur_y_pos;

}
canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseevent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseevent = "mouseleave";
    }
