const TodoNew = (props) => {
    console.log(props);
    const { addTodo } = props;
    // addTodo("bao Pham");

    const handleClick = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    }
    return (
        <div className="todo-new">
            <input type="text" className="todo-input" placeholder="Enter your task"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button className="todo-button"
                onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoNew;