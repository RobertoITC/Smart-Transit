const busModel = require('../models/busModel');

const getAllBuses = async (req, res) => {
    try {
        const buses = await busModel.getAllBuses();
        res.status(200).json(buses);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving buses', error });
    }
};

const getBusById = async (req, res) => {
    const { id } = req.params;
    try {
        const bus = await busModel.getBusById(id);
        if (bus) {
            res.status(200).json(bus);
        } else {
            res.status(404).json({ message: `Bus with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bus', error });
    }
};

const addBus = async (req, res) => {
    const newBus = req.body;
    try {
        const bus = await busModel.addBus(newBus);
        res.status(201).json(bus);
    } catch (error) {
        res.status(500).json({ message: 'Error adding bus', error });
    }
};

const updateBus = async (req, res) => {
    const { id } = req.params;
    const busData = req.body;
    try {
        const updatedBus = await busModel.updateBus(id, busData);
        if (updatedBus) {
            res.status(200).json(updatedBus);
        } else {
            res.status(404).json({ message: `Bus with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating bus', error });
    }
};

const deleteBus = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBus = await busModel.deleteBus(id);
        if (deletedBus) {
            res.status(200).json({ message: 'Bus deleted successfully', deletedBus });
        } else {
            res.status(404).json({ message: `Bus with ID ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bus', error });
    }
};

module.exports = {
    getAllBuses,
    getBusById,
    addBus,
    updateBus,
    deleteBus
};