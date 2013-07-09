# Reckon

Reckon is a wrapper for the [forecast.io
api](http://developer.forecast.io). It
provides a simple way of accessing the amazing weather data they
provide!

    // instantiate shakes like so
    var reckoner = new Reckon({apiKey:'your api key from
developer.forecast.io});
    
    
    // call the api using the named endpoint and parameters + token!
    moves.get({lat:'valid lat',lon:'valid long'}, 
function(data){
      res.render('index', {'results':data});
    });

# Installation

### Clone the repo

    git clone git@github.com:jonezy/reckon.git ./reckon
    
### Install dependencies

    cd reckon && npm install
    
### Setup settings.json

Go to developer.forecast.io and register for an account.  After you register you will be at the developer dashboard, copy the api
key from the bottom of the screen

    mv example/settings.local example/settings.json
    
    {
        'apiKey': 'your api key from above',
    }
    
### Run the example site

    cd example
    grunt

### Run tests

    mocha -R nyan (the best way to run tests)

