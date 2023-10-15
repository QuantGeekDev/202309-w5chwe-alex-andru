import Table from "./Table/Table.js";
import Game from "./Game/Game.js";
const table = new Table(20, 20);

const game = new Game(table);

const startButton = document.querySelector(".game__button");

startButton.addEventListener("click", () => {
  setInterval(() => {
    game.nextGameSequence();
  }, 500);
});
