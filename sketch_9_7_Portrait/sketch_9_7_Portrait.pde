//Jeffrey Qiu
//9/7/17

size(500,700);
background(0,0,0);

//the body
stroke(250,250,250);
beginShape();
vertex(250,200);
vertex(250,250);
vertex(300,250);
vertex(300,700);
vertex(150,700);
vertex(150,200);
endShape(CLOSE);
arc(250, 250, 100, 100, PI+HALF_PI, TWO_PI);

//ellipse(200,100,200,200);
float darkr = random(200,250);
float darkg = random(0,250);
float darkb = random(0,100);
fill(darkr, darkg, darkb);

//head
beginShape();
vertex(250,200);
vertex(290,180);
vertex(294,173);
vertex(314,176);
vertex(312,116);
vertex(342,86);
vertex(352,75);
vertex(355,35);
vertex(325,0);
vertex(200,0);
vertex(175,40);
vertex(150,120);
vertex(170,170);
vertex(230,200);
endShape(CLOSE);


//TRIANGES INSIDE BODY
darkr = random(0,100);
darkb = random(0,250);
darkg = random(180,250);
fill(darkr, darkg, darkb);
float x = random(200,700);
float y = random(350,600);
triangle(300,250, 150,x, 300,y);

darkr = random(0,100);
darkg = random(0,250);
darkb = random(180,250);
fill(darkr, darkg, darkb);
x = random(200,700);
y = random(350,600);
triangle(150,250, 300,x, 150,y);

darkb = random(0,100);
darkg = random(0,250);
darkr = random(180,250);
fill(darkr, darkg, darkb);
x = random(200,700);
y = random(350,600);
triangle(300,680, 150,x, 300,y);

darkr = random(0,100);
darkg = random(0,250);
darkb = random(180,250);
fill(darkr, darkg, darkb);
x = random(200,700);
y = random(350,600);
triangle(150,650, 300,x, 150,y);


//TRIANGLES OUTSIDE THE BODY
darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(380,430),random(0,200),random(430,500),random(0,200),random(380,500),random(200,500));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(380,430),random(150,400),random(430,500),random(250,700),random(430,500),random(150,400));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(380,500),random(150,700),random(430,500),random(250,700),random(380,500),random(150,700));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(380,500),random(150,700),random(430,500),random(250,700),random(380,500),random(150,700));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(0,140),random(150,700),random(0,140),random(250,700),random(0,140),random(150,700));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(0,140),random(150,700),random(0,140),random(250,700),random(0,140),random(150,700));

darkr = random(10,130);
darkg = random(10,130);
darkb = random(10,130);
fill(darkr, darkg, darkb);
triangle(random(0,140),random(0,200),random(0,140),random(0,200),random(0,140),random(200,500));

stroke(0,0,0);
line(270,280,270,700);
fill(random(0,250),random(0,250), random(0,250));
ellipse(280,100,25,25);