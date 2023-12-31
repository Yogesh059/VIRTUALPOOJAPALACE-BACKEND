const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    img: {
        type: String
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
    },
    User_Type: {
        type: String,
        required: true,
        enum: ["user", "pandit"]
    }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
