const box = document.querySelector(".box")
const box2 = document.querySelector(".box2")


box.innerHTML = "BINGO!"

const hide = () => {
    box.style.display = "block"
    box2.style.display = "none"
    console.log("helllo", box, box2)

}

window.addEventListener("load", () => {
    setTimeout(hide, 3000)
})

// hide()
