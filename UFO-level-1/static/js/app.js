// from data.js
var tableData = data;
console.log("app.js loaded");
console.log(data);

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((siting) => {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      
    });
});


var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  var filteredData = tableData.filter(dates => dates.datetime === inputValue);
  console.log(filteredData);
  
  filteredData.forEach((siting) => {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};