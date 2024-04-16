const btn = document.querySelector(".emojies");

const emojie = ["😘", "😍", "😎", "😒", "😁", "😉", "😢", "🤔", "🤐", "😪", "😫", "😋", "😭", "😡", "🤫", "🥴"];

btn.addEventListener("mouseover",() => {
  btn.innerHTML = emojie[Math.floor(Math.random() * emojie.length)]
}
)