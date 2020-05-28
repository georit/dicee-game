var diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = Math.floor(Math.random() * diceImages.length);
var randomNumber2 = Math.floor(Math.random() * diceImages.length) ;
document.querySelector(".img1").src = diceImages[randomNumber1];
document.querySelector(".img2").src = diceImages[randomNumber2];

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

document.querySelector("button").addEventListener("onClick", window.location.reload());
    