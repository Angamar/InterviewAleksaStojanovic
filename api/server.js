const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const tasksRoutes = require("./routes/tasks");

//DB connection
const dbURI =
    "mongodb+srv://aleksa:aleksa123@cluster0.4qqtt.mongodb.net/to-do-list?retryWrites=true&w=majority";
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json({ extended: true }));
app.use("/api/tasks", tasksRoutes);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
