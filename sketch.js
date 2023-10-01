//God of Time!!

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  randomSeed(99);
  background(0);
  
  //draw stars (seconds)
  let numberOfStars = second(); // get the current second
  
  for(let i = 0; i < numberOfStars; i++) { // let the code re
    let x = random(width); // get random positions within the canvas
    let y = random(height); 
    fill(255);
    noStroke();
    ellipse(x, y, 4, 4); //draw the star and its sense if glow
    fill(255,255,255,10);
    ellipse(x, y, 15, 15);
    ellipse(x, y, 30, 30);
    ellipse(x, y, 50, 50);
  }
 
  //draw hourEyes (hours)
 
  translate (0.5*windowWidth, 0.5*windowHeight);
  let currentHour = hour(); // access hour
  
  let numberOfEyes = currentHour; //set the number of eyes that I wanted draw to equal to the current hour
  if (currentHour > 12) { //I am afraid that some computer may use a 12 hour time and some might be 24 hours, so I set some rules to make them all 12 hours
    numberOfEyes = currentHour - 12;
  } else if (currentHour ==0) {
    numberOfEyes = 12;
  }
  
  for (let i = 0; i < numberOfEyes; i++) {
    let rotateAngleDegrees = 30*i; // 360/12=30,turn 30degree every hour
    rotate(radians(rotateAngleDegrees)); //rotate the eyes using (0,0) as the center point
  fill(255); //draw eyes
  strokeWeight(0);
  ellipse(0, -373, 30, 90);
  fill(214, 163, 24);
  ellipse(0, -373, 30, 30);
  fill(0);
  ellipse(0, -373, 10, 10);
  rotate(radians(-rotateAngleDegrees));
  }

  //draw sand clock (minutes)
  fill(255,255,255);//draw the back of the sand clock first
  triangle(-81,-171,81,-171,0,0);
  fill(97, 71, 145);
  triangle(-81,171,81,171,0,0);
  fill (97, 71, 145);
  let currentMinute = minute(); //read the minute from computer
  let h = 171/60*(60-currentMinute); //the sand clock's upper part is full at 0 minutes and will be empty at 60 second
  triangle(0.476*h,-h,-0.476*h,-h,0,0); //draw the have-sand part of the upper part and the empty part of the bottom part
  fill (255,255,255); 
  triangle(0.476*h,h,-0.476*h,h,0,0);
  fill(143, 108, 39);//draw the upper and downer block of the sand clock
  ellipse(0, -189, 36, 30);
  ellipse(0, 189, 36, 30);
  fill(214, 163, 24);
  rect(-100, -189, 200, 18, 20);
  rect(-100, 171, 200, 18, 20);
}