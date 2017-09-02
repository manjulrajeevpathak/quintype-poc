var carAvailability = require('./availableCars');

module.exports = function (server, obj) {

server.post('/api/v1/bookCab', function (req, res, next) {
        
        var location = req.params;
     
        var availableCars = carAvailability.getAvailableCars(obj, location.wantRed);
        
        function getNearestCar(availableCars) {

                 var isFirstIteration = true;
                 
                 var nearestCar = [];
                 var newNearestCar = [];
                 
                 var newDistance = 0;
                 var distance = 0;
                 
                 availableCars.forEach(function(availableCarsObj) {
                 
                 var currentLocX = parseFloat(location.currentLocation.latt);
                 var availableCarX = parseFloat(availableCarsObj.car.lat);
                 var currentLocY = parseFloat(location.currentLocation.long);
                 var availableCarY = parseFloat(availableCarsObj.car.lon);
                 
                 nearestCar = availableCarsObj;
                 distance = (currentLocX - availableCarX)*(currentLocX - availableCarX) + (currentLocY - availableCarY)*(currentLocY - availableCarY);
                
                 if(isFirstIteration)
                 {
                     isFirstIteration = false;
                     newDistance = distance;
                     newNearestCar = nearestCar;
                 }
                 
                 if(newDistance > distance)
                 {
                     newDistance = distance;
                     newNearestCar = nearestCar;
                 }
            
             });
             
              return newNearestCar;
        }
        
        var bookedCar = getNearestCar(availableCars);
        bookedCar.car.isOccupied = "yes";
        bookedCar.car.dropLat = location.dropLocation.long;
        bookedCar.car.dropLon = location.dropLocation.latt;
        bookedCar.car.lat = location.currentLocation.long;
        bookedCar.car.lon = location.currentLocation.latt;
        res.end(JSON.stringify(bookedCar));
        return next();
        
    });
    
    server.post('/api/v1/getCars', function (req, res, next) {
        
        var isRed = req.params.wantRed;
        
       var availableCars = carAvailability.getAvailableCars(obj, isRed);
       
       res.end(JSON.stringify(availableCars));
        return next();
    });
};