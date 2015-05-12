(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(str) {
  var hash = 5381,
      i    = str.length

  while(i)
    hash = (hash * 33) ^ str.charCodeAt(--i)

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, if the high bit
   * is set, unset it and add it back in through (64-bit IEEE) addition. */
  return hash >= 0 ? hash : (hash & 0x7FFFFFFF) + 0x80000000
}

},{}],2:[function(require,module,exports){
module.exports=[
 "Brixpark",
 "Schlosspark Charlottenburg",
 "Schustehruspark",
 "Volkspark Jungfernheide",
 "Volkspark Wilmersdorf",
 "Lietzenseepark",
 "Österreichpark",
 "Görlitzer Park",
 "Park am Gleisdreieck",
 "Viktoriapark",
 "Volkspark Friedrichshain",
 "Oberseepark",
 "Tierpark Friedrichsfelde",
 "Stadtpark Lichtenberg",
 "Park um den Fennpfuhl",
 "Schlosspark Biesdorf",
 "Erholungspark Marzahn",
 "Wiesenpark",
 "Landschaftspark Wuhletal",
 "Essener Park",
 "Invalidenpark",
 "Fritz-Schloß-Park",
 "Geschichtspark Moabit",
 "Köllnischer Park",
 "Lustgarten",
 "Monbijoupark",
 "Park auf dem Moabiter Werder",
 "Park am Nordbahnhof",
 "Präsidentendreieck",
 "Schillerpark",
 "Großer Tiergarten",
 "Kleiner Tiergarten",
 "Volkspark Humboldthain",
 "Volkspark Rehberge",
 "Volkspark am Weinberg",
 "Zoologischer Garten Berlin",
 "Britzer Garten",
 "Körnerpark",
 "Schulenburgpark",
 "Volkspark Hasenheide",
 "Botanische Anlage Blankenfelde",
 "Brosepark",
 "Bürgerpark Berlin-Pankow",
 "Ernst-Thälmann-Park",
 "Mauerpark",
 "Park am Weißen See",
 "Schlosspark Schönhausen",
 "Volkspark Prenzlauer Berg",
 "Volkspark Schönholzer Heide",
 "Freizeitpark Lübars",
 "Schlosspark Tegel",
 "Wröhmännerpark",
 "Bäkepark",
 "Botanischer Garten Berlin",
 "Gemeindepark Lankwitz",
 "Paul-Ernst-Park",
 "Pfaueninsel",
 "Stadtpark Steglitz",
 "Freizeitpark Marienfelde",
 "Gutspark Marienfelde",
 "Hans-Baluschek-Park",
 "Heinrich-von-Kleist-Park",
 "Lichtenrader Volkspark",
 "Natur-Park Schöneberger Südgelände",
 "Nelly-Sachs-Park",
 "Rudolph-Wilde-Park",
 "Tempelhofer Park",
 "Volkspark Mariendorf",
 "Schlosspark Köpenick",
 "Treptower Park",
 "Volkspark Wuhlheide"
]
},{}],3:[function(require,module,exports){
var parks = require('./parks.json')
var hash = require('string-hash')
var today = (new Date()).toDateString()

var todayHash = hash(today)

var todayPark = parks[todayHash % parks.length]

document.querySelector('#parkdestages').innerHTML = todayPark
console.log(todayPark)

},{"./parks.json":2,"string-hash":1}]},{},[3]);
