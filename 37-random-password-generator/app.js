 
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const copy = document.getElementById('copy');
const length = 12;

const uppercase = 'ABCDEFGHIJKLOMNOPQRSTUVWYXZ';
const lowercase = 'abcdefghijklomnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()_+[]|+-/';

// for All character
const allchars = uppercase + lowercase + number + symbol;



// for generate password
function createPassword() {
  
  let pass = "";
  pass += uppercase[Math.floor(Math.random() * uppercase.length)];
  pass += lowercase[Math.floor(Math.random() * lowercase.length)];
  pass += number[Math.floor(Math.random() * number.length)];
  pass += symbol[Math.floor(Math.random() * symbol.length)];

  
  while (length > pass.length ) {
    pass += allchars[Math.floor(Math.random() * allchars.length)]
  }
  password.value = pass;
}

btn.addEventListener("click", () => {
  createPassword();
}
)


// for copy 
function copyPassword() {
  password.select();
  document.execCommand('copy');
}

copy.addEventListener("click", () => {
  copyPassword();
})