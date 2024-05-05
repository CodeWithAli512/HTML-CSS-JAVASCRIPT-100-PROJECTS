(function(){
    const counter = document.querySelector(".counter");
    const Add = document.querySelector(".btn-increment");
    const Sub = document.querySelector(".btn-Dicrement");
    let num = 0;
    Add.addEventListener("click",() => {
        num += 1
        counter.textContent = num;
        if (num == 0) {
            counter.style.color = "black";
        }
        else if (num > 0) {
            counter.style.color = "green";
        }
    });

    Sub.addEventListener("click", () => {
      num -= 1;
      counter.textContent = num;
      if (num < 0 ) {
        counter.style.color = "red";
      }
      else if (num == 0) {
        counter.style.color = "black";
      }
    });


})();