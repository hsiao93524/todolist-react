import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

// function App() {

//     const styles = {
//         doneDoto: {
//         },
//     };
//     text-decoration-line: line-through
// }

// export default App;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "TodoList",
            todos: [],
        };
    }
    render() {


        return (
            <html>
                <head>
                </head>
            
                <body>
                    <div id="app">{this.state.title}</div>
                    <div id="todolist">
                        <div>
                            <button>Drag block</button>
                            <input type="checkbox"></input>
                            <label>todo 1</label>
                            <button>edit</button>
                            <button>del</button>
                        </div>
                        <div>
                            <button>Drag block</button>
                            <input type="checkbox" checked></input>
                            <label style={{textDecoration: 'line-through'}}>
                                todo 2
                            </label>
                            <button>edit</button>
                            <button>del</button>
                        </div>
                        <div>
                            <input></input>
                            <button>+</button>
                        </div>
                    </div>
                </body>
            </html>
        );
    }
}
