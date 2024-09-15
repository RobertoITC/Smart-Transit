const db = require('../config/db.js');
const res = require("express/lib/response");
const {response} = require("express");

const getAllBuses = async () => {
    const query = 'SELECT * FROM buses';
    const result = await db.query(query);
    return result.rows;
};

const getBusById = async (id) => {
    const query = 'SELECT * FROM buses WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
};

const addBus = async (bus) => {
    const { id, is_full, ip_address, distance_from_base, occupancy_percentage } = bus;
    const query = `
        INSERT INTO buses (id, is_full, ip_address, distance_from_base, occupancy_percentage)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const result = await db.query(query, [id, is_full, ip_address, distance_from_base, occupancy_percentage]);
    return result.rows[0];
};

const updateBus = async (id, bus) => {
    const { is_full, ip_address, distance_from_base, occupancy_percentage } = bus;
    const query = `
        UPDATE buses
        SET is_full = $1, ip_address = $2, distance_from_base = $3, occupancy_percentage = $4
        WHERE id = $5 RETURNING *;
    `;
    const result = await db.query(query, [is_full, ip_address, distance_from_base, occupancy_percentage, id]);
    return result.rows[0];
};

const deleteBus = async (id) => {
    const query = 'DELETE FROM buses WHERE id = $1 RETURNING *';
    const result = await db.query(query, [id]);
    return result.rows[0];
};

module.exports = {
    getAllBuses,
    getBusById,
    addBus,
    updateBus,
    deleteBus
};