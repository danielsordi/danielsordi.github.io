 // Array of quotes with authors
 const quotes = [
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "The only person you should try to be better than is the person you were yesterday.",
        author: "Unknown"
    }
    // Add more quotes as needed
];

// Variable to keep track of the current quote index
let currentQuoteIndex = -1;

// Function to get a random quote from the quotes array
function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to change the quote and author sequentially
function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    var quote = quotes[currentQuoteIndex];
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
}

// Display a random quote on page load
document.addEventListener("DOMContentLoaded", function() {
    var quote = getRandomQuote();
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
});

// Add event listener to the "Next Quote" button
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".quoteBtn").addEventListener("click", changeQuote);
  });