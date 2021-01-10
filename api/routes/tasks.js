const router = require("express").Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask);
router.put("/check/:id", taskController.checkTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
