const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    qualification: {
        type: String,
        required: [true, "Please provide qualification"],
    },
    collegeName: {
        type: String,
        required: [true, "Please provide college name"],
    },
    address: {
        type: String,
        required: [true, "Please provide college address"],
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
        type: String,
        // ref: 'User',
        required: [true, "Please provide user ID"],
    }
});

const Education = mongoose.model("educations", educationSchema);

module.exports = Education;
