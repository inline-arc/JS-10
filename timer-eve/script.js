const daysEL = document.getElementById("days");
const houreEl = document.getElementById("hours");
const minEl = document.getElementById("mins");
const secEl = document.getElementById("secs");
const newyear = "1 jan 2023"

function time(){
    const today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    let secs = today.getSeconds();
    
    houreEl.innerHTML = hours;
    minEl.innerHTML = min;
    secEl.innerHTML = secs; 

    setTimeout(time, 100)
}

function checktime() {
    if(i < 10) {i = "0" + i};
    return i;
}