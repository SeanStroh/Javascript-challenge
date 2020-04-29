// from data.js
var tableData = data;

var tbody = d3.select("tbody");

function tableBuild(tableData){
    tbody.html("");
    tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.values(ufoSightings).forEach((value) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}

tableBuild(tableData);

var button = d3.select("#filter-btn");
button.on("click", function(){
    var input = d3.select("#datetime");
    var Date = input.property("value");
    var filteredData = tableData.filter(ufoSightings => ufoSightings.datetime === Date);
    tableBuild(filteredData);
});