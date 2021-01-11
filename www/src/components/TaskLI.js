import { useState } from "react";
import M from "materialize-css";

const TaskLI = ({ thisTask, onTaskDelete, onTaskCheck, onTaskUpdate }) => {
    const [editting, setEditting] = useState(false);
    const [updateInput, setUpdateInput] = useState(thisTask.taskName);
    M.AutoInit();

    const handleEditButtonClick = () => {
        setEditting(!editting);
        setUpdateInput(thisTask.taskName);
    };

    const handleUpdateButtonClick = (e) => {
        e.preventDefault();
        onTaskUpdate(thisTask, updateInput);
        setEditting(!editting);
    };

    const handleUpdateInput = (e) => {
        setUpdateInput(e.target.value);
    };

    const handleDeleteButtonClick = () => {
        onTaskDelete(thisTask);
    };

    const handleCheckboxClick = () => {
        onTaskCheck(thisTask);
    };

    //<div onClick={handleCheckButtonClick}className={`secondary-content  left`}></div>

    if (!editting)
        return (
            <li
                className={`collection-item ${
                    thisTask.done ? " green lighten-4 " : ""
                }`}
            >
                <div>
                    <label>
                        <input
                            type="checkbox"
                            defaultChecked={thisTask.done ? "checked" : ""}
                            checked={thisTask.done ? "checked" : ""}
                            onClick={handleCheckboxClick}
                            className={`secondary-content  `}
                        />
                        <span
                            className={
                                thisTask.done
                                    ? "checkbox-item-unchecked"
                                    : "checkbox-item-checked"
                            }
                        >
                            {thisTask.taskName}
                        </span>
                    </label>

                    <div
                        onClick={handleDeleteButtonClick}
                        className={`secondary-content`}
                    >
                        <i className="material-icons trashButton">delete</i>
                    </div>
                    <div
                        onClick={handleEditButtonClick}
                        className={`secondary-content`}
                    >
                        <i className="material-icons editButton">edit</i>
                    </div>
                </div>
            </li>
        );
    else
        return (
            <li
                className={`collection-item ${
                    thisTask.done ? "done green lighten-4 " : ""
                }`}
            >
                <div className="input-field edit-field">
                    <input
                        value={updateInput}
                        onChange={handleUpdateInput}
                        onSubmit={handleUpdateButtonClick}
                        type="text"
                        className="active  update-input"
                        maxlength="65"
                    />
                    <div className="valign-wrapper right">
                        <div
                            onClick={handleUpdateButtonClick}
                            className="secondary-content "
                            type="submit"
                        >
                            <i className="material-icons updateButton">check</i>
                        </div>
                        <div
                            onClick={handleEditButtonClick}
                            className="secondary-content "
                        >
                            <i className="material-icons cancelUpdateButton">
                                close
                            </i>
                        </div>
                    </div>
                </div>
            </li>
        );
};

export default TaskLI;
