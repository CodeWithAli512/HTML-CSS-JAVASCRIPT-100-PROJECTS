const typedtextspan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let words = ["Awesome", "Fun", "Cool", "Life", "Famous","😂"]
const typingdely = 200;
const erasingdely = 200;
const newletterdely = 2000;
let index = 0;
let charindex = 0;

document.addEventListener('DOMContentLoaded',() => {
    if (words.length) {
        setTimeout(type, newletterdely);
    }
})
function type() {
    if (charindex < words[index].length) {
        typedtextspan.textContent += words[index].charAt(charindex);
        charindex++;
        setTimeout(type, typingdely);
    } else{
        setTimeout(erase, newletterdely);
    }
}


function erase() {
    if (charindex > 0) {
        typedtextspan.textContent = words[index].substring(0, charindex - 1);
        charindex--;
        setTimeout(erase, erasingdely);
    }else{
        index++;
        if (index >= words.length) {
            index =0;
        }
        setTimeout(type, typingdely);
    }
}
