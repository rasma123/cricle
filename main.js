var Mouseevent="empty";
var last_position_x,last_position_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("colour").value;
    radius=document.getElementById("radius").value;
   widthofline=document.getElementById("width").value;
 Mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
 Mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
 Mouseevent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    currentx=e.clientX - canvas.offsetLeft;
    currenty=e.clientY - canvas.offsetTop;
    if(Mouseevent=="mouseDown"){
ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthofline;
ctx.arc(currentx,currenty,radius,0,2*Math.PI);
ctx.stroke();



    
}
last_position_x = currentx;
last_position_y = currenty;
}
