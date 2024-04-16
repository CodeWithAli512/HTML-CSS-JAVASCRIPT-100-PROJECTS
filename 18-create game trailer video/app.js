//btn
const btn = document.querySelector(".btn");
//close-icon
const closeicon = document.querySelector(".close-icon");
//trailer-container
const trailercontainer = document.querySelector(".trailer-container");
//video
const video = document.querySelector("video");

btn.addEventListener('click',() => {
    trailercontainer.classList.remove('active');
})