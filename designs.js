// Select color input
const colorInput = document.querySelector('#colorPicker');
colorInput.addEventListener('click', function() {
    console.log('Grid square color changed!');
});
// Select size input
const table = document.getElementById('pixelCanvas')
const height = document.querySelector('#inputHeight').value;
const width = document.querySelector('#inputWidth').value;
const gridSize = document.getElementById('sizePicker');
gridSize.addEventListener('click', function() {
    console.log('Grid square size changed!');
});


// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
    for (var N = 0; N <= height - 1; N++) {
        console.log(table.insertRow);
        for (var M = 0; M <= width - 1; M++) {
            console.log(table.insertRow.insertCell);
        }
    }
};
