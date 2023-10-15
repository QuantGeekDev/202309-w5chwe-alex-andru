class Cell {
  isAlive;
  liveNeighborsAmount = 0;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  getStatus() {
    return this.isAlive;
  }

  setStatus(status) {
    this.isAlive = status;
    return this;
  }

  increaseLiveNeighborsAmount() {
    this.liveNeighborsAmount++;
  }

  resetLiveNeighborsAmount() {
    this.liveNeighborsAmount = 0;
  }
}

export default Cell;
