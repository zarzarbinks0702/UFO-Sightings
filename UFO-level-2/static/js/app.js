//from data.js
var tableData = data;
//table body
var tableBody = d3.select('tbody');
//the filter button
var filterBtn = d3.select('#filter-button');
//the reset button
var resetBtn = d3.select('#reset-button');
//the form
var form = d3.select('#form');

//populate the table
const tableMaker = (data) => {
  data.forEach((sighting) => {
    var row = tableBody.append('tr');
    var dtrow = row.append('td').text(sighting.datetime);
    var cityrow = row.append('td').text(sighting.city.toUpperCase());
    var staterow = row.append('td').text(sighting.state.toUpperCase());
    var countryrow = row.append('td').text(sighting.country.toUpperCase());
    var shaperow = row.append('td').text(sighting.shape);
    var durationrow = row.append('td').text(sighting.durationMinutes);
    var commentsrow = row.append('td').text(sighting.comments);
  })
};

tableMaker(tableData);

//filter data by date/time
const filterDate = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-date');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.datetime === inputText);
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

//filter data by city
const filterCity = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-city');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.city.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

//filter data by state
const filterState = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-state');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.state.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

//filter data by country
const filterCountry = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-country');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.country.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

//filter data by shape
const filterShape = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-shape');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.shape === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

//filter the data when the filter button is clicked
filterBtn.on('click', function() {
  
});

//filter the data when enter is hit
form.on('submit', function() {
  d3.event.preventDefault();
  var input = d3.select('#sighting-date');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.datetime === inputText);
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
});

//reset the page
resetBtn.on('click', function () {
  d3.selectAll('tbody>tr').remove();
  tableMaker(tableData);
});
