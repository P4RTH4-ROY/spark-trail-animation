const bE1 = document.querySelector("body");

bE1.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const se1 = document.createElement("span");
    se1.style.left = xPos + "px";
    se1.style.top = yPos + "px";
    const size = Math.random()*100;
    se1.style.width = size + "px";
    se1.style.height = size + "px";
    bE1.appendChild(se1);
    setTimeout(()=>{
        se1.remove();
    },3000);
});