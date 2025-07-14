
const express = require("express")
const router = express.Router()
const dashboardController = require("../controllers/dashboard.controller")

router.get("/investments", dashboardController.getInvestmentData)
router.get("/allocations", dashboardController.getAllocationData)
router.get("/transactions", dashboardController.getRecentTransactions)

module.exports = router
