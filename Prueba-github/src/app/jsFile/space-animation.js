var canvas= null;

export function setAnimation(){
    canvas= document.getElementById("space");
    let ctx= canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,75);
    ctx.lineTo(400,75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(150,0);
    ctx.lineTo(150,200);
    ctx.stroke();
}

export function setCircle(centerX,centerY,radius,color){
    let ctx= canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(centerX,centerY,radius,0,2*Math.PI,false);
    ctx.fillStyle=color;
    ctx.fill();
    ctx.lineWidth=1;
    ctx.strokeStyle='#003300';
    ctx.stroke();
}