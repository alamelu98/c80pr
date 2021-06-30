var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
//Create a reference for canvas 
var car_w=75
var car_h=100
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var x_pos=5
var y_pos=255

//Set initial position for a car image.
var bgimg;
var cimg;
function add() {
	//upload car, and background images on the canvas.
	bgimg=new Image();
	bgimg.onload=uploadBackground;
	bgimg.src=background_image;

	cimg=new Image();
	cimg.onload=uploadgreencar;
	cimg.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bgimg,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
    ctx.drawImage(cimg,x_pos,y_pos,car_w,car_h);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(y_pos>0)
	{
		y_pos=y_pos-10;console.log("x pos is "+x_pos+"y pos is"+y_pos);
		uploadBackground()
		uploadgreencar();
	}

}

function down()
{
	//Define function to move the car downward
	if(y_pos<500)
	{
		y_pos=y_pos+10;console.log("x pos is "+x_pos+"y pos is"+y_pos);
		uploadBackground()
		uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if(x_pos>0)
	{
		x_pos=x_pos-10;console.log("x pos is "+x_pos+"y pos is"+y_pos);
		uploadBackground()
		uploadgreencar();
	}
}

function right()
{
	if(x_pos<800)
	{
		x_pos=x_pos+10;console.log("x pos is "+x_pos+"y pos is"+y_pos);
		uploadBackground()
		uploadgreencar();
	}
	//Define function to move the car right side
}
