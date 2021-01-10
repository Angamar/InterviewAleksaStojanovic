import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import List from "./components/List";
import NewTaskForm from "./components/NewTaskForm";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        const response = await axios.get("/api/tasks");
        setTasks(response.data);
    };

    //initial fetch
    useEffect(() => {
        fetchData();
    }, []);

    //response.data: task
    const handleTaskCreate = (newTask) => {
        axios.post("/api/tasks", newTask).then((response) => {
            console.log("Server has sent the response!");
            console.log(response.data);
            setTasks([...tasks, response.data]);
        });
    };

    const handleTaskCheck = (thisTask) => {
        axios
            .put(`/api/tasks/check/${thisTask._id}`, thisTask)
            .then((response) => {
                console.log(
                    "'" +
                        response.data.taskName +
                        "' is done: " +
                        response.data.done
                );
                setTasks(
                    tasks.map((task) => {
                        if (task._id === response.data._id) {
                            return { ...task, done: response.data.done };
                        }
                        return task;
                    })
                );
            });
    };

    const handleTaskDelete = (thisTask) => {
        axios
            .delete(`/api/tasks/${thisTask._id}`, thisTask)
            .then((response) => {
                console.log(
                    `Task '${response.data.taskName}' succesfully deleted!'`
                );
                setTasks(
                    tasks.filter((task) => task._id !== response.data._id)
                );
            });

        //FALSE (filters out)= vraca se za kliknuti element, jer njegov _id se poklapa, sto je suprotno od uslova
        //TRUE (stays)== vraca se za sve ostale elemente, jer svi jesu razliciti od _id kliknutog elementa
    };

    //response.data: task
    const handleTaskUpdate = (thisTask, updateInput) => {
        if (updateInput && updateInput !== thisTask.taskName) {
            thisTask.taskName = updateInput;
            axios
                .put(`/api/tasks/${thisTask._id}`, thisTask)
                .then((response) => {
                    console.log("Server has sent the response!");
                    console.log(response.data.taskName);
                    setTasks(
                        tasks.map((task) => {
                            if (task._id === response.data._id) {
                                return response.data;
                            }
                            return task;
                        })
                    );
                });
        }
    };
    return (
        <div className="App container">
            <Header />
            <div className="row">
                <List
                    tasks={tasks}
                    onTaskDelete={handleTaskDelete}
                    onTaskCheck={handleTaskCheck}
                    onTaskUpdate={handleTaskUpdate}
                />
            </div>
            <div className="row">
                <NewTaskForm onNewTask={handleTaskCreate} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
