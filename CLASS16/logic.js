const head = document.querySelectorAll('h1')
const para = document.querySelectorAll('p')
const content = document.querySelectorAll('.content')
head.textContent = "This is a Heading"

head.forEach((item) => {
    item.textContent = "Hello World!"
    item.style.color = "orange"
    item.style.backgroundColor = "lightblue"
    item.style.padding = "10px"
    item.style.marginTop = "0px"
    item.style.textAlign = "center"
})

para.forEach((item) => {
    item.textContent = "Welcome to my Page. I am styling this page using javaScript"
    item.fontFamily = "Arial"
    item.style.color = "orange"
    item.style.fontSize = "25px"
    item.style.backgroundColor = "lightblue"
    item.style.padding = "10px"
    item.style.marginTop = "3px"
    item.style.textAlign = "center"
    item.addEventListener("click", () => {
        if (item.style.color == "orange") {
            item.style.color = "green"
        } else {
            item.style.color = "orange"
        }
    })

})

content.forEach((item) => {
    item.textContent = "I have used query select all to call this class"
    item.fontFamily = "Arial"
    item.style.color = "orange"
    item.style.fontSize = "25px"
    item.style.backgroundColor = "lightblue"
    item.style.padding = "10px"
    item.style.marginTop = "3px"
    item.style.textAlign = "center"
})



