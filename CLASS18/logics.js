const biriyanibtn = document.getElementById("biriyanibtn")
const qormabtn = document.getElementById("qormabtn")
const niharibtn = document.getElementById("niharibtn")
const rotibtn = document.getElementById("rotibtn")
const kachoribtn = document.getElementById("kachoribtn")
const daalbtn = document.getElementById("daalbtn")



biriyanibtn.addEventListener("click", () => {
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Biriyani"
    yourorder.appendChild(newli)
})

niharibtn.addEventListener("click", () => {
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Nihari"
    yourorder.appendChild(newli)
})

qormabtn.addEventListener("click", () => {
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Qorma"
    yourorder.appendChild(newli)
})

rotibtn.addEventListener("click", () => {
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Roti"
    yourorder.appendChild(newli)
})

kachoribtn.addEventListener("click", () => {
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Kachori"
    yourorder.appendChild(newli)
})

daalbtn.addEventListener("click", ()=>{
    const yourorder = document.querySelector(".yourorder")
    const newli = document.createElement("li")
    newli.textContent = "Daal"
    yourorder.appendChild(newli)
})
