
// (function () {
//   const pictures = ["1", "2", "3", "4", "5"];
//   const container = document.querySelector(".container");
//   const buttons = document.querySelectorAll(".btn");
//   let currentIndex = 0;

//   const updateImage = () => {
//     container.style.backgroundImage = `url("images/${pictures[currentIndex]}.jpg")`;
//   };

//   const incrementIndex = (increment) => {
//     currentIndex += increment;
//     if (currentIndex < 0) {
//       currentIndex = pictures.length - 1;
//     } else if (currentIndex > pictures.length - 1) {
//       currentIndex = 0;
//     }
//     updateImage();
//   };

//   buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       if (button.classList.contains("btn-left")) {
//         incrementIndex(-1);
//       } else if (button.classList.contains("btn-right")) {
//         incrementIndex(1);
//       }
//     });
//   });
// })();


(function () {
  const pictures = ["1", "2", "3", "4", "5"];
  const container = document.querySelector(".container");
  const buttons = document.querySelectorAll(".btn");
  let currentIndex = 0;

  const updateImage = () => {
    container.style.backgroundImage = `url("images/${pictures[currentIndex]}.jpg")`;
  };

  const incrementIndex = (increment) => {
    currentIndex += increment;
    if (currentIndex < 0) {
      currentIndex = pictures.length - 1;
    }
    else if(currentIndex > pictures.length - 1){

      currentIndex = 0
    }
      updateImage();
  };
  
  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      if (button.classList.contains("btn-left")){
        incrementIndex(-1);
      }      
      else if (button.classList.contains("btn-right")) {
        incrementIndex(1);
      }
    }
    ) 
  });
  
})();