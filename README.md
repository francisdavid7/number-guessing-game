# Number Guessing Game - Vanilla Node.js
This is a simple number-guessing game implemented in vanilla Node.js. Users can guess a random number between 1 and 100, and the server responds whether the guess is too high, too low, or correct. If correct, the game resets automatically.

# How the Game Works
1. Random Number Generation:
  + The server generates a random number between 1 and 100 when it starts.
  + This number is stored in a variable called targetNumber.
  
2. Main Game Page:
  + When the user visits the homepage (http://localhost:3000), they see a simple HTML form asking them to guess a number.

3. Handling User Guess:

  + When the user submits their guess, the server processes it by comparing it with the target number.
    - If the guess is too low, the server responds with "Your guess is too low!"
    - If the guess is too high, the server responds with "Your guess is too high!"
    - If the guess is correct, the server congratulates the user and resets the random number for a new game.

4. Error Handling:

  + If the user tries to visit an invalid route, the server responds with a 404 error and a "Page not found" message.
  Key Features
  
- Written in vanilla Node.js, without any additional libraries or frameworks.
- Uses HTML forms for user input.
