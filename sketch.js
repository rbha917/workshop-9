let webcam;
let scale = 18;
let balls = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width / scale, height / scale); 
  webcam.hide();

  for(c = 0; c < 1000; c ++){ 
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(4, 30)
    balls[c] = new Ball(rx, ry, rr);
  }  
}

class Ball {
	constructor(x, y, r){ 
		this.x = x;
		this.y = y;
		this.r = r;
	} 
	
	move(){
	this.x = this.x + random(-4, 4);
	this.y = this.y + random(-4, 4);		
	}

	show(){
		let pX = this.x / scale;
		let pY = this.y / scale;
		let pixelColour = webcam.get(pX, pY);
		fill(pixelColour[0], pixelColour[1], pixelColour[2]);
		noStroke();
		ellipse(this.x, this.y, 30, 30);
	}

	edges(){ 
		if (this.x < 15){
			this.x = 15;
		} else if(this.x > width - 15){
			this.x = width - 15;
		}
		if (this.y < 15){
			this.y = 15;
		} else if(this.y > height - 15){
			this.y = height - 15;
		}
	}
}

function draw() {
  background(0);
  image(webcam, 400, 0, 700, 700);
  filter(POSTERIZE, 5);

  for(x = 0; x < balls.length; x++){
    balls[x].move();
    balls[x].show();
    balls[x].edges();
  }
}

