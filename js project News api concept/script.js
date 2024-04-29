
const blogcontainer = document.getElementById("blog-container");
const searchfield = document.querySelector(".search");
const searchbtn = document.querySelector(".searchbtn");
const apikey = 'e2534c489ed6426b846038c7c3480f85';

async function fetchrandomnews() {
    try {
        const apiurl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apikey}`;
        const response = await fetch(apiurl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error, data couldn't fetch", error);
        return [];
    }
}


searchbtn.addEventListener("click", async () => {
    const query = searchfield.value.trim();
    if (query !== "") {
        try {
            const articles = await fetchnewsquery(query);
            displayblock(articles);
        } catch (error) {
            console.error("Error, found here", error);
        }
    }
}
)



async function fetchnewsquery(query) {
    try {
        const apiurl = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apikey}`
        const response = await fetch(apiurl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error, found here", error);
        return [];
    }
}




function displayblock(articles) {
    blogcontainer.innerHTML = "";
    articles.forEach(article => {
        const blogcard = document.createElement("div");
        blogcard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h2");
        title.textContent = article.title;
        const description = document.createElement("p");
        description.textContent = article.description;

        blogcontainer.appendChild(blogcard)
        blogcard.appendChild(img);
        blogcard.appendChild(title);
        blogcard.appendChild(description);


        blogcard.addEventListener("click", () => {
            window.open(article.url, "-blank");
        }
        )
    });
}



(async () => {
    try {
        const articles = await fetchrandomnews()
        displayblock(articles);
    } catch (error) {
        console.error('Error,fetching random news',error);
        return []
    }
}
)()