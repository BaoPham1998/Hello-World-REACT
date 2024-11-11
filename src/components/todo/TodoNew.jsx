const TodoNew = (props) => {
    console.log(props);
    const { addTodo } = props;
    addTodo("bao Pham");

    return (
        <div className="todo-new">
            <input type="text" className="todo-input" placeholder="Enter your task" />
            <button className="todo-button">Add</button>
        </div>
    )
}

export default TodoNew;