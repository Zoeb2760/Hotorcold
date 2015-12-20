# Hotorcold
The mandatory requirements for this app are as follows:

You must use the HTML and CSS supplied. Once you’ve completed the project, you may choose to alter the layout and styles, but stick with the templates supplied initially. Note that the index.html file already links to the CSS files, app.js file and jQuery. You should write your JavaScript code in app.js.
When the page loads, JavaScript should start a new game. Since you’ll need to be able to start a new game when the user clicks the “New Game” button, you’ll want to create a newGame function that does everything necessary to start a new game.

When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess. You should write a named function that takes care of this. You should try to start a new game without refreshing or reloading the page.
The user should get feedback about each guess – if it was too low, too high, or just right. This means that you’ll need to write a named function that takes a user guess and determines which feedback to provide.
Feedback about the guess should appear in div#feedback. By default, when the page loads, the text in this field is set to “Make Your Guess!”
The game should track how many guess the user has made. Feedback about this should appear in span#count (which defaults to 0, when the page loads).
The game should also supply users with a list of the numbers they have guessed so far. 

The CSS for this game is set up in such a way that you can simply add each guessed number as an <li> to ul#guessList.
You’ll need to ensure that users provide valid inputs. Note that the guess text input field has the HTML 5 required flag set, so you won’t have to worry about blank guesses being submitted (if the user submits a blank guess, they'll be prompted to supply an input). However, you will need to write code that ensures that the user has supplied a numeric input between 1 and 100.
The starter template already contains a button in the upper right hand corner for starting a new game, however, this button does not currently do anything. You’ll need to write code that allows users to start a new game without making additional calls to the server. Clicking “New Game” should trigger the JavaScript function that starts a new game.
These are the minimal requirements. 

If you’re able to meet these basic requirements and want to build in more advanced features, you can write code that provides users with feedback about their most recent guess in relation to the previous one. If the most recent guess is closer to the secret number, you would tell the user they are “warmer”, and if it’s further, you’d tell them they are “colder”. Note that for the first guess, you’d still need to provide absolute feedback, since they’re won’t be a previous guess to compare to.
