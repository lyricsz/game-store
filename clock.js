const clock =  document.getElementById("time");

function updateClock(){
    const date = new Date();
    clock.innerHTML = date;
    console.log(date.getSeconds())
    clock.setAttribute("style", `filter: brightness(${date.getSeconds() / 60})`);
    requestAnimationFrame(updateClock);
}

requestAnimationFrame(updateClock);