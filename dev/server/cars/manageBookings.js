module.exports = function (server, obj) {

    server.get('/api/v1/startTrip', function (req, res, next) {
     
        console.log("booked the cab");
        res.end(JSON.stringify(obj));   
        return next();
    });
    
    server.get('/api/v1/stopTrip', function (req, res, next) {
     
        res.end(JSON.stringify(obj));
        return next();
    });

};