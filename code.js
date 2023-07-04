var cor = '';
var tamanho = 30;
var narizImg;
var bigImg;
var gatImg;
var tamanhob = 70;
var tamanhog = 70;

function preload(){
    narizImg = loadImage("n.png")
    bigImg = loadImage("b.png")
    gatImg = loadImage("R.png")
}
function setup(){
    canvas = createCanvas(500, 400)
    canvas.position(windowWidth/2-width/2,300)
    video = createCapture(VIDEO)
    video.hide()
    video.size(500,400)

    sas = ml5.poseNet(video, modelReady)
    sas.on("pose", gotPose)
    imageMode(CENTER);
}
var narizX = 0 ;
var narizY = 0 ; 
var bigX = 0 ;
var bigY = 0 ;
var gatX = 0 ;
var gatY = 0 ;  

function gotPose(result){
    if(result.length > 0){
        console.log(result)
        narizX = result[0].pose.nose.x;
        narizY = result[0].pose.nose.y;
        bigX = result[0].pose.nose.x;
        bigY = result[0].pose.nose.y;
        gatX = result[0].pose.leftShoulder.x;
        gatY = result[0].pose.leftShoulder.y;
    }
}
function modelReady(){
    console.log("Sas está pronto! :D")
}
function draw(){
    background("lightgreen")
    tint(cor)
    image(video,width/2,height/2,500,400)
    fill("blue")
    ellipse(10, 10, 20, 20)
    fill("green")
    ellipse(490, 390 ,20, 20)
    fill("lightblue")
    ellipse(490,10, 20,20 )
    fill("lightgreen")
    ellipse(10,390,20,20)
    image(bigImg, bigX , bigY+20, tamanhob,tamanhob)
    image(narizImg, narizX , narizY, tamanho,tamanho)
    image(gatImg, gatX , gatY-20, tamanhog,tamanhog)
   
    
   
}
function filtrar(){
    cor = document.getElementById("cor").value

}
 function apply(){
    tamanho = document.getElementById("size").value;
   
 }
function tirarFoto(){
 save("eu.png")
}
function appl(){
    tamanhob = document.getElementById("sise").value
}

