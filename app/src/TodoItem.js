import React, { useState, useRef, useEffect } from "react";


function TodoItem(props) {
    const itemStyle = { textDecoration: props.checked ? 'line-through' : 'none' };
    const editStyle = { visibility: props.isItemEditing ? 'visible' : 'hidden' };
    const staticStyle = { visibility: props.isItemEditing ? 'hidden' : 'visible' };
    
    /**
     * blk-0x00 init: global to local 
     */
    const [title, setTitle] = useState(props.itemTitle);
    /**
     * 24-11-30
     * keyword
     * react children change parent state
     */
    const [isEditing, setEditing] = useState(props.isItemEditing);
    // blk-0x00 end

    /**
     * blk-0x01 init: useRefs
     */
    const refTitleIpt = useRef(null);
    // blk-0x01 end

    /**
     * blk-0x02 interact funcs
     */
    const toggleCheck = () => {
        
        props.setTodos(prev => {
            const newTodos = prev.map((item) => {
                const newItem = {...item}
                if (newItem.id === props.id){
                    newItem.checked = !newItem.checked
                }
                return newItem
            })
            
            return newTodos
        });
    }

    const onDelete = () => {
        props.setTodos(prev => {
            const newary = prev.filter((eleInLst) => {
                return props.id !== eleInLst.id;
            });
            return newary;
        });
    }

    const startEdit = () => {
        props.setTodos(prev => {
            const newTodos = prev.map((item) => {
                const newItem = {...item}
                if (newItem.id === props.id){
                    setEditing(!isEditing)
                }
                return newItem
            })
            
            return newTodos
        });
    }

    const [checked, setChecked] = React.useState(false);
    /*
     * ERROR
     */
    // setChecked(props.checked);
    // checked = props.checked;

    {
        /***
         * Q: can i write css here for temp test?
         * Ref: https://styled-components.com/
         * continue wtih 241019-002
         */
    }

    // Display
    // https://tailwindcss.com/docs/display


    // const editStyle = {visibility: isEditing ? 'visible' : 'hidden'};
    // const editStyle = {display: isEditing ? 'inline' : 'none'};
    // const staticStyle = {visibility: isEditing ? 'hidden' : 'visible'};
    // const staticStyle = {display: isEditing ? 'none' : 'inline'};

    // Todo: use index
    // const trigger = () => setChecked((state) => !state);
    // const trigger = (state) => {state = !state};

    const onEdit = () => {
        startEdit();
        focusIpt();
    }
    const onEditComplete = () => {
        props.setTodos(prev => {
            const newary = [...prev];
            newary[props.id] = { 
                ...newary[props.id], 
                itemTitle: title
            }
            return newary;
        });
        startEdit();
    }
    const onEditCancel = () => {
        startEdit();
        setTitle(props.itemTitle);
    }
    // blk-0x02 end

    /**
     * blk-0x03 normal funcs
     */
    const focusIpt = () => {
        refTitleIpt.current && refTitleIpt.current.focus()
    }
    useEffect(() => {
        if(isEditing){
            focusIpt();
        }
    }, [isEditing]);
    // blk-0x03 end


    return (
        <div style={{ display: 'flex' }}>
            {
                /**
                 * 24-12-14 how to set default style and append by boolean condition
                 */
            }
            <button style={Boolean(isEditing) ? { visibility: "hidden" } : {}}>Drag block</button>
            <input style={Boolean(isEditing) ? { visibility: "hidden" } : {}}
                onChange={toggleCheck}
                checked={props.checked}
                type="checkbox">
            </input>
            {
                Boolean(isEditing) ?
                    <input
                        ref={refTitleIpt}
                        type="text"
                        value={title}
                        style={{ flex: '1' }}
                        onChange={
                            (e) => setTitle(e.target.value)
                        }
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                onEditComplete();
                            }else if (e.key === 'Escape') {
                                onEditCancel();
                            }
                        }}
                    // Todo: isEditing evnet
                    // https://react.dev/reference/react-dom/components/input
                    // Ref: https://medium.com/itsoktomakemistakes/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E4%BD%BF%E7%94%A8-react-%E5%AF%AB%E5%87%BA%E5%B8%B8%E8%A6%8B%E7%9A%84-input-%E5%85%83%E4%BB%B6-3a0326aa4fb6
                    >
                    </input> :
                    <label style={{ ...itemStyle, flex: '1' }}>{props.itemTitle}</label>
            }
            <div style={{ width: '100px' }}>
            {Boolean(isEditing) && <button onClick={onEditComplete}>o</button>}
            {Boolean(isEditing) && <button onClick={onEditCancel}>x</button>}
                {Boolean(!isEditing) && 
                    <button onClick={onEdit}>Edit</button>
                }
                {Boolean(!isEditing) && <button onClick={onDelete}>del</button>}
            </div>
        </div>
    )
}




export default TodoItem;