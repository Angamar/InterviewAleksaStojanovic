import { useState } from "react";
import M from "materialize-css";

const NewTaskForm = ({ onNewTask }) => {
    M.AutoInit();
    const [input, setInput] = useState("");
    const handleInput = (e) => {
        console.log(e.target.value);
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            const newTask = {
                taskName: input,
            };
            onNewTask(newTask);
            setInput("");
            M.updateTextFields();
        }
    };

    return (
        <div className="row">
            <div className="col s12 indigo lighten-3">
                <form onSubmit={handleSubmit} className="valign-wrapper">
                    <div className="input-field inline col s10">
                        <input
                            value={input}
                            onChange={handleInput}
                            id="newTask"
                            type="text"
                            maxlength="50"
                        />
                        <label htmlFor="newTask">Add a new task</label>
                    </div>
                    <button
                        className="col s1 offset-s2 center  newTaskButton"
                        type="submit"
                    >
                        <i className="material-icons medium">add_task</i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTaskForm;
