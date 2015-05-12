var request = require('request')
var cheerio = require('cheerio')
var fs = require('fs')

var parkUrl = 'http://de.wikipedia.org/wiki/Liste_von_Parkanlagen_in_Berlin'

var parks = []

request(parkUrl, function (err, res, body) {
  if(err) return console.log(err)
  var $ = cheerio.load(body)
  $('.wikitable tr').each(function (id, el) {
    var park = $(this).find('td a').first().text()
    if(park) parks.push(park)
  })
  fs.writeFileSync('parks.json', JSON.stringify(parks, null, ' '))
})

