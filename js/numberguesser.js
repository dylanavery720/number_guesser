
function randomNum() {
  var randomNum = Math.floor(Math.random() * (max-min) + min);
   return randomNum;
   }


var min = 1;
var max = 100;
var randomNumber = randomNum();

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



function mainFunction() {
  min = getMin();
  max = getMax();
  randomNumber = randomNum(min, max);
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
  else if (userGuess > randomNum) {
    too.innerText = 'That is too high.';
  }
  else if (isNaN(userGuess)) {
    too.innerText = 'Do not put letters in your number';
  }
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


// Buttonn Disablers

// function disableReset() {
//   document.getElementById(".reset").disabled = true;
//    }

// function disableClear() {
//   if (userInput === false) {
//   document.getElementById("reset").disabled = true;
// }
//   else {
//     document.getElementById("myBtn").disabled = false;
//   }
// }

function getMin() {
    var userMin=Number(document.getElementById('minimum').value);
    min = userMin;
    return (min);
}

function getMax() {
    var userMax=Number(document.getElementById('maximum').value);
    max = userMax+1;
    return (max);
}

function enableReset() {
    var resetbtn = document.getElementById("resetbtn"); resetbtn.disabled = false;
}

function enableClear() {
    var clearbtn = document.getElementById("clearbtn"); clearbtn.disabled = false;
}

// Event Listeners for Buttons

minClick.addEventListener('click', function () {
      getMin();
  });

maxClick.addEventListener('click', function () {
      getMax();
  });

guess.addEventListener('click', function () {
      var userGuess = getGuess();
      // displayGuess();
      // document.getElementById(".reset").disabled = false;
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
   });

reset.addEventListener('click', function() {
     mainFunction();
   });
