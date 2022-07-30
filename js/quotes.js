const quotes = [
    {
        quote: "Only those who dare to fail greatly can ever achieve greatly / ",
        author: "John F. Kennedy",
    },
    {
        quote: "Learning to love yourself is the greatest love of all / ",
        author: "Michael Masser",
    },
    {
        quote: "So little time and so little to do / ",
        author: "Oscar Levant",
    },
    {
        quote: "The higher the buildings, the lower the morals / ",
        author: "Noel Coward",
    },
    {
        quote: "There is no security on this earth, there is only opportunity / ",
        author: "General Douglas MacArthur",
    },
    {
        quote: "There is much pleasure to be gained from useless knowledge / ",
        author: "Bertrand Russell",
    },
    {
        quote: "Life is either a daring adventure or nothing / ",
        author: "Helen Keller",
    },
    {
        quote: "There's a fine line between genius and insanity. I have erased this line / ",
        author: "Oscar Levant",
    },
    {
        quote: "Laughter is the closest distance between two people / ",
        author: "Victor Borge",
    },   
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function ranDomQuote(){
    let size = quotes.length;
    let cnt = Math.floor(Math.random() * size);
    quote.innerText = quotes[cnt].quote;
    author.innerText = quotes[cnt].author;
}

ranDomQuote();
