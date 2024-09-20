import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

// function TodoItem(props) {
//     const [checked, setChecked] = React.useState(false);
//     const [itemTitle, setItemTitle] = React.useState(false);
//     const itemStyle = {textDecoration: checked ? 'line-through' : 'none'};
//     const trigger = () => setChecked((state) => !state);

//     checked = props.checked;
//     itemTitle = props.title;

//     return (
//         <div>
//             <button>Drag block</button>
//             <input 
//                 onChange={trigger}
//                 value={checked}
//                 type="checkbox">
//             </input>
//             <label style={itemStyle}>{itemTitle}</label>
//             <button>edit</button>
//             <button>del</button>
//         </div>
//     )
// }

function App() {

    const [title, setTitle] = useState("TodoList");
    // const [todos, setTodos] = useState([]);

    // Todo: How to use setTodos to get data from database or file
    const todos = [
        { title: "auto todo 1", checked: true},
        { title: "auto todo 2", checked: false},
    ]
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
                    {
                        todos.map(
                            (todo) => (
                                // return <TodoItem props={{title: todo.title, checked: todo.checked}} />;
                                
                                <div>
                                    <button>Drag block</button>
                                    <input 
                                        onChange={() => setChecked((state) => !state)}
                                        value={todo.checked}
                                        type="checkbox">
                                    </input>
                                    <label style={{textDecoration: checked ? 'line-through' : 'none'}}>{todo.title}</label>
                                    <button>edit</button>
                                    <button>del</button>
                                </div>

                            )
                        )
                    }
                    {/* Coponent props*/}
                    <div>
                        <button>Drag block</button>
                        <input 
                            onChange={() => setChecked((state) => !state)}
                            value={checked}
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
                            value={checked}
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
