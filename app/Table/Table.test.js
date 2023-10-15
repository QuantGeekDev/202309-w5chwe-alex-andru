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
});
