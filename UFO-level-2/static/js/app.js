//from data.js
var tableData = data;
//table body
var tableBody = d3.select('tbody');
//the filter by date button
var filterDate = d3.select('#filter-button-date');
//the filter by date button
var filterCity = d3.select('#filter-button-city');
//the filter by date button
var filterState = d3.select('#filter-button-state');
//the filter by date button
var filterCountry = d3.select('#filter-button-country');
//the filter by date button
var filterShape = d3.select('#filter-button-shape');
//the reset button
var resetBtn = d3.select('#reset-button');


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
const date = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-date');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.datetime === inputText);
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

filterDate.on('click', date);
filterDate.on('submit', date);

//filter data by city
const city = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-city');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.city.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

filterCity.on('click', city);
filterCity.on('submit', city);

//filter data by state
const state = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-state');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.state.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

filterState.on('click', state);
filterState.on('submit', state);

//filter data by country
const country = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-country');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.country.toLowerCase() === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

filterCountry.on('click', country);
filterCountry.on('submit', country);

//filter data by shape
const shape = () => {
  d3.event.preventDefault();
  var input = d3.select('#sighting-shape');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.shape === inputText.toLowerCase());
  d3.selectAll('tbody>tr').remove();
  tableMaker(filteredData);
};

filterShape.on('click', shape);
filterShape.on('submit', shape);

//reset the page
resetBtn.on('click', function () {
  d3.selectAll('tbody>tr').remove();
  tableMaker(tableData);
});
