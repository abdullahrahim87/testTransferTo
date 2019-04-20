const mongoose = require('mongoose');
const AuditLog = require('../models/AuditLog');


module.exports = function(req, res, next) {
    const originalUrl = req.originalUrl;

    const urlArr = originalUrl.split('/');
    const action = urlArr[urlArr.length-1];

    const auditLog = new AuditLog({
       _id: new mongoose.Types.ObjectId(),
       action: action,
       params : req.body
    });

    auditLog.save().then(result => {
        console.log(result);
    });

    next();
}