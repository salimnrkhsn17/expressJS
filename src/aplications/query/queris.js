const getAplications = "SELECT * FROM brands";
const getAppById = "SELECT * FROM brands WHERE brand_id = $1";

module.exports = {
    getAplications,
    getAppById,
};