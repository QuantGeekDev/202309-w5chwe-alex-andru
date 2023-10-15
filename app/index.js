import Table from "./Table/Table.js";
import Game from "./Game/Game.js";

const table = new Table(6, 6);

const game = new Game(table);

game.nextGameSequence();
