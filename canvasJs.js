var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//画一个黑色矩形
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 1200, 550);
//按下标记
var onoff = false;
var oldx = 0;
var oldy = 0;
//设置颜色
var lineColor = "white";
//设置线宽
var lineW = 1;
//添加鼠标移动事件
canvas.addEventListener("mousemove", draw, true);
//添加鼠标按下事件
canvas.addEventListener("mousedown", down, false);
//添加鼠标弹起事件
canvas.addEventListener("mouseup", up, false);

function down(event) {
    onoff = true;
    oldx = event.pageX;
    oldy = event.pageY;
}

function up(event) {
    onoff = false;
}

function draw(event) {
    if (onoff == true) {
        var newx = event.pageX;
        var newy = event.pageY;

        ctx.beginPath();
        ctx.moveTo(oldx, oldy);
        ctx.lineTo(newx, newy);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineW;
        ctx.lineCap = "round";
        ctx.stroke();

        oldx = newx;
        oldy = newy;
    }
}

function changecolor(id) {
    switch (id) {
        case 1:
            lineColor = "white";
            break;
        case 2:
            lineColor = "red";
            break;
        case 3:
            lineColor = "orange";
            break;
        case 4:
            lineColor = "yellow";
            break;
        case 5:
            lineColor = "green";
            break;
        case 6:
            lineColor = "blue";
            break;
        case 7:
            lineColor = "cyan";
            break;
        case 8:
            lineColor = "purple";
            break;
        case 9:
            lineColor = "gray";
            break;
        case 10:
            lineColor = "black";
            break;
    }
}

function changeW(value) {
    lineW = value;
}

function clearCavas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 1200, 550);
    alert("画板已清除");
}
