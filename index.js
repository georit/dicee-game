                    // ***************************** METHOD ONE ************************************

var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = Math.floor(Math.random() * diceImages.length);
var randomNumber2 = Math.floor(Math.random() * diceImages.length);
document.querySelector(".img1").src = diceImages[randomNumber1];
document.querySelector(".img2").src = diceImages[randomNumber2];

                                    // ********* CHANGING H1 CONTENT ***********

function whoWon() {
    if (randomNumber1 === randomNumber2) {
      return "Draw!";
    } else if (randomNumber1 > randomNumber2) {
      return "🚩 Player 1 Wins!";
    } else {
      return "Player 2 Wins! 🚩";
    }
}
whoWon();

document.querySelector("h1").innerText = whoWon();

                                    // ********** BUTTON TO REFRESH PAGE ***********

document.querySelector("button").addEventListener("click", refreshPage);
function refreshPage () {
    window.location.reload();
}

                    // ***************************** METHOD TWO ************************************

/*var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").src = ("images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").src = ("images/dice" + randomNumber2 + ".png");*/

                                    // ********* CHANGING H1 CONTENT ***********

/*if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins!";
  } else {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}*/

                                    // ************ BUTTON TO REFRESH PAGE ********

/*document.querySelector("button").addEventListener("click", refreshPage);
function refreshPage () {
  window.location.reload();
}*/
    
