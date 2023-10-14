import Cell from "./Cell";

describe("Given an class Cell", () => {
  describe("When constructed with isAlive = true", () => {
    test("Then cell.isAlive returns true", () => {
      const expectedIsAlive = true;
      const cell = new Cell(true);

      expect(cell.isAlive).toBe(expectedIsAlive);
    });
  });
});
