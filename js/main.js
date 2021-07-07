let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let cobra = [];


cobra[0]={
    x: 8* box,
    y: 8 * box
}

let direcao = "right";

let food = {
    x: Math.floor(Math.random() * 15 +1) * box,
    y: Math.floor(Math.random() * 15 +1) * box,

}

function criarBG(){
    context.fillStyle = "gray";
    context.fillRect(0, 0, 16 * box, 16 * box);

}

var cabeca = new Image();
cabeca.src = 'img/cabeca.png';

function criarCobra(){

    cabeca = context.createPattern(cabeca, 'repeat');
    context.fillStyle = cabeca;
    context.fillRect(cobra[0].x, cobra[0].y , box, box);

    for(i = 1 ; i < cobra.length ; i++){
        context.fillStyle = "green";
        context.fillRect(cobra[i].x, cobra[i].y , box, box);
    }
}

var img = new Image();
img.src = 'img/maca.png';

function drawfood(){
    fruta = context.createPattern(img, 'repeat');
    context.fillStyle = fruta;
    context.fillRect(food.x, food.y, box , box)

}


function update (event){

    
    if(event.keyCode == 37 && direcao != "right"){
        direcao = "left";
    }
    if(event.keyCode == 38 && direcao != "down"){
        direcao = "up";
    }
    if(event.keyCode == 39 && direcao != "left"){
        direcao = "right";
    }
    if(event.keyCode == 40 && direcao != "up"){
        direcao = "down";
    }


}

function iniciarJogo(){

    if(cobra[0].x > 15 * box && direcao == "right"){
        cobra[0].x = 0;
    }
    if(cobra[0].x < 0 && direcao == "left"){
        cobra[0].x = 16 * box;
    }
    if(cobra[0].y > 15 * box && direcao == "down"){
        cobra[0].y = 0;
    }
    if(cobra[0].y < 0 && direcao == "up"){
        cobra [0].y = 16 * box;
    }

    criarBG();
    criarCobra(); 
    drawfood();
 

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao =="right"){
        cobraX += box;
    }
    if(direcao =="left"){
        cobraX -= box;
    }
    if(direcao =="up"){
        cobraY -= box;
    }
    if(direcao =="down"){
        cobraY += box;
    }

    
    if(cobraX != food.x || cobraY != food.y){
       cobra.pop(); 
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newhead = {
        x:cobrax,
        Y:cobray
    }
    cobra.unshift(newhead);
    
}

let jogo = setInterval(iniciarJogo, 100);

