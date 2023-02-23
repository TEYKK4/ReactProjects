import React, {ChangeEvent} from 'react'
import './App.css'
import ToDoList from './ToDoList'

// Properties of the component App; properties are not able to change
type AppProp = {
    inputPlaceholder: string
};

// States of the component App; State are able to change
type AppState = {
    newTaskName: string
    tasks: string[]
};

class App extends React.Component<AppProp, AppState> {
    constructor(props: AppProp) {

        // calling of the base constructor
        super(props);

        // state initializing
        this.state = {
            newTaskName: "",
            tasks: []
        };

        // this is not undefined, this is App
        this.addTask = this.addTask.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
    }

    onInputChanged(e: ChangeEvent<HTMLInputElement>): void {
        // changing state
        this.setState({newTaskName: e.target.value});
    }

    // event of the button
    addTask(): void {
        this.state.tasks.push(this.state.newTaskName);
        this.forceUpdate();
    }

    // page
    render() {
        return (
            <>
                <input type="text" onChange={this.onInputChanged} placeholder={this.props.inputPlaceholder}/>
                <input type="button" value="Add task" onClick={this.addTask}/>
                <ToDoList tasks={this.state.tasks}></ToDoList>
            </>
        );
    }
}

// function App() {
//     const [count, setCount] = useState(0)
//
//     return (
//         <div className="App">
//             <div>
//                 <a href="https://vitejs.dev" target="_blank">
//                     <img src="/vite.svg" className="logo" alt="Vite logo"/>
//                 </a>
//                 <a href="https://reactjs.org" target="_blank">
//                     <img src={reactLogo} className="logo react" alt="React logo"/>
//                 </a>
//             </div>
//             <h1>Vite + React</h1>
//             <div className="card">
//                 <button onClick={() => setCount((count) => count + 1)}>
//                     count is {count}
//                 </button>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to test HMR
//                 </p>
//             </div>
//             <p className="read-the-docs">
//                 Click on the Vite and React logos to learn more
//             </p>
//         </div>
//     )
// }

export default App
