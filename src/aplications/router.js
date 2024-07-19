const { Router } = require("express");
const controller = require("./controller/Brandcontroller");
const controller = require("./controller/brandTypeController");
const controller = require("./controller/categoriController");
const controller = require("./controller/categoriTypesController");
const controller = require("./controller/ProductsController");
const controller = require("./controller/TypesController");

const router = Router();

router.get("/", controller.getAplications);
router.get("/:brand_id", controller.getAppById)

module.exports = router;
