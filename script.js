//Get Quotes from API
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("new-quote");
const twitter = document.getElementById("twitter");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

let apiData = [];

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function stopLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
async function getQuotes() {
  loading();
  const apiUrl = " https://anime-chan.herokuapp.com/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiData = await response.json();
    quote.innerHTML = `${apiData.quote}`;
    author.innerHTML = `${apiData.character} <br> (${apiData.anime})`;
  } catch (error) {
    //Catch Error Here
  }
  stopLoading();
}
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerHTML} - ${author.innerHTML}`;
  window.open(twitterUrl, "_blank");
}

//Before loading
loading();

//On Load
getQuotes();

//On button click
newQuote.addEventListener("click", getQuotes);
twitter.addEventListener("click", tweetQuote);
