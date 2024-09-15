// baseModel.js
const pool = require('../config/db.js');
const res = require("express/lib/response");
const {response} = require("express");

// Function to get all bases
const getAllBases = async () => {
    const query = 'SELECT * FROM base';
    const result = await pool.query(query);
    return result.rows;
};

// Function to get a single base by ID
const getBaseById = async (id) => {
    const query = 'SELECT * FROM base WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

// Function to add a new base
const addBase = async (base) => {
    const { ruta, camionID, nextBase } = base;
    const query = `
        INSERT INTO base (ruta, camionID, nextBase)
        VALUES ($1, $2, $3) RETURNING *;
    `;
    const result = await pool.query(query, [ruta, camionID, nextBase]);
    return result.rows[0];
};

// Function to update a base
const updateBase = async (id, base) => {
    const { ruta, camionID, nextBase } = base;
    const query = `
        UPDATE base
        SET ruta = $1, camionID = $2, nextBase = $3
        WHERE id = $4 RETURNING *;
    `;
    const result = await pool.query(query, [ruta, camionID, nextBase, id]);
    return result.rows[0];
};

// Function to delete a base
const deleteBase = async (id) => {
    const query = 'DELETE FROM base WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};

module.exports = {
    getAllBases,
    getBaseById,
    addBase,
    updateBase,
    deleteBase
};