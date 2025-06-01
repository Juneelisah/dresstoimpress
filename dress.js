const myAudio = document.getElementById("myAudio");
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");
const gameContent = document.getElementById("gameContent");

let gameStarted = false;

function changeClothing(part, imagePath) {
  document.getElementById(part).src = imagePath;
}

function removeClothing(part) {
  document.getElementById(part).src = "";
}

function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    myAudio.play().catch((err) => {
      console.log("Audio kon niet worden afgespeeld:", err);
    });
    startScreen.classList.add("hidden");
    gameContent.classList.remove("hidden");
  } else {
    console.log("Game is already gestart.");
  }
}

startButton.addEventListener("click", startGame);
