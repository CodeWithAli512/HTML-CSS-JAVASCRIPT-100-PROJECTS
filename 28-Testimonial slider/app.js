 
// (function () {
//     const customerimg = document.getElementById("customer-img");
//     const customername = document.querySelector(".customer-name");
//     const customertext = document.querySelector(".customer-text");
//     const btn = document.querySelectorAll(".btn");

//     let index = 0;
//     const customers = [];

//     function Customer(img, name, text) {
//         this.img = img;
//         this.name = name;
//         this.text = text;
//     }

//     function createCustomer(img, name, text) {
//         let Img = `./images/${img}.jpg`;
//         let customer = new Customer(Img, name, text); // Corrected variable name to Img

//         customers.push(customer);
//     }

//     createCustomer(1, 'jhon', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

//     createCustomer(2, 'Amry', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

//     createCustomer(3, 'Woakes', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur,t.');

//     createCustomer(4, 'William', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis  minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

//     createCustomer(5, 'jhosh', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

//     btn.forEach(button => {
//         button.addEventListener("click", (e) => { // Corrected "clock" to "click" event
//             if (e.target.parentElement.classList.contains('prebtn')) { // Corrected "contain" to "contains"
//                 if (index === 0) {
//                     index = customers.length;
//                 }
//                 index--;
//                 customerimg.src = customers[index].img;
//                 customername.textContent = customers[index].name;
//                 customertext.textContent = customers[index].text;
//             }

//             if (e.target.parentElement.classList.contains('nextbtn')) { // Corrected "contain" to "contains"
//                 index++;
//                 if (index === customers.length) {
//                     index = 0;
//                 }
//                 customerimg.src = customers[index].img;
//                 customername.textContent = customers[index].name;
//                 customertext.textContent = customers[index].text;
//             }
//         });
//     });
// })();



(function () {
    const customerimg = document.getElementById("customer-img");
    const customername = document.querySelector(".customer-name");
    const customertext = document.querySelector(".customer-text");
    const btn = document.querySelectorAll(".btn");

    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./images/${img}.jpg`;
        let customer = new Customer(Img, name, text);
        customers.push(customer);
    }

    createCustomer(1, 'jhon', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

    createCustomer(2, 'Amry', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

    createCustomer(3, 'Woakes', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur,t.');

    createCustomer(4, 'William', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis  minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');

    createCustomer(5, 'jhosh', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident aliquam distinctio consectetur nam, sapiente odit deserunt itaque unde nihil perspiciatis dicta ducimus saepe cupiditate ipsum incidunt cum vitae harum voluptatum beatae eaque minima. Sit consectetur, mollitia eligendi saepe ex minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.');


    btn.forEach(button => {
        button.addEventListener("click", (e) => {
            if (e.target.parentElement.classList.contains('prebtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                customerimg.src = customers[index].img;
                customername.textContent = customers[index].name;
                customertext.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextbtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                
                customerimg.src = customers[index].img;
                customername.textContent = customers[index].name;
                customertext.textContent = customers[index].text;
            }
        }
        )
    });
})()