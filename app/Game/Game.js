class Game {
  table;

  constructor(table) {
    this.table = table;
  }

  nextGameSequence() {
    this.table.countAliveNeighbors();
    this.table.updateCells();
  }
}

export default Game;
