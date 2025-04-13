const calculateBtn = document.querySelector(".calculate")
const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const totalSpan = document.querySelector("span")

function calculateBMI() {
    const weight = weightInput.value;
    const height = heightInput.value;
    const BMI = weight / height ** 2;
    totalSpan.innerHTML = BMI.toFixed(2)
}
calculateBtn.addEventListener("click", calculateBMI);



