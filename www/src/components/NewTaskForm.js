import { useState } from "react";
import M from "materialize-css";

const NewTaskForm = ({ onNewTask }) => {
    M.AutoInit();
    const [input, setInput] = useState("");
    const handleInput = (e) => {
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
            <form
                onSubmit={handleSubmit}
                className=" indigo lighten-3 valign-wrapper"
            >
                <div className="  input-field inline col s8 offset-s1">
                    <input
                        value={input}
                        onChange={handleInput}
                        id="newTask"
                        type="text"
                        maxlength="65"
                    />
                    <label htmlFor="newTask">Add a new task</label>
                </div>
                <button className=" newTaskButton col offset-s1" type="submit">
                    <i className="material-icons medium">add_task</i>
                </button>
            </form>
        </div>
    );
};

export default NewTaskForm;
