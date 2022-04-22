var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "abc123de45"
});

con.connect(function(err) {
    if (err) throw err;
});

con.query("SELECT * FROM empresa.departamentos", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});

con.query("SELECT * FROM empresa.empleados", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
});