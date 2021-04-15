// from data.js
var tableData = data;
console.log("app.js loaded");
console.log(data);

// put the data into a table
var tbody = d3.select("tbody");

tableData.forEach((siting) => {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
      
    });
});

// filter the tableData
var button = d3.select("#filter-btn");
var form = d3.select("form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
  d3.event.preventDefault();
  //clear the table
  $("#tableID").empty();


  var dateElement = d3.select("#datetime");
  var dateValue = dateElement.property("value");
  console.log(dateValue);

  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value");
  console.log(cityValue);

  var filteredData = tableData.filter(obj => (obj.datetime === dateValue) && (obj.city === cityValue));
  console.log(filteredData);

  


  
  // put filtered data into the table
  filteredData.forEach((siting) => {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};