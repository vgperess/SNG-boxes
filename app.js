alert("Welcome to the Secret Number Game!!");
let secretNumber = parseInt(Math.random() * 10 + 1);
console.log(secretNumber);
let guess;
let tries = 1;

while(guess != secretNumber)
{
    guess = prompt(`Choose a number between 1 and 10`);
    if (guess == secretNumber) 
        {
        break;
        }
        
        else
        {
            if(secretNumber > guess)
            {
                alert(`The number is higher than ${guess}!`);
            } 
        
            if(secretNumber < guess)
            {
                alert(`The number is lower than ${guess}!`);
            }

            tries++;
        }    
}

let wordTry = tries > 1 ? "tries" : "try";
alert(`Nice!! You got the number ${secretNumber} with ${tries} ${wordTry}.`);