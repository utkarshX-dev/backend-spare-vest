const express = require("express");
const router = express.Router();
const careersController = require("../controllers/careers.controller");

router.get("/jobs",careersController.getJobsData)
router.get("/perks",careersController.getPerksData)

module.exports=router