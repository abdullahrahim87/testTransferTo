const mongoose = require('mongoose');

const auditLogSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    action:String,
    params: mongoose.SchemaTypes.Mixed,
    },
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    }
);

module.exports = mongoose.model('AuditLog', auditLogSchema);