document.getElementById('myButton').addEventListener('mouseover', function() {
    // Create a table element
    const table = document.createElement('table');
    table.border = '1';

    // Create a header row
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Age', 'Occupation','4'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    // Create a few data rows
    const data = [
        ['Alice', 30, 'Engineer'],
        ['Bob', 25, 'Designer'],
        ['Charlie', 35, 'Teacher']
    ];

    data.forEach(rowData => {
        const row = document.createElement('tr');
        rowData.forEach(cellData => {
            const cell = document.createElement('td');
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    // Append the table to the document body
    document.body.appendChild(table); 
    // Remove the event listener after the first hover event
    this.removeEventListener('mouseover', arguments.callee);
});