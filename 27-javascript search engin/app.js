// const search = () => {
//   const searchbox = document.getElementById("searchitem").value.toUpperCase();
//   const storeitem  = document.getElementById("product-list");
//   const product = document.querySelectorAll(".product");
//   const pname = storeitem.getElementsByTagName("h2");

//   for (let i = 0; i < pname.length; i++) {
//    let match =product[i].getElementsByTagName("h2")[0];

//    if (match) {
//     let textvalue = match.textContent || match.innerHTML
//     if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
//         product[i].style.display = "";
//     }
//     else{
//         product[i].style.display = "none";
//     }
//    }
    
//   }
// }





const search = () => {
    const searchitem = document.getElementById('searchitem').value.toUpperCase();
    const productlist = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = productlist.getElementsByTagName("h2");

    for (let i = 0; i < pname.length; i++) {
       let match = product[i].getElementsByTagName("h2")[0];

       if (match) {
        let textvalue = match.textContent || match.innerHTML
        if (textvalue.toUpperCase().indexOf(searchitem) > -1) {
            product[i].style.display = "";
        }
        else{

            product[i].style.display = "none";
        }
       }
        
    }
}


