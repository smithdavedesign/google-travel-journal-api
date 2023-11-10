const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
    user: 'slixxz',
    host: 'localhost',
    database: 'fogcampers',
    password: process.env.DB_PASSWORD,
    port: 5432,
});

module.exports = pool;