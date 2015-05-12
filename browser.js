var parks = require('./parks.json')
var hash = require('string-hash')
var today = (new Date()).toDateString()

var todayHash = hash(today)

var todayPark = parks[todayHash % parks.length]

document.querySelector('#parkdestages').innerHTML = todayPark
console.log(todayPark)
