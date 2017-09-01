module.exports = function (server, obj) {

    server.get('/api/v1/getAvailableCars', function (req, res, next) {
     res.end(JSON.stringify(obj));
        return next();
    });
    
    server.get('/api/v1/bookCab', function (req, res, next) {
        res.end(JSON.stringify(obj));
        return next();
    });

};