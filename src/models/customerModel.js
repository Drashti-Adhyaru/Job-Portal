const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please provide valid Id"],
    }
    ,
    phone: {
        type: String,
        required: [true, "Please provide phone number"],
    },
    address: {
        type: String,
        required: [true, "Please provide address"],
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
    },
    firstName: {
        type: String,
        required: [true, "Please provide first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please provide last name"],
    },
    summary: { type: String },
    skills: { type: String },
    githubLink: { type: String },
    linkdinLink: { type: String },
    urlName: { type: String },
    themeColor: { type: String },
    profilePicLink: { type: String },
});

const Customer = mongoose.models.customers ||  mongoose.model("customers", customerSchema);

module.exports = Customer;
