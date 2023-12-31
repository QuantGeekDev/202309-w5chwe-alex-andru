import Renderer from "../Renderer/Renderer.js";

class Game {
  table;
  renderer;

  constructor(table) {
    this.table = table;
    this.renderer = new Renderer(this.table.data);
  }

  nextGameSequence() {
    this.renderer.clearViewFrame();
    this.table.resetCells();
    this.table.countAliveNeighbors();
    this.table.updateCells();
    this.renderer.displayViewFrame(this.table.data);
  }
}

export default Game;
