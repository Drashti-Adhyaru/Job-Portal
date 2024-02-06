require('dotenv').config()
const mongo = process.env.MONGODB_URI;

module.exports = {
    url: mongo + "Jobs"
};