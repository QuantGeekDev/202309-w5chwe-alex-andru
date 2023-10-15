class Cell {
  isAlive;
  neighborCoordinates;
  liveNeighborsAmount = 0;

  constructor(isAlive) {
    this.isAlive = isAlive;
  }

  getStatus() {
    return this.isAlive;
  }

  setStatus(status) {
    this.isAlive = status;
  }

  getLiveNeighborsAmount() {
    return this.liveNeighborsAmount;
  }

  increaseLiveNeighborsAmount() {
    this.liveNeighborsAmount++;
  }

  resetLiveNeighborsAmount() {
    this.liveNeighborsAmount = 0;
  }
}

export default Cell;
