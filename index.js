var low = require('lowdb')
var storage = require('lowdb/file-sync')

module.exports = function(req, res, next) {
  req.db = db;
  
  next();
}

function db(path) {
  return low(path, { storage });
}
