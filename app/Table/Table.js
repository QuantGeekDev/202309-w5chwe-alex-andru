import Cell from "../Cell/Cell.js";

class Table {
  data;
  xRowLength;
  yRowLength;
  constructor(height, width) {
    this.yRowLength = height;
    this.xRowLength = width;
    this.generateRandomTable();
    this.generateNeighborsCoordinates();
  }

  generateRandomTable() {
    const table = [];
    for (let yRowIndex = 0; yRowIndex < this.yRowLength; yRowIndex++) {
      const newXRow = [];
      for (let xRowIndex = 0; xRowIndex < this.xRowLength; xRowIndex++) {
        const randomIsAlive = Boolean(Math.round(Math.random()));
        newXRow.push(new Cell(randomIsAlive));
      }

      table.push(newXRow);
    }

    this.data = table;
  }

  generateNeighborsCoordinates() {
    this.data.forEach((row, yIndex) => {
      row.forEach((cell, xIndex) => {
        const neighborCoordinates = this.getNeighborCoordinates(xIndex, yIndex);
        cell.neighborCoordinates = neighborCoordinates;
      });
    });
  }

  getCellByCoordinates(xCoordinate, yCoordinate) {
    const minCoordinate = 0;
    const maxHeight = this.yRowLength - 1;
    const maxWidth = this.xRowLength - 1;
    if (
      xCoordinate >= minCoordinate &&
      yCoordinate >= minCoordinate &&
      xCoordinate <= maxWidth &&
      yCoordinate <= maxHeight
    ) {
      const matchedCell = this.data[yCoordinate][xCoordinate];
      return matchedCell;
    }
  }

  getNeighborCoordinates(xIndex, yIndex) {
    const coordinates = {};
    const topIndex = yIndex - 1;
    const leftIndex = xIndex - 1;

    if (this.getCellByCoordinates(leftIndex, topIndex)) {
      coordinates.topLeft = { x: leftIndex, y: topIndex };
    }

    if (this.getCellByCoordinates(xIndex, yIndex - 1)) {
      coordinates.topCenter = { x: xIndex, y: yIndex - 1 };
    }

    if (this.getCellByCoordinates(xIndex + 1, yIndex - 1)) {
      coordinates.topRight = { x: xIndex + 1, y: yIndex - 1 };
    }

    if (this.getCellByCoordinates(xIndex - 1, yIndex)) {
      coordinates.left = { x: xIndex - 1, y: yIndex };
    }

    if (this.getCellByCoordinates(xIndex + 1, yIndex)) {
      coordinates.right = { x: xIndex + 1, y: yIndex };
    }

    if (this.getCellByCoordinates(xIndex - 1, yIndex + 1)) {
      coordinates.Bottomleft = { x: xIndex - 1, y: yIndex + 1 };
    }

    if (this.getCellByCoordinates(xIndex, yIndex + 1)) {
      coordinates.bottomCenter = { x: xIndex, y: yIndex + 1 };
    }

    if (this.getCellByCoordinates(xIndex + 1, yIndex + 1)) {
      coordinates.BottomRight = { x: xIndex + 1, y: yIndex + 1 };
    }

    return coordinates;
  }

  updateCells() {
    this.data.forEach((row) => {
      row.forEach((cell) => {
        const cellLiveNeighborsAmount = cell.getLiveNeighborsAmount();
        const liveUnderpopulationRule = 2;
        const liveOverpopulationRule = 3;
        const deadResurrectionRule = 3;

        if (cell.getStatus()) {
          if (
            cellLiveNeighborsAmount < liveUnderpopulationRule ||
            cellLiveNeighborsAmount > liveOverpopulationRule
          ) {
            cell.setStatus(false);
          }
        }

        if (!cell.getStatus()) {
          if (cellLiveNeighborsAmount === deadResurrectionRule) {
            cell.setStatus(true);
          }
        }
      });
    });
  }

  countAliveNeighbors() {
    this.data.forEach((row) => {
      row.forEach((cell) => {
        for (const direction in cell.neighborCoordinates) {
          if (direction) {
            const neighborXCoordinates = cell.neighborCoordinates[direction].x;
            const neighborYCoordinates = cell.neighborCoordinates[direction].y;
            const neighborCell = this.getCellByCoordinates(
              neighborXCoordinates,
              neighborYCoordinates,
            );
            if (neighborCell.getStatus()) {
              cell.increaseLiveNeighborsAmount();
            }
          }
        }
      });
    });
  }
}

export default Table;
