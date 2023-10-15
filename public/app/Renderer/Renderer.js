class Renderer {
  viewFrame;

  constructor(data) {
    this.generateViewFrame(data);
  }

  generateViewFrame(data) {
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
    this.viewFrame = table;
  }

  printViewFrame() {
    this.viewFrame.forEach((row) => {
      row.forEach((cell) => console.log(cell));
    });
  }

  clearViewFrame() {
    const gameTableBody = document.querySelector(".viewFrame");
    if (gameTableBody) {
      gameTableBody.innerHTML = "";
    }
  }

  displayViewFrame(data) {
    this.generateViewFrame(data);
    const viewFrame = document.querySelector(".viewFrame");
    const viewFrameBody = document.createElement("tbody");

    this.viewFrame.forEach((row) => {
      const newRow = document.createElement("tr");
      row.forEach((renderCell) => {
        const newCell = document.createElement("td");
        const newCellContents = document.createTextNode(renderCell);
        newCell.appendChild(newCellContents);
        newRow.appendChild(newCell);
      });
      viewFrameBody.appendChild(newRow);
      viewFrame.appendChild(viewFrameBody);
    });
  }
}

export default Renderer;
