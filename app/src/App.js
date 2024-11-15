import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
// 241019-002: Module not found: Error: Can't resolve 'styled-components'
// import styled from 'styled-components';
// https://styled-components.com/docs/basics#installation
// status 關聯

function TodoItem(props) {
    // 241019-001: how to use call back with outer variable
    // const [checked, setChecked] = React.useState(false);
    // const [itemTitle, setItemTitle] = React.useState(false);
    const itemStyle = { textDecoration: props.checked ? 'line-through' : 'none' };
    const editStyle = { visibility: props.edit ? 'visible' : 'hidden' };
    const staticStyle = { visibility: props.edit ? 'hidden' : 'visible' };

    {
        /***
         * Q: can i write css here for temp test?
         * Ref: https://styled-components.com/
         * continue wtih 241019-002
         */
    }

    // Display
    // https://tailwindcss.com/docs/display


    // const editStyle = {visibility: props.edit ? 'visible' : 'hidden'};
    // const editStyle = {display: props.edit ? 'inline' : 'none'};
    // const staticStyle = {visibility: props.edit ? 'hidden' : 'visible'};
    // const staticStyle = {display: props.edit ? 'none' : 'inline'};

    // Todo: use index
    // const trigger = () => setChecked((state) => !state);
    const trigger = () => { };

    console.log(props);

    // checked = props.checked;
    // itemTitle = props.title;

    return (
        <div style={{ display: 'flex' }}>
            <button style={Boolean(props.edit) ? { visibility: "hidden" } : {}}>Drag block</button>
            <input style={Boolean(props.edit) ? { visibility: "hidden" } : {}}
                onChange={trigger}
                value={props.checked}
                type="checkbox">
            </input>
            {/* <label style={itemStyle}>{props.title}</label> */}
            {
                Boolean(props.edit) ?
                    <input
                        type="text"
                        value={props.title}
                        style={{ flex: '1' }}
                        // 241019-001: how to use call back with outer variable
                        // onChange={
                        //     (event) => this.setState
                        // }
                    // Todo: edit evnet
                    // https://react.dev/reference/react-dom/components/input
                    // Ref: https://medium.com/itsoktomakemistakes/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E4%BD%BF%E7%94%A8-react-%E5%AF%AB%E5%87%BA%E5%B8%B8%E8%A6%8B%E7%9A%84-input-%E5%85%83%E4%BB%B6-3a0326aa4fb6
                    >
                    </input> :
                    <label style={{ ...itemStyle, flex: '1' }}>{props.title}</label>
            }
            <div style={{ width: '100px' }}>
                {Boolean(props.edit) && <button>+</button>}
                {Boolean(!props.edit) && <button>edit</button>}
                {Boolean(!props.edit) && <button>del</button>}
            </div>
        </div>
    )
}

function App() {

    const [title, setTitle] = useState("TodoList");
    // const [todos, setTodos] = useState([]);

    // Todo: How to use setTodos to get data from database or file
    const todos = [
        { title: "auto todo 1", checked: true, edit: false },
        { title: "auto todo 2", checked: false, edit: false },
        { title: "auto todo 3 to edit", checked: false, edit: true },
    ]
    // const [checked, setChecked] = React.useState(true);
    // This is global function

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
                <div id="todolist" style={{ width: "400px" }}>
                    {
                        todos.map(
                            (todo) => (
                                <TodoItem title={todo.title} checked={todo.checked} edit={todo.edit} />
                                // <TodoItem title={todo.title} checked={todo.checked} edit={todo.edit} CALLBACK FUNC/>

                                /*
                                visibilty: https://segmentfault.com/a/1190000015116392
                                */
                                // Layout:
                                // expand
                                // flex

                                // <div>
                                //     {/* fix width */}
                                //     <button>Drag block</button>
                                //     {/* fix width */}
                                //     <input 
                                //         onChange={() => setChecked((state) => !state)}
                                //         value={todo.checked}
                                //         type="checkbox">
                                //     </input>
                                //     {/* expand width */}
                                //     <label style={{textDecoration: checked ? 'line-through' : 'none'}}>{todo.title}</label>
                                //     {/* fix width */}
                                //     <button>edit</button>
                                //     {/* fix width */}
                                //     <button>del</button>
                                // </div>

                            )
                        )
                    }
                    {/* <div>
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
                    </div> */}
                    {/* <div>
                        // { need to fix }
                        <button style={{ visibility: "hidden" }}>Drag block</button>
                        <input
                            style={{ visibility: "hidden" }}
                            type="checkbox">
                        </input>
                        //{ need to fix }
                        //{ <button style={{visibility: hidden}}>Drag block</button> }
                        <input></input>
                        <button>+</button>
                    </div> */}
                </div>

                {/* <TodoItem /> */}
            </body>
        </html>
    );
}

export default App;
