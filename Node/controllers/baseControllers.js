const baseModel = require('../models/baseModel');

const getAllBases = async (req, res) => {
    try {
        const bases = await baseModel.getAllBases();
        res.status(200).json(bases);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bases', error });
    }
};

const getBaseById = async (req, res) => {
    const { id } = req.params;
    try {
        const base = await baseModel.getBaseById(id);
        if (base) {
            res.status(200).json(base);
        } else {
            res.status(404).json({ message: `Base with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving base', error });
    }
};

const addBase = async (req, res) => {
    const newBase = req.body;
    try {
        const base = await baseModel.addBase(newBase);
        res.status(201).json(base);
    } catch (error) {
        res.status(500).json({ message: 'Error adding base', error });
    }
};

const updateBase = async (req, res) => {
    const { id } = req.params;
    const baseData = req.body;
    try {
        const updatedBase = await baseModel.updateBase(id, baseData);
        if (updatedBase) {
            res.status(200).json(updatedBase);
        } else {
            res.status(404).json({ message: `Base with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating base', error });
    }
};

const deleteBase = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBase = await baseModel.deleteBase(id);
        if (deletedBase) {
            res.status(200).json({ message: 'Base deleted successfully', deletedBase });
        } else {
            res.status(404).json({ message: `Base with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting base', error });
    }
};

module.exports = {
    getAllBases,
    getBaseById,
    addBase,
    updateBase,
    deleteBase
};