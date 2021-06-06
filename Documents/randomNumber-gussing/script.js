const btn = document.querySelector('.btn');
const input = document.querySelector('#user-input');
let output = document.querySelector('.output');
let message;

// crating random number between 1 to 10;
const randomNumber = Math.floor(Math.random() * 10) + 1;


function guessNumber(){
    let userGuess = parseInt(input.value) 
    if(userGuess === randomNumber){
        message = 'You have guessed right Number';
    }else if(userGuess < randomNumber){
        message = 'Number is too low'
       
    }else if(userGuess > randomNumber){
        message = "Number is too high";
    
    }
    output.textContent = message;
    input.value = '';

}

btn.addEventListener('click', guessNumber);
