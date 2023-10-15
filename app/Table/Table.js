import Cell from "../Cell/Cell.js";

class Table {
  data;
  xRowLength;
  yRowLength;
  constructor(height, width) {
    this.xRowLength = height;
    this.yRowLength = width;
    const table = [];
    for (let yRowIndex = 0; yRowIndex < height; yRowIndex++) {
      const newXRow = [];
      for (let xRowIndex = 0; xRowIndex < width; xRowIndex++) {
        newXRow.push(new Cell(false));
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
    return this;
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
        cell.neighborCoordinates.forEach((neighbor) => {
          if (neighbor.x === true) {
            cell.liveNeighborsAmount++;
          }
        });
      });
    });
  }
}

export default Table;
