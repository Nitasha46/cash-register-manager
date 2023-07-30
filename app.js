const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
// const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [500, 200, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {
    hideMessage()

    const billAmountValue = parseFloat(billAmount.value);
    const cashGivenValue = parseFloat(cashGiven.value);

    if (isNaN(billAmountValue) || isNaN(cashGivenValue)) {
        showMessage("Please enter valid numeric values for bill amount and cash given");
    } else if (billAmountValue <= 0) {
        showMessage("Invalid Bill Amount");
    } else if (cashGivenValue >= billAmountValue) {
        const amountToBeReturned = cashGivenValue - billAmountValue;
        calculateChange(amountToBeReturned);
    } else {
        showMessage("The cash provided should be at least equal to the bill amount")
    }
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function calculateChange(amountToBeReturned) {
    for (let i=0; i<availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}