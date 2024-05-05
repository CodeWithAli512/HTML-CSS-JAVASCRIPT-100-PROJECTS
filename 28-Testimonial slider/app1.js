(function () {
    const developimg = document.querySelector(".developimg");
    const developname = document.querySelector(".developname");
    const developpara = document.querySelector(".developpara");
    const btn = document.querySelectorAll(".btn");

    let index = 0;
    const Developers = [];

    function Developer(img,name) {
        this.img = img;
        this.name = name;
    }

    function developercreate(img,name) {
        let Img = `./images/${img}.jpg`;
        let developer = new Developer(Img,name);
        Developers.push(developer);
    }

    developercreate(1,'Alina');
    developercreate(2,'Ali Haider');
    developercreate(3,'Jime');
    developercreate(4,'Rosa');
    developercreate(5,'Hassan');

    btn.forEach(button => {
        button.addEventListener("click",(e) => {
            if (e.target.parentElement.classList.contains('prebtn')) {
                if (index === 0) {
                    index = Developers.length;
                }
                index--;
                developimg.src = Developers[index].img;
                developname.textContent = Developers[index].name;
            }
           
            if (e.target.parentElement.classList.contains('nextbtn')) {
                index++;
                if (index === Developers.length) {
                    index = 0;
                }
                 
                developimg.src = Developers[index].img;
                developname.textContent = Developers[index].name;
            }
        }
        )
    });
})()