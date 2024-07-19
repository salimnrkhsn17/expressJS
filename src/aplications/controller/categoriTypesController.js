const pool = require('../../../database')
const queris = require("../query/categoriTypequeris");

const getAplications = (req, res) => {
    pool.query(queris.getAplications, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getAplications,
};