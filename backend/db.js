const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'expo_user',
    password: 'hello',
    database: 'expo_db'
});

connection.connect((err) => {
    if (err) {
    console.error('Error connecting: ', err.stack);
    return;
    }
    console.log('Connected to MariaDB as id ' + connection.threadId);
});

module.exports = connection;
