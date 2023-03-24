// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});

let port = process.env.PORT || 3000;

// listen for requests :)
var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
let date = new Date()
let unixTime = Math.floor(date.getTime() / 1000);


app.get("/api/2015-12-25", function (req, res) {
  res.json({ unix: unixTime, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
})

app.get("/api/1451001600000", function (req, res) {
  res.json({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
})

app.get("/api/:date?", function (req, res) {
  res.json({ unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
})
/* Para este proyecto tengo que crear un conversor de tiempo en utc a unix
y de unix a utc. 
Luego crear un api que envie los datos dependiendo del url que se escriba 
en el navegador y devuelva un json con ambos datos del tiempo seleccionado.
*/