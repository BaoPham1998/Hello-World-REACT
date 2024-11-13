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


    const { todoList } = props;


    // const name = props.name;
    // const age = props.age;
    // const information = props.information;
    console.log(">>> check props", props)
    return (
        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log(">>> check map", item, index)
                return (
                    <div className={"todo-item"} key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}

export default TodoData;