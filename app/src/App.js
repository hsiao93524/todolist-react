import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

    const [title, setTitle] = useState("TodoList");
    const [todos, setTodos] = useState([]);
    const [checked, setChecked] = React.useState(true);

    // const styles = {
    //     doneDoto: {
    //     },
    // };
    // text-decoration-line: line-through

    return (
        <html>
            <head>
            </head>
        
            <body>
                <div id="app">{title}</div>
                <div id="todolist">
                    {/* Coponent props*/}
                    <div>
                        <button>Drag block</button>
                        <input 
                            onChange={() => setChecked((state) => !state)}
                            defaultChecked={checked}
                            type="checkbox">
                        </input>
                        <label>todo 1</label>
                        <button>edit</button>
                        <button>del</button>
                    </div>
                    {/* Coponent props*/}
                    <div>
                        <button>Drag block</button>
                        <input 
                            onChange={() => setChecked((state) => !state)}
                            defaultChecked={checked}
                            type="checkbox">
                        </input>
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

export default App;
