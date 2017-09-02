module.exports = function (server, obj) {

server.post('/api/v1/stopTrip', function (req, res, next) {
    var car = req.params;
    var fare = 0.0;
    obj.forEach(function(entry) {
   if(entry.car.name == car.carName)
     {
         if(entry.car.isOccupied == 'yes'){
             
             var dropLocX = parseFloat(entry.car.dropLat);
             var dropLocY = parseFloat(entry.car.dropLon);
             var pickupLocationX = parseFloat(entry.car.lat);
             var pickupLocationY = parseFloat(entry.car.lon);
             
             var sqrDistance = (dropLocX - pickupLocationX)*(dropLocX - pickupLocationX) + (dropLocY - pickupLocationY)*(dropLocY - pickupLocationY);
             
             fare = Math.sqrt(sqrDistance);
             
             entry.car.isOccupied = 'no';
             entry.car.dropLat = 'false';
             entry.car.dropLon = 'false';
         }
     }
    });
    res.end(JSON.stringify(fare));
    return next();
});
};