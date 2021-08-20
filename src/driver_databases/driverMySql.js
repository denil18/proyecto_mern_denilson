const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root@localhoust',
    password: '',
    database: 'administrador de notas'
 });
 connection.connect((err) => {
     if(err) throw err;
     console.log('======> conexion exityosa a mysql');
});

 module.exports = mysql;