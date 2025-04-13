const calculateBtn = document.querySelector(".calculate")
const billInput = document.querySelector("#bill")
const tipInput = document.querySelector("#tip")
const totalSpan = document.querySelector("span")

function calculateTip() {
    const billAmount = billInput.value;
    const tipAmount = tipInput.value;
    const totalAmount = billAmount * (1 + tipAmount / 100);
    totalSpan.innerHTML = totalAmount.toFixed(2)
}
calculateBtn.addEventListener("click", calculateTip);



