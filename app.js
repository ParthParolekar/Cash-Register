const billAmt = document.querySelector(".bill-amt");
const cashGiven = document.querySelector(".cash-given");
const calculateButton = document.querySelector(".calculate-btn");
const clearButton = document.querySelector(".clear-btn");
let notesToShow = document.querySelectorAll(".no-of-notes");
let msg = document.querySelector(".msg");
let notes = [2000, 500, 100, 20, 10, 5, 1];
let amountToBeReturned;

clearButton.addEventListener("click", clear);
calculateButton.addEventListener("click", validate);

function clear() {
  location.reload();
}

function validate() {
  if (billAmt.value <= 0) {
    showMessage("Please enter a valid bill amount");
  } else {
    amountToBeReturned = cashGiven.value - billAmt.value;
    if (amountToBeReturned >= 0) {
      calculateNotes(amountToBeReturned);
    } else {
      showMessage("Cash given should be more than or equal to the bill amount");
    }
  }
}

function calculateNotes(amountToBeReturned) {
  showMessage(`Amount to be returned is ${amountToBeReturned}`);
  for (let i = 0; i < notes.length; i++) {
    let numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
    amountToBeReturned = amountToBeReturned % notes[i];
    notesToShow[i].innerText = numberOfNotes;
  }
}

function showMessage(message) {
  msg.style.display = "block";
  msg.innerText = message;
}
