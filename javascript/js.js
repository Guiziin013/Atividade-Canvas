const Canva = document.getElementById('Canva');
const ctx = Canva.getContext('2d');

//Codigo do Gradiente Linear
var grd = ctx.createLinearGradient(0, 0, 0, 200);
grd.addColorStop(0, "#7FFFD4");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 300, 200);

//Criação do Círculo
const circle = new Path2D();
circle.arc(28, 28, 25, 0, 2 * Math.PI);
ctx.fillStyle= "yellow";
ctx.fill(circle);

//Código de mudança da cor do Sol
Canva.addEventListener('mousemove', function(event) {

    if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
        ctx.fillStyle = 'orange';

    }
    else {
     ctx.fillStyle = 'yellow';
    }
    ctx.fill(circle);
  });

//Codigo da forma da casa
const quad = new Path2D();
quad.moveTo(100,55);
quad.lineTo(100,120);
quad.lineTo(200,120);
quad.lineTo(200,55);
quad.lineTo(100,55);
ctx.strokeStyle="black"
ctx.fillStyle = "#6A5ACD"
ctx.fillRect(100, 55, 100, 65);
ctx.stroke(quad);

//Codigo da porta da casa
ctx.moveTo(120,80);
ctx.lineTo(120,120);
ctx.lineTo(140,120);
ctx.lineTo(140,80);
ctx.lineTo(120,80);
ctx.strokeStyle="black"
ctx.fillStyle = "#8B4513"
ctx.fillRect(120, 80, 20, 40);
ctx.stroke();

//mesmo codigo, fiz pra contornar as linhas da porta
ctx.moveTo(120,80);
ctx.lineTo(120,120);
ctx.lineTo(140,120);
ctx.lineTo(140,80);
ctx.lineTo(120,80);
ctx.strokeStyle="black"
ctx.stroke();

//Codigo do telhado
ctx.moveTo(100,55);
ctx.lineTo(150,10);
ctx.lineTo(200,55);
ctx.strokeStyle="black"
ctx.stroke();

//Codigo do contorno da Janela
ctx.moveTo(160,80);
ctx.lineTo(160,100);
ctx.lineTo(180,100);
ctx.lineTo(180,80);
ctx.lineTo(160,80);
ctx.strokeStyle="black"
ctx.fillStyle = "#ADD8E6"
ctx.fillRect(160, 80, 20, 20);
ctx.stroke();

//Codigo da Cruz da Janela
ctx.moveTo(170,80);
ctx.lineTo(170,100);
ctx.lineTo(170,90);
ctx.lineTo(180,90);
ctx.lineTo(160,90);
ctx.strokeStyle="black"
ctx.stroke();

//Contorno da Janela
ctx.moveTo(170,80);
ctx.lineTo(170,100);
ctx.lineTo(170,90);
ctx.lineTo(180,90);
ctx.lineTo(160,90);
ctx.strokeStyle="black"
ctx.stroke();

//Codigo do Telhado
ctx.beginPath();
ctx.moveTo(100,55);
ctx.lineTo(150,10);
ctx.lineTo(200,55);
ctx.lineTo(100,55);
ctx.fillStyle = "#D2B48C"
ctx.fill();

//Codigo da Grama
ctx.moveTo(0,120);
ctx.lineTo(0,200);
ctx.lineTo(300,200);
ctx.lineTo(300,120);
ctx.lineTo(0,120);
ctx.strokeStyle="black"
ctx.fillStyle = "green"
ctx.fillRect(0, 120, 300, 80);
ctx.stroke();

//Texto Casinha 
ctx.font = "12px Arial";
ctx.strokeText("Casinha", 250, 10);

//Codigo do "Sorriso" - Curva
ctx.beginPath();
ctx.moveTo(255, 15);
ctx.quadraticCurveTo(275, 30, 290, 15);
ctx.stroke();

