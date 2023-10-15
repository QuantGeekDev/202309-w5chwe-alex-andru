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

  getCellByCoordinates(xCoordinate, yCoordinate) {
    return this.data[yCoordinate][xCoordinate];
  }

  getNeighborCoordinates(xIndex, yIndex) {
    const coordinates = {};
    if (this.getCellByCoordinates(xIndex - 1, yIndex - 1)) {
      coordinates.topLeft = { x: xIndex - 1, y: yIndex - 1 };
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

  // FindAliveNeighbors() {
  //   this.data.forEach((row, yIndex) => {
  //     row.forEach((cell, xIndex) => {
  //       const currentCell = this.data[yIndex][xIndex];

  //       coordinates.forEach((cell) => {
  //         if (cell.isAlive) {
  //           currentCell.increaseLiveNeighborsAmount();
  //           console.log(this.data[yIndex][xIndex].liveNeighborsAmount);
  //         }
  //       });
  //       console.log(`${xIndex},${yIndex}: ${cell.isAlive}`);
  //     });
  //   });
  // }
}

export default Table;
