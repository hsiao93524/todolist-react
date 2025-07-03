import React, { useState, useRef, useEffect } from "react";

function TodoItemAdder(props) {

    /**
     * blk-0x00 init: global to local 
     */
    const [title, setTitle] = useState(props.itemTitle);
    
    /**
     * blk-0x01 init: useRefs
     */
    const refTitleIpt = useRef(null);
    const focusIpt = () => {
        refTitleIpt.current && refTitleIpt.current.focus()
    }

    /**
     * blk-0x02 callback funcs
     */
    const onAddcomplete = () => {
        props.doAddComplete(title);
        // Todo : clear input
        // endEdit();
    }

    const endEdit = () => {
        props.setTodos(prev => {
            const newTodos = prev.map((item) => {
                const newItem = {...item}
                if (newItem.id === props.id){
                    newItem.isItemEditing = false;
                }
                return newItem
            })
            return newTodos
        });
    }

    /**
     * blk-0x04 other function
     */

    const renderAddBtns = () => {
        console.log("TodoItemAdder: rander + btn")
        return <button onClick={() => {
            if(title){
                props.doAddComplete(title)
            }else{
                console.log("Input is empty")
            }
        }}>+</button>;
    };

    return (
        <div style={{ display: 'flex' }}>
            <button style={{ visibility: "hidden" }}>Drag block</button>
            <input style={{ visibility: "hidden" }}
                type="checkbox">
            </input>
            {
                <input
                    ref={refTitleIpt}
                    type="text"
                    style={{ flex: '1' }}
                    onChange={
                        (e) => setTitle(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            onAddcomplete();
                        }
                    }}
                >
                </input>
            }
            <div style={{ width: '100px' }}>
                {
                    renderAddBtns()
                }
            </div>
        </div>
    )
}
export default TodoItemAdder;
