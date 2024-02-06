var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    role: String,
    email: String,
    phone: Number,
    password: String,
});
module.exports = mongoose.model('Users', UserSchema);

