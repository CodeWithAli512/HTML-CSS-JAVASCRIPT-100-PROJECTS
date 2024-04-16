const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",function(event){
    moveCursor(event.pageX, event.pageY)
    // console.log("pagex", event.pageX)
    // console.log("pagey", event.pagey)
})
const moveCursor = function(pagex, pagey){
    cursor.style.left = pagex + 'px'
    cursor.style.top = pagey + 'px'
}