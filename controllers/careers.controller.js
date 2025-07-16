const data = require("../MockData/careers.data")

exports.getJobsData=(req, res)=>{
    res.json(data.jobs);
}

exports.getPerksData=(req, res)=>{
    res.json(data.perks);
}