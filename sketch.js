let musica;
let imagem;

function setup() {
  createCanvas(1000, 800);
  palavra = empada();
  musica.loop();
}
function preload(){
  imagem =loadImage("b.jpg")
  musica = loadSound("i.mp3")

  
}

function draw() {
  background("#F1437E");
  image(imagem,0,0,1000,800)
  batata();
  coxinha();
  empada();
}

function batata(){
  let minimo = 0;
  let maximo =  width;
  let palavra = "victor <3";
  let seguir = map(mouseX, 0, width, 1, palavra.length)
  let inicio = palavra.substring(0,seguir);
  text(inicio,500,400)
  
  
} 

function coxinha(){
   fill ("lightblue")
  textSize(70);
  textAlign(CENTER,CENTER);
}
 function empada(){
  let palavras = ["hambúrguer", "batata", "celular", "love"];
  return random(palavras);
}

