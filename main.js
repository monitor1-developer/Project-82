canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;
canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
} 

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e) {
    mouseEvent = "my_mouseLeave";
}

canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e) {
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2 * Math.PI);
        console.log("last position of X and Y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        console.log("current position of X and Y coordinates = ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

function cleararea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}