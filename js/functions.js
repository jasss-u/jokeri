const newRowBtn = document.getElementById('newRowBtn');
const rowCountElement = document.getElementById('rowCount');
const tableBody = document.getElementById('tableBody');

let rowCount = 0;


newRowBtn.addEventListener('click', addJokeriRow);


function addJokeriRow() {
    const row = document.createElement('tr');

     for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 10);
        row.appendChild(cell);
    }

    tableBody.appendChild(row);

    rowCount++;
    rowCountElement.textContent = rowCount;
}
