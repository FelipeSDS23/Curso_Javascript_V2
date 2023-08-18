const mongoose = require("mongoose")

const taskScheme = new mongoose.Schema({
    title: {type: String, require: true, trim: true, maxlength: 150},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, require: false},
    userId: {type: String, require: true, trim: true}
})

module.exports = mongoose.model("Task", taskScheme)