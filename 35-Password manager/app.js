const inputfield = document.getElementById("inputfield");
const outputfield = document.getElementById("outputfield");

inputfield.addEventListener("input",() => {
  const password = inputfield.value;
  console.log(password);
  if(password.length < 8){
    outputfield.innerHTML = "Password is too short";
    outputfield.style.color = "red"
  }
  else{
    outputfield.innerHTML = "Password is long enough";
    outputfield.style.color = "green";

    if (password.search(/[a-z]/) == -1) {
        outputfield.innerHTML = "Password is missing an lowercase letter";
        outputfield.style.color = "red";

    }
    else if (password.search(/[A-Z]/) == -1) {
        outputfield.innerHTML = "Password is missing an uppercase letter";
        outputfield.style.color = "red";
        
    }
    else if(password.search(/[0-9]/) == -1){
        outputfield.innerHTML = "Password is missing an Numeric letter";
        outputfield.style.color = "red";
    }
    else if (password.search(/[!\@\#\$\%\^\&\*\(\)\_\~\<\>\,\.\;\'\"\{\}\[\]\+\-\*\/\.]/) == -1) {
        outputfield.innerHTML = "Password is missing an special letter";
        outputfield.style.color = "red";
    }
    else{
        outputfield.innerHTML = "Password is strong";
        outputfield.style.color = "green";
    }
  }
  
}
)