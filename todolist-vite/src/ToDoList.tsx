import {Component} from "react";

type ToDoListProp = {
    tasks: string[]
}

class ToDoList extends Component<ToDoListProp> {
    constructor(props: ToDoListProp) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.tasks.map((t, n) => {
                    return <li>#{n + 1}: t</li>
                })}
            </ul>
        );
    }
}

export default ToDoList
