var canvs=new fabric.Canvas("myCanvas");
//block width and height
var b_w=30;
var b_h=30;
//position
var play_x=10;
var play_y=10;
//object to store player and blocks
var player_obj;
var block_obj;
function player_updater()
{
	fabric.Image.fromURL("player.png",function(Img){
		player_obj=Img;
		player_obj.scaleToWidth(150);
		player_obj.sclaeToHeight(150);
		player_obj.set({
			top:play_x,
			left:play_y
		});
       canvas.add(player_obj);
	})
}
/*function block_updater()
{
	fabric.Image.fromURL("player.png",function(Img){
		player_obj=Img;
		player_obj.scaleToWidth(150);
		player_obj.sclaeToHeight(150);
		player_obj.set({
			top:play_x,
			left:play_y
		});
       canvas.add(player_obj);
	})
}*/
