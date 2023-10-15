import Table from "./app/Table/Table.js";
import Game from "./app/Game/Game.js";

const table = new Table(20, 20);

const game = new Game(table);

const startButton = document.querySelector(".game__button");

startButton.addEventListener("click", () => {
  document.querySelector(".game__button").toggleAttribute("disabled");
  setInterval(() => {
    game.nextGameSequence();
  }, 500);
});
