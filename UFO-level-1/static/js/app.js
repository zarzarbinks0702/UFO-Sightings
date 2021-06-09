// from data.js
var tableData = data;
// other variables
var tableBody = d3.select('tbody');

data.forEach((sighting) => {
  var row = tableBody.append('tr')
  var datetime = row.append('td')
  var city = row.append('td')
  var state = row.append('td')
  var country = row.append('td')
  var ahape = row.append('td')
  var duration = row.append('td')
  var comment = row.append('td')
})
