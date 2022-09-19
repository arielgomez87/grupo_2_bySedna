const fs = require ('fs');
const path = require('path');

const logPath = path.resolve(__dirname, '../logs/userLogs.js');

function userLog(req, res, next){
    fs.appendFile(logPath, 'El usuario ingreso a la ruta ' + req.url + '.');
}


module.exports = userLog;