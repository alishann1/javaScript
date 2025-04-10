// Attributes 
const box = document.querySelector(".box")

box.setAttribute("id", "box1")
box.setAttribute("title", "this is main box")
const res = box.getAttribute("id")
console.log(box, res)
box.removeAttribute("id")



// Class

console.log(box.classList)
// Add
box.classList.add("mainboxxx")

// Contains
const r = box.classList.contains("box")
console.log(r)

// Replace
box.classList.replace("box1", "box01")



// Remove
// h4.remove()

// Toogle
box.classList.toggle("box0001")


console.log(box.classList)

const body = document.querySelector("body")

// create elements using js document

const h4 = document.createElement("h4")
{/* <h4></h4> */ }
h4.textContent = "using js to create h4"
{/* <h4>using js to create h4</h4> */ }

body.prepend(h4)
// body.append(h4)
// box.before(h4)
// box.after(h4)
// console.log(h4)




// Adjacent 
// beforebegin  afterbegin , beforeend , afterend
box.insertAdjacentElement("beforebegin", h4)
box.insertAdjacentElement("afterbegin", h4)
box.insertAdjacentElement("beforeend", h4)
box.insertAdjacentElement("afterend", h4)

//  

// console.log("start")

// for (let i = 0; i < 10000; i++) {
//     console.log("1")
// }
const btn = document.getElementById("myButton")
console.log(btn)
btn.addEventListener("mouseup", () => {
    if (box.style.backgroundColor === "green") {
        box.style.backgroundColor = "white"
    } else {
        box.style.backgroundColor = "green"
    }

})


console.log("end")

// keyup , keydown
window.addEventListener("keyup", (e) => {
    box.textContent = `you pressed key  ${e.key}`
})





