var express=require('express');
var app=express();

var middleware=require('./middleware');
//
//app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('About us!');
})

app.use(express.static(__dirname+"/public"));

var port=process.env.PORT || 3000;
app.listen(port, function() {
    console.log('express server started on port '+port);
});