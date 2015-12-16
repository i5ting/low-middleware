var low = require('lowdb')
var storage = require('low-file-sync')

module.exports = function(req, res, next) {
  req.db = db;
  req.dbw = dbw;
  
  next();
}

function db(path) {
  return low(path);
}

function dbw(path) {
  return low(path, {storage});
}
