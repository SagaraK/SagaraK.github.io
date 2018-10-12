var y = 100;

function setup() {

	createCanvas(600, 500)


}

function draw() {
	// set background color in grayscale:
	background(150); //trail

 y -= 1;
 if (y <= 0) {
	 y = height;
 }
 fill(244, mouseX, 75, 50); //last number is opacity
 stroke(255);
 strokeWeight(10);
 rect(50, y, 50, 50);
}
