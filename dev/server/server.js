var restify     =   require('restify');
var mongojs     =   require('mongojs');
var	morgan  	= 	require('morgan');
var server      =   restify.createServer();
var fs          =   require('fs');
var obj         =   JSON.parse(fs.readFileSync('./cars/cars.json', 'utf8'));

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(morgan('dev')); // LOGGER

// CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

server.listen(process.env.PORT || 9804, function () {
    console.log("Server started @ ", process.env.PORT || 9804);
});

var manageCars =   require('./cars/manageCars')(server, obj);
var manageBookings =   require('./cars/manageBookings')(server, obj);