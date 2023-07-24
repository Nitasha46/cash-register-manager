const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", validateBillAndCashAmount);

function validateBillAndCashAmount() {

    const billAmountValue = parseFloat(billAmount.value);
    const cashGivenValue = parseFloat(cashGiven.value);

    if (isNaN(billAmountValue) || isNaN(cashGivenValue)) {
        showMessage("enter numeric value");
    } else if (billAmountValue <= 0) {
        showMessage("invalid bill Amount");
    } else if (cashGivenValue >= billAmountValue) {
        const amountToBeReturned = cashGivenValue - billAmountValue;
        calculateChange(amountToBeReturned);
    } else {
        showMessage("cash shoul be more than bill")
    }
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

calculateChange(amountToBeReturned) {
    
}