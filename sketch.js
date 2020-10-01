var wall, thickness;
var bullet, speed, weight;

function setup() {
 createCanvas(1600,400);

 //bullet.velocityX = speed;

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

wall = createSprite(1200,200,thickness, height/2);
wall.shapeColor = color(80,80,80);
wall.debug = true;
  
bullet = createSprite(50,200,50,50);
bullet.shapeColor = color(80,80,80);
bullet.debug = true;
bullet.velocityX = speed;

}

function draw() {
  background(250,250,250); 

  if(bullet.isTouching(wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage>10)
    {
     wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
     wall.shapeColor = color(0,255,0);
    }
  
  }
 
 /* if(hasCollided(bullet , wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if(damage>10)
    {
     wall.shapeColor = color(255,0,0);
    }
    if(damage<10)
    {
     wall.shapeColor = color(0,255,0);
    }
  }*/

  drawSprites();
}
/*function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.X +bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge)
  {
    return true;
  }
  return false;
}*/
