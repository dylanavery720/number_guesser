function randomNum() {
  var randomNum = Math.floor(Math.random() * 100 + 1);
   return randomNum;
   }


   function getGuess() {
     var userGuess=Number(document.getElementById('userInput').value);
     return(userGuess);
   }

   var guess = document.querySelector('.guess');
    var clear = document.querySelector('.clear');
    var userInput = document.querySelector('#userInput');
    var reset = document.querySelector('.reset');
    var lastGuess = document.querySelector('.lastGuess');


    guess.addEventListener('click', function () {
          // inputCheck();
          lastGuess.innerText = getGuess();
    });
