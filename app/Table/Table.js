import Cell from "../Cell/Cell.js";

class Table {
  table;
  height;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
    const table = [];
    for (let yRowIndex = 0; yRowIndex < height; yRowIndex++) {
      const newXRow = [];
      for (let xRowIndex = 0; xRowIndex < width; xRowIndex++) {
        newXRow.push(new Cell(false));
      }

      table.push(newXRow);
    }

    this.table = table;
  }
}

export default Table;
