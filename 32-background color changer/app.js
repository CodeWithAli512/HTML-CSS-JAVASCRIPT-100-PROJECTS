function backgroundcolorchanger() {
    let var1 = Math.floor(0 + Math.random() * (255 - 0));
    let var2 = Math.floor(0 + Math.random() * (255 - 0));
    let var3 = Math.floor(0 + Math.random() * (255 - 0));
    document.body.style.backgroundColor = `rgb(${var1}, ${var2}, ${var3})`;
}

const button = document.getElementById("btn");

button.addEventListener("click",() => {
  backgroundcolorchanger();
}
)


// another mathod

// const button = document.getElementById("btn");
// const color = ["red", "blue", "yellow", "green", "pink", "purple"];

// function backgroundColor(){
//     let colorIndex = parseInt(Math.random() * color.length) 
//     document.body.style.backgroundColor = color[colorIndex];
// }

// button.addEventListener("click",() => {
//   backgroundColor()
// }
// )