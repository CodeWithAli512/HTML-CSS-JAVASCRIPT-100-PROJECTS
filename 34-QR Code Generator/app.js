const btn = document.getElementById("qr-btn");
const input = document.getElementById("qr-input");
const img = document.getElementById("qr-img");

btn.addEventListener("click",() => {
  const inputvalue = input.value;
//   console.log(inputvalue)
  if (!inputvalue) {
    alert("Please enter a valid url");
    return;
  }
  else{
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    img.alt = `QR Code for That ${inputvalue}`
  }
}
)
