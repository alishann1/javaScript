const quotes = [
    {
      name: "Alice",
      quote: "Believe in yourself and all that you are."
    },
    {
      name: "Bob",
      quote: "Every moment is a fresh beginning."
    },
    {
      name: "Charlie",
      quote: "Turn your wounds into wisdom."
    }
  ];

const text = document.querySelector(".text")
const userName = document.querySelector(".userName")

let index = 0;

function updateQuote(){
    const {name, quote} = quotes[index];
    text.innerText = quote;
    userName.innerText = name;
    index++;
    if(index === quotes.length){
        index = 0;
    }
    setTimeout(() => {
        updateQuote()
    }, 10000);
}
updateQuote()

  