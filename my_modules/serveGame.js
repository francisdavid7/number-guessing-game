export default function serveGamePage(req, res) {
    res.end(`
        <!doctype html>
        <html>
            <head>
                <title>Number Guessing Game</title>
                <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                }

                body {
                    padding: 30px;
                    text-align: center;
                }

                label {
                    margin-top: 20px;
                    display: block;
                }

                input[type=number] {
                    width: 120px;
                    height: 45px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                    outline: none;
                    padding: 15px;
                    text-align: center;
                }

                button {
                    width: 120px;
                    height: 45px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: 20px;
                }
                </style>
            </head>
            <body>
                <h1>Guess the Number Game</h1>
                <form method="GET" action="/guess">
                    <label for="guess">Enter a number between 1 and 100</label>
                    <input type="number" id="guess" min="1" max="100" name="guess" required>
                    <button type="submit">Submit Guess</button>
                </form>
            </body>
        </html>
`);
};