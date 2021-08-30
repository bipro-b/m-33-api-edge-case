

const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(data => displayQuote(data));
}

const displayQuote = quote => {


    const quotelement = document.getElementById('quote');
    quotelement.innerText = quote.quote; 2

}



