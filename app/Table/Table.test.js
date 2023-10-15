import Table from "./Table";

describe("Given a 'Table' instance", () => {
  describe("When receives height'6' and width'6'", () => {
    test("Then default cell isAlive is false ", () => {
      const table = new Table(6, 6);
      const expectedCellIsAlive = false;

      const cell = table.data[0][1];

      expect(cell.isAlive).toBe(expectedCellIsAlive);
    });
  });

  describe("When receives height '6' and width '6'", () => {
    test("Then xRow length is 6 ", () => {
      const table = new Table(6, 6);
      const expectedXRowLength = 6;

      const xRowLength = table.data[0].length;

      expect(xRowLength).toBe(expectedXRowLength);
    });
  });

  describe("When receives height '8' and width '4' ", () => {
    test("Then yRow length is 8 ", () => {
      const table = new Table(8, 4);
      const expectedXRowLength = 8;

      const yRowLength = table.data.length;

      expect(yRowLength).toBe(expectedXRowLength);
    });
  });

  describe("When cell 1,1 has 3 alive neighbors", () => {
    test("Then getAliveNeighborsAmount() returns 3 ", () => {
      const table = new Table(6, 6);
      const expectedAliveNeighbors = 3;

      table.data[0][1].isAlive = true;
      table.data[1][0].isAlive = true;
      table.data[1][2].isAlive = true;
      table.countAliveNeighbors();
      const testCell = table.getCellByCoordinates(1, 1);
      const testCellLiveNeighborsAmount = testCell.getLiveNeighborsAmount();

      expect(testCellLiveNeighborsAmount).toBe(expectedAliveNeighbors);
    });
  });

  describe("When cell 1,1 has no alive neighbors", () => {
    test("Then getAliveNeighborsAmount() returns 0 ", () => {
      const table = new Table(6, 6);
      const expectedAliveNeighbors = 0;

      table.countAliveNeighbors();
      const testCell = table.getCellByCoordinates(1, 1);
      const testCellLiveNeighborsAmount = testCell.getLiveNeighborsAmount();

      expect(testCellLiveNeighborsAmount).toBe(expectedAliveNeighbors);
    });
  });

  describe("When cell 1,1 has 3 alive neighbors and updateCells() gets called", () => {
    test("Then cell's getStatus() returns true ", () => {
      const table = new Table(6, 6);
      const expectedIsAlive = true;

      table.data[0][1].setStatus(true);
      table.data[1][0].setStatus(true);
      table.data[1][2].setStatus(true);
      table.countAliveNeighbors();
      table.updateCells();
      const testCell = table.getCellByCoordinates(1, 1);
      const testCellIsAlive = testCell.getStatus();

      expect(testCellIsAlive).toBe(expectedIsAlive);
    });
  });
});
