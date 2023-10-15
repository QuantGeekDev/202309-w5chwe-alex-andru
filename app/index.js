import Table from "./Table/Table.js";

const table = new Table(6, 6);

table.countAliveNeighbors();
const testCell = table.getCellByCoordinates(1, 1);
console.log(testCell.getLiveNeighborsAmount());
