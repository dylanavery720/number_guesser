function randomNum() {
  var randomNum = Math.floor(Math.random() * 100 + 1);
   return randomNum;
   }

var randomNumber = randomNum();
var min = 1;
var max = 100;

var h2 = document.querySelector('h2')
var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var userInput = document.querySelector('#userInput');
var reset = document.querySelector('.reset');
var lastGuess = document.querySelector('#lastGuess');
var too = document.querySelector('#too');

function mainFunction() {
  randomNumber = randomNum();
  return(randomNumber);
}

function displayGuess() {
  h2.innerText = "Your last guess was";
}

function compareGuess() {
  var userGuess = getGuess();
  var randomNum = randomNumber;
  if (userGuess === randomNum) {
     too.innerText = ':-D';
}

else if (userGuess > max) {
  too.innerText = 'Please enter a number between 1-100';
}
else if (userGuess < randomNum) {
    too.innerText = 'That is too low.';
}
  if (userGuess > randomNum) {
    too.innerText = 'That is too high.';
}
  else if (isNaN(userGuess)) {
    too.innerText = 'Do not put letters in your number';
  }

  // else if (userGuess < 1 || userGuess > 100) {
  //   too.innerText = 'Please enter a number between 1-100';
  // }

}

function checkRange() {
  var userGuess = getGuess();
  var randomNum = randomNumber;
  if (userGuess < 1 || userGuess > 100) {
    too.innerText = 'Please enter a number between 1-100';
  }
}




function getGuess() {
  var userGuess=Number(document.getElementById('userInput').value);
  return(userGuess);
}






guess.addEventListener('click', function () {
      var userGuess = getGuess();
      // displayGuess();
      lastGuess.innerText = userGuess;
      displayGuess();
      compareGuess();
      checkRange();
   
});
clear.addEventListener('click', function () {
      lastGuess.innerText = "";
      too.innerText = "";
      h2.innerText = "";
      userInput.value = "";
});
reset.addEventListener('click', function() {
     mainFunction();
});
