// create max number
let maxNumber = Math.round(prompt("Enter a maximum number:"));

//check if number and more than 1
while(isNaN(maxNumber) ) 
{
    alert("This is Not a Number! Please try again.");
    maxNumber = Math.round(prompt("Enter a maximum number:"));
} 
while( maxNumber <= 1 ) 
{
    alert("That is not a number in range! Please try again.");
    maxNumber = Math.round(prompt("Enter a maximum number:"));
} 
document.getElementById("max-number").innerHTML = maxNumber;
    


// generate maxNumber
let num = Math.floor(Math.random() * maxNumber) + 1;

//stop enter from refreshing page to submit
let guessInput = document.getElementById("guess");
guessInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    do_guess();
  }


});

console.log(num);

//array to hold numbers

let guesses = [];

function do_guess() 
{
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    // check if guess is already in the array
    if (guesses.includes(guess)) 
    {
        message.innerHTML = "You've already guessed " + guess + ". Try a different number.";
        return;
    }

    // add guess to array
    if (!isNaN(guess) && guess >= 1 && guess <= maxNumber) 
    {
        if (!guesses.includes(guess)) 
        {
          guesses.push(guess);
        }
    }

    // check if guess is correct
    if (guess == num) 
    {
        message.innerHTML = "You got it! It took you " + guesses.length + " guesses. Your guesses were: " + guesses.join(", ") + ".";
    } 
    else if (guess > num && guess <= maxNumber) 
    {
        message.innerHTML = "Try a lower number.";
    } 
    else if (guess < num && guess >= 1 ) 
    {
        message.innerHTML = "Try a higher number.";
    }
    else if (guess < 0) 
    {
        message.innerHTML = "The number you have entered is out of range. Please enter a number between 1 and " + maxNumber + ".";
    }
    else if(guess == isNaN)
    {
        message.innerHTML = " Please Enter a valid number."
    }
     else 
    {
        message.innerHTML = "The number you have entered is out of range. Please enter a number between 1 and " + maxNumber + ".";
    }


}

