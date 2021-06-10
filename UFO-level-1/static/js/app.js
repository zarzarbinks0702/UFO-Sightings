// from data.js
var tableData = data;
// other variables
var tableBody = d3.select('tbody');

tableData.forEach((sighting) => {
  var row = tableBody.append('tr');
  var datetime = row.append('td');
  var city = row.append('td');
  var state = row.append('td');
  var country = row.append('td');
  var shape = row.append('td');
  var duration = row.append('td');
  var comments = row.append('td');

  datetime.text(sighting['datetime']);
  city.text(sighting['city']);
  state.text(sighting['state']);
  country.text(sighting['country']);
  shape.text(sighting['shape']);
  duration.text(sighting['durationMinutes']);
  comments.text(sighting['comments']);
})
