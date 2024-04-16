const btn = document.querySelector(".btn");
let hex = document.querySelector(".hexcode");
function RandomColor() {
    let colorcode = "0123456789ABCDEF";
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += colorcode[Math.floor(Math.random() * 16)];
    }
    return color;
}
btn.addEventListener('click',() => {
    document.body.style.backgroundColor = RandomColor();
    hex.innerHTML = RandomColor();
})