const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const picker = document.getElementById("colorpicker");
const clearit = document.getElementById("clear");
const download = document.getElementById("download");

//define
let x = undefined;
let y = undefined;
let color = "black";
let isPressed = false;
let size = 30;


//eventlistners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);


function startDrawing(e) {
      isPressed = true;
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    }

function draw(e) {
      if (!isPressed)
       return;

      ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
      ctx.stroke();
    }

function stopDrawing() {
      isPressed = false;
    }
//clear all
clearit.addEventListener("click", () =>{
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    });


//download feature
download.addEventListener("click", () => {

        let ogfillstyle = ctx.fillStyle;
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, canvas.clientWidth , canvas.clientHeight);

        ctx.fillStyle = ogfillstyle;

        let path = canvas.toDataURL("Image/png");

        var link  = document.createElement("a");
        link.href = path;
        link.download = "plot.png";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
    });