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
        text: "Comparison is the thief of joy.",
        author: "Theodore Roosevelt"
    },
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        text: "x",
        author: "x"
    },
    {
        text: "x",
        author: "x"
    }
    // Add more quote
];

// Variable to keep track of the current quote index
let currentQuoteIndex = -1;

// Function to get a random quote from the quotes array
function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to change the quote and author sequentially
function changeQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    let quote = quotes[currentQuoteIndex];
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
}

// Display a random quote on page load
document.addEventListener("DOMContentLoaded", function() {
    let quote = getRandomQuote();
    document.getElementById("quote").textContent = quote.text;
    document.getElementById("author").textContent = "- " + quote.author;
});

// Add event listener to the "Next Quote" button
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".quoteBtn").addEventListener("click", changeQuote);
  });