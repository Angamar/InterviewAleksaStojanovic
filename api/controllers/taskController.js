//get_all_tasks, create_task, check_task_done, update_task, delete_task
const Task = require("../models/task.model");

const getAllTasks = (req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.status(400).send("Error " + err));
};

const createTask = (req, res) => {
    const taskName = req.body.taskName;
    const newTask = new Task({ taskName, done: false });

    newTask
        .save()
        .then((task) => res.json(task))
        .catch((err) => res.status(400).send("Error " + err));
};

const updateTask = (req, res) => {
    Task.findById(req.params.id)
        .then((t) => {
            t.taskName = req.body.taskName;
            t.save()
                .then((task) => res.json(task))
                .catch((err) => res.status(400).send("Error " + err));
        })
        .catch((err) => res.status(400).send("Error: " + err));
};

const checkTask = (req, res) => {
    Task.findById(req.params.id)
        .then((t) => {
            t.done = !req.body.done;
            t.save()
                .then((task) => res.json(task))
                .catch((err) => res.status(400).send("Error " + err));
        })
        .catch((err) => res.status(400).send("Error: " + err));
};

const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then((task) => res.json(task))
        .catch((err) => res.status(400).send("Error " + err));
};

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    checkTask,
    deleteTask,
};
