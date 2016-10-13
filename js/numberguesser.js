// Random Number Generator

function randomNum() {
  var randomNum = Math.floor(Math.random() * (max-min) + min);
   return randomNum;
}

// Global Variables

var min = 1;
var max = 100;
var randomNumber = randomNum();

// Query Selectors! The foundation.

var h2 = document.querySelector('h2')
var guess = document.querySelector('.guess');
var clear = document.querySelector('.clear');
var userInput = document.querySelector('#userInput');
var reset = document.querySelector('.reset');
var lastGuess = document.querySelector('#lastGuess');
var minimum = document.querySelector('#minimum');
var maximum = document.querySelector('#maximum');
var minClick = document.querySelector('#minClick');
var maxClick = document.querySelector('#maxClick');

// All the functions.

function mainFunction() {
  min = getMin();
  max = getMax();
  randomNumber = randomNum(min, max);
  return(randomNumber);
}

function resetFunction() {
  min = 1;
  max = 100;
  randomNumber = randomNum(min, max);
  return(randomNumber);
}

function displayGuess() {
  h2.innerText = "Your last guess was";
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

function clearbutton() { clear.addEventListener('click', function () {
  debugger
      lastGuess.innerText = "";
      too.innerText = "";
      h2.innerText = "";
      userInput.value = "";
      minimum.value = "";
      maximum.value = "";
   });
 }

// Main If/Else Function, can probably be cleanedup a bit & refactored.

function compareGuess() {
  var userGuess = getGuess();
  var randomNum = randomNumber;
  if (userGuess === randomNum) {
     too.innerText = ':-D';
    //  userMax = userMax + 10;
}

  else if (userGuess > max) {
  too.innerText = 'Please enter a number between the minimum and maximum.';
}
  else if (userGuess < randomNum) {
    too.innerText = 'That is too low.';
}
  else if (userGuess > randomNum) {
    too.innerText = 'That is too high.';
}
  else if (isNaN(userGuess)) {
    too.innerText = 'Do not put letters in your number';
  }
}


// Phase 3 Functions

function getMin() {
    var userMin=Number(document.getElementById('minimum').value);
    if (userMin > 0) {
      min = userMin;
    }
    else {
      min = 1;
    }
    return (min);
}

function getMax() {
    var userMax=Number(document.getElementById('maximum').value);
    if (userMax > 0) {
      max = userMax+1;
    }
    else {
      max = 100;
    }
    return (max);
}

// Button Enablers

function enableReset() {
    var resetbtn = document.getElementById("resetbtn"); resetbtn.disabled = false;
}

function enableClear() {
    var clearbtn = document.getElementById("clearbtn"); clearbtn.disabled = false;
}



// Event Listeners for Buttons

maxClick.addEventListener('click', function () {
      getMin();
      getMax();
      mainFunction();
  });

guess.addEventListener('click', function () {
      var userGuess = getGuess();
      lastGuess.innerText = userGuess;
      displayGuess();
      compareGuess();
      checkRange();
      enableReset();
      enableClear();
   });

clear.addEventListener('click', function () {
      lastGuess.innerText = "";
      too.innerText = "";
      h2.innerText = "";
      userInput.value = "";
      minimum.value = "";
      maximum.value = "";
   });

reset.addEventListener('click', function() {
     minimum.value = "";
     maximum.value = "";
     resetFunction();
   });
