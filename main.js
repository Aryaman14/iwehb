canvas=document.getElementById("can");
ctx=canvas.getContext("2d");
color="green";
width=3;
var lastx,lasty;
var width= screen.width;
new_width= screen.width-70;
new_height= screen.height-300;
if(width<992)
{
    document.getElementById("can").width=new_width
    document.getElementById("can").height=new_height
}
canvas.addEventListener("touchstart",ts);
function ts(e)
{
    color=document.getElementById("t").value;
    width=document.getElementById("r").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",tm);
function tm(e)
{
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    lastx=current_x;
    lasty=current_y;
}