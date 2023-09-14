function setup() {
  createCanvas(500, 500);
  frameRate(1)
}

function draw(){
    background(0);
  //yellow rectangle in the bottom of the background
  fill(200,200,0);
  stroke(0);
  strokeWeight(1);
  rectMode(CENTER);
  ellipseMode(CENTER);
  rect(250,425,500,200);
  //repetitive white ellipse in black background
  noFill();
  strokeWeight(0.7);
  stroke(300,300,300);
  let i = 0;
  while (i<500){
    ellipse(i,10,15,20);
    ellipse(i,30,15,20);
    ellipse(i,50,15,20);
    ellipse(i,70,15,20);
    ellipse(i,90,15,20);
    ellipse(i,110,15,20);
    ellipse(i,130,15,20);
    ellipse(i,150,15,20);
    ellipse(i,170,15,20);
    ellipse(i,190,15,20);
    ellipse(i,210,15,20);
    ellipse(i,230,15,20);
    ellipse(i,250,15,20);
    ellipse(i,270,15,20);
    ellipse(i,290,15,20);
    ellipse(i,310,15,20);
    ellipse(i,330,15,20);
    i=i+15;   
         }
  //black square on yellow part of the background
  stroke(0);
  strokeWeight(1)
  let a = 0;
  while ( a <500){
    line(a,325,a,500);
    a = a+20;
  }
  let b = 325;
  while ( b <500){
    line(0,b,500,b);
    b = b+20;
  }
  //water melon base
  angleMode(DEGREES);
  noStroke();
  fill(235,30,30);
  arc(250,180,340,380,355,175);
  
  fill(255,245,245);
  arc(250,180,300,340,355,175);
  fill(150,10,10);
    arc(252,320,220,100,360,180);
   fill(15,250,255);
  triangle(360,460,450,410,410,395);
    arc(252,320,180,60,360,180);
  stroke(235,50,50);
  strokeWeight(8);
  let d = 0
  while (d < 30){
    point(random(140,390),random(175,330));
    d = d +1;
  }
  
  stroke(0,0,0);
  strokeWeight(12);
  let c = 0
  while(c<10){
    point(random(150,310),random(175,250));
 c = c + 1;
  }
  stroke(200,70,70);
  strokeWeight(9);
  line(35,450,115,450);
  line(80,435,80,465);
  line(80,435,110,435);
  line(80,465,110,465);
  line(300,450,360,390);
  line(350,420,372,400);
  line(350,420,320,400);
  line(320,400,350,380);
  stroke(0);
  strokeWeight(10);
  line(430,400,460,378);
  point(385,440);
  point(400,425);
  point(430,410);
  line(185,450,220,390);
  line(55,380,140,400);
  line(50,395,80,405);
  line(50,360,80,370);
  line(80,370,80,405);
  strokeWeight(40);
  point(185,450);
}

