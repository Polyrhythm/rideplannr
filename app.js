var express = require('express'),
    compass = require('node-compass'),
    path = require('path'),
    app = express();

app.configure(function() {
    app.use(compass());
    app.use('/', express.static(path.join(__dirname, 'public')));
});

app.listen(3000);
console.log('Listening on port 3000');
