// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Get a random quote. The high number of the Math.random method equals the length of the quotes array.
function getRandomQuote() {
	var randomArrayIndex = Math.floor(Math.random() * quotes.length);
	return quotes[randomArrayIndex];
}

// Print a random quote to the 'quote-box' element.
function printQuote() {
	var randomQuote = getRandomQuote();
	var stringOutput = '<p class="quote">' + randomQuote.quote + '</p>'
	stringOutput += '<p class="source">' + randomQuote.source
	
	//the following two if statements check for the presence of a value for citation and year in the array.
	if (randomQuote.citation) {
		stringOutput += '<span class="citation"> ' + randomQuote.citation + '</span>'
	}
	if (randomQuote.year) {
		stringOutput += '<span class="year"> ' + randomQuote.year + '</span> </p>'
	}
	
	document.getElementById('quote-box').innerHTML = stringOutput;
}

// Call function to print the first quote onto the page.
printQuote();