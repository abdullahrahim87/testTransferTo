const AuditLog = require('../models/AuditLog');

const getStatsAction = (req, res, next) => {
    const aggregatorOpts = [
        {
            $group: {
                _id: "$action",
                total: {$sum: 1}
            }
        }];

    AuditLog.aggregate(aggregatorOpts,function (err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    });
}


module.exports = {
    getStatsAction: getStatsAction
}