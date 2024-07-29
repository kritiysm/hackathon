
document.addEventListener("click", ()=>{
    document.body.style.backgroundColor = randomcolor();
})

function randomcolor() {
    const color = ["Pink", "Yellow", "Orange", "Green"]
    return color [Math.floor(Math.random ()* color.length)];
    
}