import Cell from "./Cell";

describe("Given an class Cell", () => {
  describe("When constructed with isAlive = true", () => {
    test("Then cell.isAlive returns true", () => {
      const expectedIsAlive = true;
      const cell = new Cell(true);

      expect(cell.isAlive).toBe(expectedIsAlive);
    });

    describe("When called with increaseLiveNeighborsAmount()", () => {
      test("Then liveNeighborsAmount is 1", () => {
        const expectedLiveNeighborsAmount = 1;
        const cell = new Cell(true);
        cell.increaseLiveNeighborsAmount();
        expect(cell.liveNeighborsAmount).toBe(expectedLiveNeighborsAmount);
      });
    });
  });

  describe("When called with resetLiveNeighborsAmount()", () => {
    test("Then liveNeighborsAmount is 0", () => {
      const expectedLiveNeighborsAmount = 0;
      const cell = new Cell(true);
      cell.liveNeighborsAmount = 5;
      cell.resetLiveNeighborsAmount();
      expect(cell.liveNeighborsAmount).toBe(expectedLiveNeighborsAmount);
    });
  });

  describe("When isAlive is set to true", () => {
    test("Then getStatus() returns true", () => {
      const expectedIsAlive = true;
      const cell = new Cell(true);
      const cellIsAlive = cell.isAlive;

      expect(cellIsAlive).toBe(expectedIsAlive);
    });
  });

  describe("When isAlive is set to false", () => {
    test("Then getStatus() returns false", () => {
      const expectedIsAlive = false;
      const cell = new Cell(false);
      const cellIsAlive = cell.isAlive;

      expect(cellIsAlive).toBe(expectedIsAlive);
    });
  });

  describe("When setStatus(true) is called", () => {
    test("Then .isAlive returns true", () => {
      const expectedIsAlive = true;
      const cell = new Cell(false);
      cell.setStatus(true);

      expect(cell.isAlive).toBe(expectedIsAlive);
    });
  });
});
