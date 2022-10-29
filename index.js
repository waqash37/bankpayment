const cardName = document.getElementById("cardname");
const submit = document.getElementById("submit");
const alertMessage = document.getElementById("alert-message");
const cardNumber = document.getElementById("cardnumber");

const clickHandler = (e) => {
  e.preventDefault();
  regNumber = /^[0-9+]{16}$/;
  regName = /^[a-zA-Z]{0,3} [a-zA-Z]{0,3}$/;
  if (!regName.test(cardName.value)) {
    alertMessage.className = "alert alert-danger";
    alertMessage.innerHTML = "Invalid card name";
  }else if(!regNumber.test(cardNumber.value)){
    alertMessage.className = "alert alert-danger";
    alertMessage.innerHTML = "Invalid card number";
  }

  setTimeout(() => {
    alertMessage.className = "d-none";
  }, 2000); 
};

submit.addEventListener("click", clickHandler);
