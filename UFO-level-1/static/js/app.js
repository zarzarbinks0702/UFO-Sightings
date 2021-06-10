//from data.js
var tableData = data;

//the filter button
var filterBtn = d3.select('.btn');

//populate the table
tableData.forEach((sighting) => {
  var tableBody = d3.select('.tbody');
  var row = tableBody.append('tr');
  var dtrow = row.append('td').text(sighting.datetime);
  var cityrow = row.append('td').text(sighting.city);
  var staterow = row.append('td').text(sighting.state);
  var countryrow = row.append('td').text(sighting.country);
  var shaperow = row.append('td').text(sighting.shape);
  var durationrow = row.append('td').text(sighting.durationMinutes);
  var commentsrow = row.append('td').text(sighting.comments);
});

//filter the data when the filter button is clicked
filterBtn.on('click', function() {
  d3.event.preventDefault();
  var input = d3.select('#text');
  var inputText = input.property('value');
  var filteredData = tableData.filter(sighting => sighting.datetime === inputText);
  console.log(filteredData);
});
