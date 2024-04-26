# workshop-9

### Link to sketch: https://rbha917.github.io/workshop-9/ 

## Live Video Capture
- let webcam;
- under setup
- pixelDensity(1);
- createCapture(VIDEO);
- webcam = createCapture(VIDEO);
- webcam.size(x, y); 
- webcam.hide(); //will not display on browser//
- under draw
image(webcam, x, y);
- can use filters and tints like images
- can incorporate objects from the simulation workshop
- change the ball functions to take colours from the live video
- show(){
		let pixelColour = webcam.get(this.x, this.y);
		fill(pixelColour[0], pixelColour[1], pixelColour[2]);
		noStroke();
		ellipse(this.x, this.y, 30, 30);
	}
- modify code to only include the simulation, take out the image and any filters or tints
### Modifications to allow this to run better on most devices
- let scale = 18
- change webcam.size(width / scale, height / scale);
- show(){
		let pX = this.x / scale;
		let pY = this.y / scale;
		let pixelColour = webcam.get(pX, pY);
		fill(pixelColour[0], pixelColour[1], pixelColour[2]);
		noStroke();
		ellipse(this.x, this.y, 30, 30);
	}
### If you wanted to make the image somewhat clearer
for(c = 0; c < 200; c ++){ //number is amount of the object//
	let rx = random(15, width - 15);
	let ry = random(15, height - 15);
	let rr = random(4, 30)
	ballSystem[c] = new Ball(rx, ry, rr);
}
- changing transparency by adding in a 4th value
fill(pixelColour[0], pixelColour[1], pixelColour[2], 120);
- play around more with numbers and shapes
