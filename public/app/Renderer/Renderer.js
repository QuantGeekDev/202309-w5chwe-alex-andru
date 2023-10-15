class Renderer {
  renderTable;

  constructor(data) {
    this.generateTable(data);
  }

  generateTable(data) {
    const table = [];
    data.forEach((row) => {
      const rowValues = [];
      row.forEach((cell) => {
        if (cell.isAlive) {
          rowValues.push("🟩");
        }

        if (!cell.isAlive) {
          rowValues.push("⬜");
        }
      });
      table.push(rowValues);
    });
    this.renderTable = table;
  }

  printTable() {
    this.renderTable.forEach((row) => {
      row.forEach((cell) => console.log(cell));
    });
  }

  clearWebTable() {
    const gameTableBody = document.querySelector(".viewFrame");
    if (gameTableBody) {
      gameTableBody.innerHTML = "";
    }
  }

  displayWebTable(data) {
    this.generateTable(data);
    const gameTable = document.querySelector(".viewFrame");
    const webTableBody = document.createElement("tbody");

    this.renderTable.forEach((row) => {
      const newRow = document.createElement("tr");
      row.forEach((renderCell) => {
        const newCell = document.createElement("td");
        const cellContents = document.createTextNode(renderCell);
        newCell.appendChild(cellContents);
        newRow.appendChild(newCell);
      });
      webTableBody.appendChild(newRow);
      gameTable.appendChild(webTableBody);
    });
  }
}

export default Renderer;
