var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){

 pathImg = loadImage("path.png");


 
}

function setup(){
  
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  path = createSprite(200,200)

  path.addImage(pathImg);

  path.velocityY = 4

  boy = createSprite(180,340,30,30)

  boy.addAnimation ("correndo",boyImg);

  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
//defina visibilidade como falsa para o limite à direita

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  boy.x = World.mouseX;
}
