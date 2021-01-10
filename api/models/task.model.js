const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true,
        minlength: 1,
    },
    done: {
        type: Boolean,
        required: true,
    },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
