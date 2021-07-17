const chalk = require('chalk');
const validator = require('validator');

var utils =  {
    isValidURL: function(str) {
        console.log(validator.isURL(str) ? chalk.green("Yes " + str + " is valid URL!"): chalk.red.bold.inverse("opps! " + str + " is invalid URL"));
    }
}

module.exports = utils;