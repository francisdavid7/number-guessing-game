// Importing Necessary Modules
import http from 'http'; // For creating server
import url from 'url'; // To Parse the request URL
import querystring from 'querystring'; // To Parse the query string data
import writeHead from './my_modules/writehead.js';
import handleInvalidRoutes from './my_modules/handleErrors.js';
import serveGamePage from './my_modules/serveGame.js';

// Generating a random number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

// Create the server to handle user requests
const server = http.createServer((req, res) => {

    // Parse the incoming request URL
    const parsedUrl = url.parse(req.url, true);

    // Extract query string parameters from the URL
    const query = parsedUrl.query;

    // Route Serving the main game page
    if (req.method === 'GET' && parsedUrl.pathname === '/') {
        writeHead(req, res);
        serveGamePage(req, res);
    }
    
    // Route Handling the user's guess submission
    else if (req.method === 'GET' && parsedUrl.pathname === '/guess') {

        // Get the user's guess from the query string
        const userGuess = parseInt(query.guess, 10);

        // Prepare the response
        writeHead(req, res);

        // If the guess is correct, congratulate the user and reset the game
        if (userGuess === targetNumber) {
            res.end(`<p>Congratulations! You guessed the correct number: <b>${targetNumber}</b>. <a href="/">Play again</a>.</p>`);
            targetNumber = Math.floor(Math.random() * 100) + 1; // Generate a new target number
        }
        
        // Checking if the guessed number is too low
        else if (userGuess < targetNumber) {
            res.end(`<p>Opps! Too low! Try again. <a href="/">Go Back</a></p>`);
        }

        // Checking if the guessed number is too high
        else if (userGuess > targetNumber) {
            res.end(`<p>Oops! Too high! Try again. <a href="/">Go Back</a></p>`);
        }

        // If the user submits invalid data, display an error message
        else {
            res.end(`
                <p>Invalid input! Please enter a number. <a href="/">Go back</a></p>
            `);
        }
    }
    
    // Handle invalid routes
    else {
        handleInvalidRoutes(req, res);
    }

});

// Setting the port
const PORT = 8080;

// Start the server and listen on port 8080
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});