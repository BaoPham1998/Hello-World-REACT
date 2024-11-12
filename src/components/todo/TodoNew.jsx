import { useState } from "react";

const TodoNew = (props) => {

    //useState hook
    // const valueInput = "baopham";

    const [valueInput, setValueInput] = useState("baopham")
    const { addTodo } = props;




    const handleClick = () => {
        addTodo(valueInput);
        setValueInput("");
    }
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text" className="todo-input" placeholder="Enter your task"
                onChange={(event) => { handleOnChange(event.target.value) }}
                value={valueInput}
            />
            <button className="todo-button"
                onClick={handleClick}>Add</button>
            <div>
                my text input is : {valueInput}
            </div>
        </div>
    )
}
export default TodoNew;