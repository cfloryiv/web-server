var express=require('express');
var app=express();

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('private route hit');
        next();
    },
    logger: function (req, res, next) {
        console.log('Request: '+new Date().toString() +req.method+' '+req.originalUrl);
        next();
    }
};
//
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us!');
})

app.use(express.static(__dirname+"/public"));

var port=3000;
app.listen(port, function() {
    console.log('express server started on port '+port);
});