function randomNum() {
  var randomNum = Math.floor(Math.random() * 100 + 1);
   return randomNum;
   }

var randomNumber = randomNum();



function mainFunction() {
 var randomNumber = randomNum();
  return(randomNumber);
}

// function inputCheck() {
//    compareGuess();
// }

function displayGuess() {
  h2.innerText("Your last guess was");
}

function compareGuess() {
  var userGuess = getGuess();
  var randomNum = randomNumber;
  if (userGuess === randomNum) {
     too.innerText = 'Well now look at you!';
}
  if (userGuess < randomNum) {
    too.innerText = 'That is too low.';
}
  if (userGuess > randomNum) {
    too.innerText = 'That is too high.';
}

}

function getGuess() {
  var userGuess=Number(document.getElementById('userInput').value);
  return(userGuess);
}

var h2 = document.querySelector('h2')

var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var userInput = document.querySelector('#userInput');
var reset = document.querySelector('.reset');
var lastGuess = document.querySelector('.lastGuess');
var too = document.querySelector('#too');




// ? ^^ This might be how to generate a random number when the page loads ?

guess.addEventListener('click', function () {
      var userGuess = getGuess();
      // displayGuess();
      lastGuess.innerText = userGuess;
      compareGuess();
   // put this into a display function? ^
});
clear.addEventListener('click', function () {
      getGuess();
      lastguess.innerText = "";
});
reset.addEventListener('click', function() {
     mainFunction();

});
