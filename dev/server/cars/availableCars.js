//Utility function to return the available cabs 
module.exports.getAvailableCars = function (cars, wantRed, callback) {
    var availableCars = [];
    
    cars.forEach(function(entry) {
       if(entry.car.isOccupied == 'no')
         {
            if(wantRed == "true"){
                if(entry.car.isRed == 'yes')
                {
                    availableCars.push(entry);
                }
            }
            else{
                availableCars.push(entry);
            }
         }
        });
    return availableCars;
};