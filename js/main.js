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




function criarCobra(){
    var cabeca = new Image();
    cabeca.src = 'img/cabeca.png';
    var cabeca_cobra = context.createPattern(cabeca, 'repeat');
    for(i = 0 ; i < cobra.length ; i++){
        context.fillStyle = "green";
        if(i == 0){
            context.fillStyle = cabeca_cobra;
        }
        context.fillRect(cobra[i].x, cobra[i].y , box, box);
    }
}


function drawfood(){
    var img = new Image();
    img.src = 'img/maca.png';
    var fruta = context.createPattern(img, 'repeat');
    context.fillStyle = fruta;
    context.fillRect(food.x, food.y, box , box)

}

document.addEventListener('keydown', update);

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
        cobra[0].x = 15 * box;
    }
    if(cobra[0].y > 15 * box && direcao == "down"){
        cobra[0].y = 0;
    }
    if(cobra[0].y < 0 && direcao == "up"){
        cobra [0].y = 15 * box;
    }

    criarBG(); 
    drawfood();
    criarCobra();
 

    let cobraX = cobra[0].x;
    let cobraY = cobra[0].y;

    if(direcao == "right"){
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
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(newhead);     
}

let jogo = setInterval(iniciarJogo, 100);