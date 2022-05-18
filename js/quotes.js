const quotes =[
    {
        quotes:"hi im superman",
        author:'이현서'
    },
    {
        quotes:"hi im vetman",
        author:'박수환'
    },
    {
        quotes:"hi im wonderwoman",
        author:'김윤재'
    },
    {
        quotes:"hi im spiderman",
        author:'이석호'
    },
    {
        quotes:"hi im docterstrange",
        author:'최연제'
    },
    {
        quotes:"hi im blackwidow",
        author:'김민범'
    }
]



const quote = document.querySelector('div#quote span:first-child');
const author = document.querySelector('div#quote span:last-child');

const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `${todaysQuotes.quotes}\n`;
author.innerText = `-${todaysQuotes.author}-`;
