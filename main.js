
var canvas = new fabric.Canvas('myCanvas1');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('razz.jpg', function(Img) {
	block_image_object = Img;
		
	block_image_object.scaleToWidth(700);
	block_image_object.scaleToHeight(510);
	block_image_object.set({
	top:0,
	left:0
	});
	canvas.add(block_image_object);
	});


	

	fabric.Image.fromURL('aayat.jpg', function(Img1) {
		block_image_object = Img1;
			
		block_image_object.scaleToWidth(700);
		block_image_object.scaleToHeight(510);
		block_image_object.set({
		top:0,
		left:300
		});
		canvas.add(block_image_object);
		});
		
	
}


function playSound(){
	x.play();
}