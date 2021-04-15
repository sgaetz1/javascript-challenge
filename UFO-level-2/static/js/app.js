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

  if (dateValue != "") {
    tableData = tableData.filter(obj => obj.datetime === dateValue);
    console.log(tableData);
  }

  var cityElement = d3.select("#city");
  var cityValue = cityElement.property("value");
  console.log(cityValue);

  if (cityValue != "") {
    tableData = tableData.filter(obj => obj.city === cityValue);
    console.log(tableData);
  }

  var stateElement = d3.select("#state");
  var stateValue = stateElement.property("value");
  console.log(stateValue);

  if (stateValue != "") {
    tableData = tableData.filter(obj => obj.state === stateValue);
    console.log(tableData);
  }

  var countryElement = d3.select("#country");
  var countryValue = countryElement.property("value");
  console.log(countryValue);

  if (countryValue != "") {
    tableData = tableData.filter(obj => obj.country === countryValue);
    console.log(tableData);
  }
  
  var shapeElement = d3.select("#shape");
  var shapeValue = shapeElement.property("value");
  console.log(shapeValue);

  if (shapeValue != "") {
    tableData = tableData.filter(obj => obj.shape === shapeValue);
    console.log(tableData);
  }


  
  // put filtered data into the table
  tableData.forEach((siting) => {
    var row = tbody.append("tr");

    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);

    });
  });
};