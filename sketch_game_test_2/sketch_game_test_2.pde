Player aPlayer;
Coin aCoin;
Hazard aHaz;
Hazard[] hazards = new Hazard[1];

void setup(){
  size(600,600);
  frameRate(60);
  aCoin= new Coin();
  aPlayer = new Player();
  aHaz = new Hazard();
  hazards[0] = aHaz;
}

int count = 0;


void draw(){
  background(150);
  fill(0);
  textSize(32);
  text("Points = " + count, 10, 30);
   
  aPlayer.display();
  for (int index = 0; index < hazards.length; index++){
    hazards[index].display();
  }
  aCoin.display();
  
  if (collisionCoin() == true){
    count++;
    aCoin.reset();
  }
  
  //TRIED TO ADD MORE BALLS WHEN YOU HAVE MORE COINS BUT FAILED
  //if (count >= 5){
  //  if (count == 5){
  //    Hazard anotherHaz = new Hazard();
  //  }
  //  anotherHaz.display();
  //  //hazards = append(hazards, secHaz);
  //  //Hazard[] hazs = new Hazard[2];
  //  //hazs[0] = aHaz;
  //  //hazs[1] = secHaz;
  //}
  
  //Game over 
  for (int i = 0; i < hazards.length; i++){
    if (collision(hazards[i]) == true){
      while (restart() == false){ 
        text("You Lose. You had " + count + "points", 300, 300);
        text("Press enter to restart",500,500);
      }
    }
  }
      
    
  
  //restart game on collision
  //if (collision() == true){
  //  x=300;
  //  y=300;  
  //  hazX = 30;
  //  hazY = 100;
  //  xVel = random(.1,5);
  //  yVel = random(.1,5);
  //}
  
}

boolean restart(){
  return false;
}

boolean collision(Hazard haz){
  if (dist(aPlayer.getx(),aPlayer.gety(),haz.getx(),haz.gety()) <= 18){ //18 is the combined radius of both of the objects
    println("hit");
    return true;
  }
  else {return false;}
}

boolean collisionCoin(){
  if (dist(aPlayer.getx(),aPlayer.gety(),aCoin.getx(),aCoin.gety()) <= 13){ //13 is the combined radius of both of the objects
    return true;
  }
  else {return false;}
}

//controls
void keyPressed(){
  if (keyCode == UP){
    aPlayer.moveUp();
  }
  else if (keyCode == DOWN){
  aPlayer.moveDown();
  }
  else if (keyCode == LEFT){
    aPlayer.moveLeft();
  }
  else if (keyCode == RIGHT){
    aPlayer.moveRight();
  }
}

void keyReleased(){
  aPlayer.speedReset();
}

class Player{
  int Posx = 300;
  int Posy = 300;
  int Velx = 0;
  int Vely = 0;
  void speedReset(){
    Velx = 0;
    Vely = 0;
  }
  void moveRight(){
    Velx = 3;
  }
  void moveLeft(){
    Velx = -3;
  }
  void moveUp(){
    Vely = -3;
  }
  void moveDown(){
    Vely = 3;
  }
  float getx(){
    return Posx;
  }
  float gety(){
    return Posy;
  }
  void display(){
    Posx += Velx;
    Posy += Vely;
    if (Posx <= 0 || Posx >= width){
      Posx -= Velx;
    }
    if (Posy <= 0 || Posy >= height){
      Posy -= Vely;
    }
    fill(250,250,250);
    ellipse(Posx,Posy,20,20);
  }
}

class Coin{
  float coinX = random(10,590);
  float coinY = random(10,590);
  void reset(){
    coinX = random(10,590);
    coinY = random(10,590);
  }
  float getx(){
    return coinX;
  }
  float gety(){
    return coinY;
  }
  void display(){
    fill(250,250,0);
    ellipse(coinX,coinY, 10,10);
  }
}

class Hazard{
  int hazX = 30;
  int hazY = 100;
  float xVel = random(1,5);
  float yVel = random(1,5);
  float getx(){
    return hazX;
  }
  float gety(){
    return hazY;
  }
  void display(){
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
  }
}