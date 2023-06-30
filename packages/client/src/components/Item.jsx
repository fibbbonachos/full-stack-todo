import TodoApp from "./TodoApp";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function Item({ value, handleDelete, handleComplete }) {
    const [isChecked, setIsChecked] = useState(false);

    const checkHandler = () => {
        setIsChecked(value.completed);
    };

    return (
        <div
            id={value.id}
            className="itemSection bg-zinc-700 rounded-xl drop-shadow-xl w-full flex p-6 my-6"
        >
            <div className="itemCheckboxSection">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                        handleComplete(value.id);
                        checkHandler();
                    }}
                />
            </div>
            <div className="itemTextSection px-4 w-full">{value.message}</div>
            <div className="deleteButtonSection text-center">
                <button
                    onClick={() => handleDelete(value.id)}
                    className="deleteButton"
                >
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </button>
            </div>
        </div>
    );
}
