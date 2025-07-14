const data = require("../MockData/dashboard.data")

exports.getInvestmentData = (req, res) => {
  res.json(data.investmentData)
}

exports.getAllocationData = (req, res) => {
  res.json(data.allocationData)
}

exports.getRecentTransactions = (req, res) => {
  res.json(data.recentTransactions)
}
