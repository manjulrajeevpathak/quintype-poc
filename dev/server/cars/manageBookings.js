module.exports = function (server, obj) {
//API for stopping the trip. This endpoint returns the total fare
server.post('/api/v1/stopTrip', function (req, res, next) {
    var car = req.params;
    if(req.params.carName == undefined || req.params.carName == ''){
        res.writeHead(403, {
        'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify({
            error: "Invalid Request",
            message: "Invalid request data"
        })); 
    }
    else{
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
         else{
                res.writeHead(403, {
                'Content-Type': 'application/json; charset=utf-8'
                });
                res.end(JSON.stringify({
                    error: "Invalid Request",
                    message: "Car is already unaccupied"
                }));
         }
     }
    });
    res.end(JSON.stringify(fare));
    return next();
    }
  });
}; 