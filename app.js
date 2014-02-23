
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var employee = require('./routes/employee');
var getJSON = require('./routes/getJSON');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(request, response, next){
    console.log('middleware: req is ' + request.method + 'and res is ' + response.url);
    next();
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/employees', employee.list);
app.get('/getjson', getJSON.get);

var options = {
    host: 'api.bitcoinaverage.com',
    port: 443,
    path: '/ticker/global/all',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

var getJSONResultCallBack = function(statusCode, result){
    // I could work with the result html/json here.  I could also just return it
    console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
    //        res.statusCode = statusCode;
    //        res.send(result);
    };

getJSON.get(options, getJSONResultCallBack);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
