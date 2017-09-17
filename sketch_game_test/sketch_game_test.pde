void setup(){
  size(600,600);
  frameRate(60);
  //Coin aCoin= new Coin();
  
  println("Points = 0");
}
int count = 0;
int x = 300;
int y = 300;

int hazX = 30;
int hazY = 100;
float xVel = random(1,5);
float yVel = random(1,5);

float XCoin = random(0,600);
float YCoin = random(0,600);

void draw(){
  background(150);
  //player
  fill(250,250,250);
  ellipse(x,y,20,20);
  
 
  
  //hazard
  fill(0,0,0);
  ellipse(hazX,hazY,15,15);
  hazX += xVel;
  hazY += yVel;
  if (hazX >= width || hazX <= 0) {
    xVel *= -1;
  }
  if (hazY >= height || hazY <= 0) {
    yVel *= -1;
  }
  

  
  //restart game on collision
  if (collision() == true){
    x=300;
    y=300;  
    hazX = 30;
    hazY = 100;
    xVel = random(.1,5);
    yVel = random(.1,5);
  }
  
  //coin
  fill(250,250,0);
  ellipse(XCoin, YCoin, 10,10);
  if (collisionCoin() == true){
    count++;
    println("Points = "+count);
    XCoin = random(0,600);
    XCoin = random(0,600);
  }
}

boolean collision(){
  if (dist(x,y,hazX,hazY) <= 35){ //35 is the combined radius of both of the objects
    return true;
  }
  else {return false;}
}

boolean collisionCoin(){
  if (dist(x,y,XCoin,YCoin) <= 25){ //35 is the combined radius of both of the objects
    return true;
  }
  else {return false;}
}

//controls
void keyPressed(){
  if (keyCode == UP){
    y-=5;
  }
  else if (keyCode == DOWN){
    y+=5;
  }
  else if (keyCode == LEFT){
    x-=5;
  }
  else if (keyCode == RIGHT){
    x+=5;
  }
}


class Player{
  int Posx = 300;
  int Posy = 300;
  Player(){
    ellipse(Posx,Posy,20,20);
  }
}

class Coin{
  float coinX = random(0,600);
  float coinY = random(0,600);
  Coin(){
    ellipse(coinX,coinY, 10,10);
  }
}