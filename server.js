const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({limit: '50mb', extended: true})); 
app.use(express.static('public'));

app.get('/', async function(req, res) {
    await sleep(1000);
    res.send('done');
});


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

var listener = app.listen(process.env.PORT, function() {
	console.log('Your app is listening on port ' + listener.address().port);
})