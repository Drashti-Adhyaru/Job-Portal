const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
    position: {
        type: String,
        required: [true, "Please provide position"],
    },
    companyName: {
        type: String,
        required: [true, "Please provide company name"],
    },
    address: {
        type: String,
        required: [true, "Please provide company address"],
    },
    startDate: {
        type: Date,
        required: [true, "Please provide start date"],
    },
    endDate: {
        type: Date,
        required: [true, "Please provide end date"],
    },
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'User',
        required: [true, "Please provide user ID"],
    }
});

const Experience = mongoose.model("experiences", experienceSchema);

module.exports = Experience;
