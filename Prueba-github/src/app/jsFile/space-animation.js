var canvas= null;

export function setAnimation(){
    canvas= document.getElementById("space");
    let ctx= canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(300,150);
    ctx.stroke();
    console.log('hola canvas');
}