const pool = require('../../../database')
const queris = require("../query/queris");

const getAplications = (req, res) => {
    pool.query(queris.getAplications, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getAppById = (req, res) => {
    const brand_id = parseInt(req.params.brand_id);
    pool.query(queris.getAppById, [brand_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}
module.exports = {
    getAplications,
    getAppById,
};