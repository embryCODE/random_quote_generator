var displayedQuotes = []; // Variable to keep track of quotes that have been displayed in an array.
var selectedQuote;
var backgroundColors = [];



// GET A RANDOM QUOTE. The top number of the Math.random method equals the length of the quotes array.
function getRandomQuote() {
	// Resets displayedQuotes if all quotes have been displayed once.
	if (displayedQuotes.length === quotes.length) {displayedQuotes = [];}
	// Selects a random quote. Selects again if random quote is in displayedQuotes.
	do {
		var randomArrayIndex = Math.floor(Math.random() * quotes.length);
		selectedQuote = quotes[randomArrayIndex];
	} while (displayedQuotes.indexOf(selectedQuote) !== -1);
	return selectedQuote;
}

// PRINT A RANDOM QUOTE to the 'quote-box' element.
function printQuote() {
	var randomQuote = getRandomQuote();
	// Add randomQuote to the displayedQuotes array so it is not displayed again.
	displayedQuotes.push(randomQuote);
	
	// CREATE STRING OUTPUT
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
	
	// CHANGE BACKGROUND COLOR. Make sure all colors are cycled through before repeating.
	if (backgroundColors.length === 0) {
		backgroundColors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
	}
	var lastRandomArrayIndex = randomArrayIndex; // Ensures new loop through colors starts on different color.
	do {
		var randomArrayIndex = Math.floor(Math.random() * backgroundColors.length);
	} while (randomArrayIndex === lastRandomArrayIndex) // Restarts loop if random color is same as last color.
	var randomBackground = backgroundColors[randomArrayIndex];
	document.getElementById('content-area').className = randomBackground;
	backgroundColors.splice(randomArrayIndex, 1);
	
}

// Needed a new BUTTON CLICK function to clear the loop interval and reset it.
function printQuoteOnClick() {
	window.clearInterval(timer);
	printQuote();
	timer = window.setInterval(printQuote, 5000);
}



// CALL FUNCTION on page load.
printQuote();

// SET LOOP INTERVAL.
var timer = window.setInterval(printQuote, 5000);

// BUTTON calls printQuoteOnClick().
document.getElementById('loadQuote').addEventListener("click", printQuoteOnClick, false);

