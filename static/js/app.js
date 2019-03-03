// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML code
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Filter data based on user input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    
    console.log(filteredData);

    // Build table based on filteredData
    var tbody = d3.select("tbody");

    // Loop through filtered data and add a row for each entry
    filteredData.forEach(sighting => {
        var row = tbody.append("tr");

        // Loop through each entry and get the key and value for each item
        Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        // Append a cell to the row for each value
        var cell = tbody.append("td");

        // Fill each cell with the corresponding value
        cell.text(value);
        })
    })
})
