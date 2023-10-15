import Table from "./Table/Table.js";
import Game from "./Game/Game.js";

const table = new Table(10, 10);

const game = new Game(table);

const startButton = document.querySelector(".game__button");

startButton.addEventListener("click", () => {
  const action = setInterval(() => {
    game.nextGameSequence();
  }, 500);
});
