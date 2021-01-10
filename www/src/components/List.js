import TaskLI from "./TaskLI";
import M from "materialize-css";

const List = ({ tasks, onTaskDelete, onTaskCheck, onTaskUpdate }) => {
    M.AutoInit();
    if (tasks.length > 0) {
        return (
            <div className="container">
                <div className="row">
                    <ul className="collection">
                        {tasks.map((task) => (
                            <TaskLI
                                onTaskDelete={onTaskDelete}
                                onTaskCheck={onTaskCheck}
                                onTaskUpdate={onTaskUpdate}
                                thisTask={task}
                                key={task._id}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="row">
                <p className="noTasksMessage">
                    You have no tasks. Try adding some!
                </p>
            </div>
        );
    }
};

export default List;
