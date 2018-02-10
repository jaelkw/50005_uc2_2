var dotenv = require('dotenv');
var cfg = {};

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV!== 'test') {
    dotenv.config({path: '.env'});
} else {
    dotenv.config({ path: '.env.exmaple', silent: true});
}

// HTTp port to run the web application
cfg.port = process.env.PORT || 3000;

// Random string to generate secure one-time passwords and HTTP sessions
