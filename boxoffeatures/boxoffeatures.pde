void setup(){
  size(600,600);
  //background(200);
}

void draw(){
  clear();
  if(mouseX > .75*width){
    fill(250,0,0);
    rect(.75*width,0,.25*width,height);
  }
  if(mouseX > .5*width && mouseX < .75*width){
    fill(250,250,250);
    rect(.5*width,0, .25*width, height);
  }
  if (mouseX == .75*width){
    background(250,250,0);
  }
  if (mouseX < .5*width && mouseY < 400){
    fill(0,0,250);
    rect(0,0,.5*width,400);
  }
  if (mouseX < .5*width && mouseY > 400 && mousePressed){
    fill(0,128,128);
    rect(0,400,.5*width,200);
  }
}