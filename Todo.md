# Todo

## design

drawio: [google drive](https://drive.google.com/file/d/1sfAMHRo16VyNzWzhUfj2MunxXNTCaqyw/view)

folder: [google drive](https://drive.google.com/drive/u/0/folders/1TSZwPIfpwObc9920vAAA2lFXXTkqkBTR)

## draggable list

- react-sortablejs
  - https://www.npmjs.com/package/react-sortablejs
- Sortable
  - https://github.com/SortableJS/Sortable#options
- react-beautiful-dnd
  - https://github.com/atlassian/react-beautiful-dnd
- React DnD
  - https://react-dnd.github.io/react-dnd/docs/api/use-drag
- react-draggable
  - https://www.npmjs.com/package/react-draggable
  - https://github.com/react-grid-layout/react-draggable
- dnd-kit
  - https://www.npmjs.com/package/@dnd-kit/core
  - https://github.com/clauderic/dnd-kit
  - https://www.youtube.com/watch?v=wmk50PEsVrs

## issue

- [ ] complete all button function -> checkedall
- [ ] cancel all button function
- [ ] delete all button function
- [ ] drag block
- [x] default checked cannot change
- [x] new item row with no checkbox and drag block
- [ ] change edit panel

## function

- [ ] sort list by done / create date / alphabet
- [ ] check if task exist
- [ ] export / import with md or csv

## Checksheet

### TodoItem

- [x] Click Check box and delete line
- [x] Edit Button
- [x] Del Button
- [x] Circle Button
- [x] X button
- [x] Plus Button

## Edit

- change icon
  - click "pencil" to edit
  - click "x" to del

## Add

- click "+" button to show new line
  - default:
    - only a "+" button
  - new line
    - edit field
    - ok button
    - cancel button
  - if click cancel all editing line
  - how to reuse ok and cancel button

## Memo

```react
/***
 * Q: can i write css here for temp test?
 * Ref: https://styled-components.com/
 * continue wtih 241019-002
 */


// useEffect(() => {
//     setEditing(props.isItemEditing)
// }, [props.isItemEditing]);


// const cancelAllEdit = (() => {
//     props.setTodos(prev => {
//         const newTodos = prev.map((item) => {
//             const newItem = {...item}
//             console.log(newItem.onEditCancel)
//             setTimeout(()=>{setEditing(false);}, 100);
//             newItem.isItemEditing = false;
//             return newItem;
//         })
//         return newTodos;
//     });
// });

// Todo: isEditing evnet
// https://react.dev/reference/react-dom/components/input
// Ref: https://medium.com/itsoktomakemistakes/%E6%89%8B%E6%8A%8A%E6%89%8B%E6%95%99%E4%BD%A0%E4%BD%BF%E7%94%A8-react-%E5%AF%AB%E5%87%BA%E5%B8%B8%E8%A6%8B%E7%9A%84-input-%E5%85%83%E4%BB%B6-3a0326aa4fb6
                    
// Display
// https://tailwindcss.com/docs/display
```
```
const renderBtns = () => {
    
    {/* <>
            {Boolean(props.isItemEditing) && <button onClick={onEditComplete}>o</button>}
            {Boolean(props.isItemEditing) && <button onClick={onEditCancel}>x</button>}
            {Boolean(!props.isItemEditing) && 
                <button onClick={onEdit}>Edit</button>
            }
            {Boolean(!props.isItemEditing) && <button onClick={onDelete}>del</button>}
        </> */
    }
    {
        // {/* Function Add */}
        // {Boolean(props.isaddingLine) && <button >+</button>}
        // {/* Function Edit */}
        // {Boolean(!props.isItemEditing) && 
        //     <button onClick={onEdit}>Edit</button>
        // }
        // {/* Function Delete */}
        // {Boolean(!props.isItemEditing) && <button onClick={onDelete}>del</button>}
        // {/* Function Complete */}
        // {Boolean(props.isItemEditing) && Boolean(!props.isaddingLine) && <button onClick={onEditComplete}>o</button>}
        // {/* Function Cancel */}
        // {Boolean(props.isItemEditing) && Boolean(!props.isaddingLine) && <button onClick={onEditCancel}>x</button>}
    }
    if (Boolean(props.isaddingLine)) {
        console.log("rander + btn")
        return <button onClick={() => {
            if(title){
                // Ask
                props.addItemNew(title)
                
                // props.setTodos(prev => {
                //     const newTodos = prev.map((item) => {
                //         const newItem = {...item}
                //         if (newItem.id === props.id){
                //             newItem.itemTitle = title
                //         }
                //         return newItem
                //     })

                //     return newTodos
                // });
                // endEdit();
            }else{
                console.log("Input is empty")
            }
        }}>+</button>;
    }
    else{
        return (Boolean(isEditing) ? (
            <>
                <button onClick={onEditComplete}>o</button>
                <button onClick={onEditCancel}>x</button>
            </>
        ) : (
            <>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>del</button>
            </>
        ))
    }
};
```