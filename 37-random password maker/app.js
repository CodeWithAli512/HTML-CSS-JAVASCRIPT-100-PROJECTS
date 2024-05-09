const password = document.querySelector(".pass-input");
const lenghtnumber = document.getElementById("lenght-number");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generatebtn = document.getElementById("generate");
const copy = document.querySelector(".copy");
let pass = '';
let str = '';


// strings for password generate

const uppercasestr = 'ABCDEFGHIJKLOMNOPQRSTUVWYXZ';
const lowercasestr = 'abcdefghijklomnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generatebtn.addEventListener("click", () => {

  
  if (uppercase.checked) {
    str += uppercasestr;
   }

   if (lowercase.checked) {
    str += lowercasestr;
   }

   if (number.checked) {
    str += numberstr;
   }

   if (symbol.checked) {
    str += symbolstr;
   }

//    console.log(str);
   for( let i=0; i<lenghtnumber.value; i++){
    console.log(str.length);
    let index = Math.floor(Math.random() * str.length);
    // console.log(index);
    // console.log(str[index])
    pass += str[index]
   }
   console.log(pass);
   password.value = pass;
})


copy.addEventListener("click", () => {
  if (password.value === "") {
    console.error("Password not found");
    alert("Please Generate Password First");
  }
  else{
    password.select();
    password.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(password.value);

    alert("Password Copied");
  }
   
})

