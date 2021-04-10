// from data.js
var tableData = data;
console.log("app.js loaded");
console.log(data);
// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((siting) => {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
