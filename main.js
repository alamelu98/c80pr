var canvas=document.getElementById("can1");
var ctx=canvas.getContext("2d");
//width and height
var c1_w=120;
var c1_h=70;
var c2_w=120;
var c2_h=70;
//images of cars
var c1_img="https://i.postimg.cc/YqdnnNX1/car1.png";
var c2_img="https://i.postimg.cc/YqdnnNX1/car1.png";
//bg image of canvas
var bg_img="https://image.shutterstock.com/image-vector/vector-illustration-racing-cars-go-260nw-1042498327.jpg"
//pos
var c1_x=10
var c1_y=10
var c2_x=10
var c2_y=100
//function add
function add()
{
    var c1img=new Image();
    c1img.onload=c1im();
    c1img.src=c1_img;

    var c2img=new Image();
    c2img.onload=c2im();
    c2img.src=c2_img;

    var bgimg=new Image();
    bgimg.onload=bgim();
    bgimg.src=bg_img;

 function c1im()
 {
     ctx.drawImage(c1img,c1_x,c1_y,c1_w,c1_h)
 }

 function c2im()
 {
     ctx.drawImage(c2img,c2_x,c2_y,c2_w,c2_h)
 }

 function bgim()
 {
     ctx.drawImage(bgimg,10,10,canvas.width,canvas.height)
 }
}
window.addEventListener("keydown",downkey)
function downkey(e)
{
    var keyno=e.keyCode;
    console.log(keyno);
    if(keyno=="38")
    {
        up();
        console.log("up");
    }
    if(keyno=="39")
    {
        right();
        console.log("right");
    }
    if(keyno=="40")
    {
        down();
        console.log("down");
    }
    if(keyno=="37")
    {
        left();
        console.log("left");
    }
}
function up()
{

}
function down()
{
    
}

function left()
{
    
}

function right()
{
    
}
