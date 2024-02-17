const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    jobId: {
        type: String,
        required: true
    },
    resumeId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['applied', 'rejected', 'accepted', 'pending'],
        default: 'Pending'
    },
    employerStatus: {
        type: String,
        enum: ['Viewed', 'Not Viewed'],
        default: 'Not Viewed'
    },
    dateApplied: {
        type: Date,
        default: Date.now
    }
});

const Request = mongoose.models.requests || mongoose.model("requests", requestSchema);

module.exports = Request;
