// set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    var AWS = require('aws-sdk');
    var fs = require('fs');// for handling writing into a file. 

    // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

var params = {
  query: 'query string', /* required */
  cursor: 'STRING_VALUE',
  expr: 'STRING_VALUE',
  filterQuery: 'STRING_VALUE',
  highlight: 'STRING_VALUE',
  partial: true || false,
  queryOptions: 'STRING_VALUE',
  queryParser: 'simple',
  return: 'STRING_VALUE',
  size: 0,
  sort: 'STRING_VALUE',
  start: 0,
  stats: 'STRING_VALUE'
};


    //Node API
    //===============================================================
//AWS configuration

AWS.config.loadFromPath('awsconfig.json');
var csd = new AWS.CloudSearchDomain({endpoint: 'your end point from aws'});

// routes ======================================================================

    // api ---------------------------------------------------------------------
    // get all search results from aws cloud search and return the json
    app.get('/api/csd', function(req, res) {
        params = {
              query: 'qstring',  /* required */
              filterQuery: ""
            };
            csd.search(params, function(err, data) {
            if (err) res.send(err, err.stack);  // if there is an error retrieving, send the error. nothing after res.send(err) will execute
           
            else     {
                         // successful response
                fs.writeFile('test.json', JSON.stringify(data,null,3));// this will write the response into a file.
                res.json(data);// return data in JSON format. We will use this return in the front-end
            }
              
             });

    });
// gets the search param from the search box and return the result to the page
    app.post('/api/search',function(req,res){
            params = {
              query: req.body.text,  /* required */
            };
        csd.search(params, function(err, data) {
            if (err)  console.log(err, err.stack);  // if there is an error retrieving, send the error. nothing after res.send(err) will execute
           
            else     {
                         // successful response
                //fs.writeFile('test.json', JSON.stringify(data,null,3));
                res.json(data);// return data in JSON format
            }
              
             });
});
  

 // application -------------------------------------------------------------
 //set the home page to angular application
    app.get('*', function(req, res) {
        res.sendfile('/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

    // listen (start app with node server.js) ======================================
    //this should be the last set of code. 
    app.listen(8000);
    console.log("App listening on port 8000");
