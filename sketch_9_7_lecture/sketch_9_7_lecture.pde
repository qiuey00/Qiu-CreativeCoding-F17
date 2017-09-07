int aNumber = 200;
//change background color
background(0,0,0);


//sketch size
size(500,400);
//change the color of the thing under it
fill(100,203,200);
ellipse(aNumber,300,100,70);



beginShape();
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(30, 75);
endShape(CLOSE);