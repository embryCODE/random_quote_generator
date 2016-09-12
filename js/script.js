/// VARIABLES ///

// Variable to keep track of quotes that have been displayed in an array.
var displayedQuotes = [];
var selectedQuote;



/// FUNCTIONS ///

// Get a random quote. The top number of the Math.random method equals the length of the quotes array.
function getRandomQuote() {
	
	// Resets displayedQuotes if all quotes have been displayed once.
	if (displayedQuotes.length === quotes.length) {displayedQuotes = [];}
	
	// Selects a random quote. Selects again if random quote matches already displayed quotes.
	do {
		var randomArrayIndex = Math.floor(Math.random() * quotes.length);
		selectedQuote = quotes[randomArrayIndex];
	} while (displayedQuotes.indexOf(selectedQuote) !== -1);
	
	return selectedQuote;
}

// Print a random quote to the 'quote-box' element.
function printQuote() {
	var randomQuote = getRandomQuote();
	
	// Add randomQuote to the displayedQuotes array so it is not displayed again.
	displayedQuotes.push(randomQuote);
	
	// Create string output
	var stringOutput = '<p class="quote">' + randomQuote.quote + '</p>';
	stringOutput += '<p class="source"> ' + randomQuote.source;
	
	//the following two if statements check for the presence of a value for citation and year in the array.
	if (randomQuote.citation) {
		stringOutput += '<span class="citation"> ' + randomQuote.citation + '</span>';
	}
	if (randomQuote.year) {
		stringOutput += '<span class="year"> ' + randomQuote.year + '</span> </p>';
	}
	
	document.getElementById('quote-box').innerHTML = stringOutput;
	
	// Change page background color by using random array index as last character in css class name. Clever, right? Haha.
	var randomArrayIndex = Math.floor(Math.random() * 5);
	var newBackground = 'color-' + randomArrayIndex;
	document.getElementById('body').className = newBackground;
	
}

// Needed a new button click function to clear the loop interval and reset it.
function printQuoteOnClick() {
	window.clearInterval(timer);
	printQuote();
	timer = window.setInterval(printQuote, 5000);
}



/// PROGRAM ///

// Call function on page load.
printQuote();

// Set loop interval
var timer = window.setInterval(printQuote, 5000);

// Button calls printQuoteOnClick().
document.getElementById('loadQuote').addEventListener("click", printQuoteOnClick, false);