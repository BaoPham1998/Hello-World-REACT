const TodoData = (props) => {
    //props là một object {}
    // {
    //     name:"Bao Pham",
    //     age: 25,
    //     information: {
    //         address: "HCM",
    //         country: "Japan",
    //     }
    // }


    const { name, age, information, funcTodo, todoList } = props;


    // const name = props.name;
    // const age = props.age;
    // const information = props.information;
    console.log(">>> check props", props)
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React {age}</div>
            <div>Watching Youtube {information.country}</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;