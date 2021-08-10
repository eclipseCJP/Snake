let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); /* criar a imagem*/
let box=32;

function criarBG(){ /*desenha a imagem*/ 
    context.fillStyle ="lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);/* desenha o retangulo*/
}

criarBG();