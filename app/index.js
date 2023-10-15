import Table from "./Table/Table.js";
import Game from "./Game/Game.js";

const table = new Table(10, 10);

const game = new Game(table);

const gameButton = document.querySelector(".game__button");
const buttonListener = gameButton.addEventListener("click", () => {
  game.nextGameSequence();
  game.renderer.displayWebTable();
});
