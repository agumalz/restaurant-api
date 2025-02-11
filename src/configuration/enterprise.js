const mysql = require('mysql2/promise');

const enterprise = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'enterprise'
});

module.exports = enterprise;