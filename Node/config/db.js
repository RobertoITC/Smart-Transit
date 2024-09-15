
const { Pool } = require('pg');
require('dotenv').config();

const db = new Pool({
    user: process.env.DB_USER || 'smarttransit',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'st',
    password: process.env.DB_PASSWORD || 'password',
    port: process.env.DB_PORT || 5432,
});

module.exports = db;