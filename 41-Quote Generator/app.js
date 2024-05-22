const Api_url = "https://api.quotable.io/random";
const text = document.querySelector("blockquote");
const author = document.querySelector("span");
const Newquote = document.querySelector(".btn").firstElementChild;
const Twite = document.querySelector(".btn").lastElementChild;

async function getDataFromApi() {
    let response = await fetch(Api_url);
    let data = await response.json();
    // console.log(data);
    text.textContent = data.content;
    author.textContent = data.author;

}

getDataFromApi();

Newquote.addEventListener("click", () => {
  getDataFromApi();
}
)

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + text.textContent + "---by" + author.textContent, "Tweet Window", "width=600, height=300");
}

Twite.addEventListener("click",() => {
  tweet()
}
)