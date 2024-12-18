document.getElementById("startButton").addEventListener("click", startGame);

let board = document.getElementById("gameBoard");
let attempts = 0;
let timer = 0;
let flippedCards = [];
let matchedPairs = 0;
let timerInterval; // Variable para almacenar el intervalo del temporizador
let cardImages = [
  "./src/img/Ash.jpg",
  "./src/img/Goku.jpg",
  "./src/img/Naruto.jpg",
  "./src/img/Reena.jpg",
  "./src/img/SailorMoon.jpg",
  "./src/img/Chopper.jpg",
  "./src/img/Anya.jpg",
  "./src/img/Nezuko.jpg",
]; // Las imágenes de los personajes

// Función para iniciar el juego
function startGame() {
  attempts = 0;
  matchedPairs = 0;
  flippedCards = [];
  shuffleArray(cardImages);
  board.innerHTML = "";
  createBoard();
  startTimer();
}

// Función para crear las cartas en el tablero
function createBoard() {
  let cards = [...cardImages, ...cardImages]; // Duplicamos las imágenes para que haya pares
  shuffleArray(cards);

  cards.forEach((imgSrc) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<img src="${imgSrc}" alt="Card">`;

    card.addEventListener("click", () => flipCard(card, imgSrc));

    board.appendChild(card);
  });
}

// Función para mezclar el array de imágenes
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// Función para voltear una carta
function flipCard(card, imgSrc) {
  if (flippedCards.length < 2 && !card.classList.contains("flipped")) {
    card.classList.add("flipped");
    flippedCards.push({ card, imgSrc });

    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
}

// Función para comprobar si las dos cartas son iguales
function checkMatch() {
  if (flippedCards[0].imgSrc === flippedCards[1].imgSrc) {
    matchedPairs++;
    flippedCards = [];
    if (matchedPairs === cardImages.length) {
      stopTimer(); // Detener el temporizador cuando se haya ganado el juego
      setTimeout(() => {
        alert("¡Ganaste! Has encontrado todas las parejas.");
        startGame(); // Reiniciar el juego
      }, 500); // Aseguramos que el mensaje aparezca después de una pequeña demora
    }
  } else {
    setTimeout(() => {
      flippedCards.forEach((item) => item.card.classList.remove("flipped"));
      flippedCards = [];
    }, 1000);
  }
  attempts++;
  document.getElementById("attempts").textContent = attempts;
}

// Función para iniciar el temporizador
function startTimer() {
  let timerElement = document.getElementById("timer");
  let startTime = Date.now();
  timerInterval = setInterval(() => {
    let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    let minutes = Math.floor(elapsedTime / 60);
    let seconds = elapsedTime % 60;
    timerElement.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }, 1000);
}

// Función para detener el temporizador
function stopTimer() {
  clearInterval(timerInterval); // Detenemos el intervalo
}
