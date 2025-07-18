// import './App.css';
import React, { useState, useRef, useEffect, act } from "react";
import TodoItem from "../TodoItem";
import TodoItemAdder from "../TodoItemAdder";

import { DndContext } from "@dnd-kit/core";

import { arrayMove, SortableContext } from "@dnd-kit/sortable";

import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

// 241019-002: Module not found: Error: Can't resolve 'styled-components'
// import styled from 'styled-components';
// https://styled-components.com/docs/basics#installation
// status 關聯

function App() {
  const [title, setTitle] = useState("TodoList");

  // Todo: How to use setTodos to get data from database or file
  // Adding status for judging adding or editing
  const [todos, setTodos] = useState([
    { id: 1, itemTitle: "auto todo 1", isChecked: true, isEditing: false },
    { id: 2, itemTitle: "auto todo 2", isChecked: false, isEditing: false },
    {
      id: 3,
      itemTitle: "auto todo 3 to isEditing",
      isChecked: false,
      isEditing: false,
    },
  ]);

  const idxCnt = useRef(Math.max(...todos.map((todo) => todo.id)) + 1);

  /**
   * 可共用 EndEdit 部分內容
   */
  const startEdit = (id) => {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.isEditing = true;
        } else {
          newItem.isEditing = false;
        }
        return newItem;
      });

      return newTodos;
    });
  };

  const delItem = (id) => {
    setTodos((prev) => {
      const newary = prev.filter((eleInLst) => {
        return id !== eleInLst.id;
      });
      return newary;
    });
  };

  const doEditComplete = (id, title) => {
    console.log("doEditComplete test", id, title);
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.itemTitle = title;
        }
        return newItem;
      });

      return newTodos;
    });
  };

  const doToggleCheck = (id) => {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.isChecked = !newItem.isChecked;
        }
        return newItem;
      });

      return newTodos;
    });
  };

  const endEdit = (id) => {
    setTodos((prev) => {
      const newTodos = prev.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.isEditing = false;
          // isEditing = false;
        }
        return newItem;
      });

      return newTodos;
    });
  };

  // close all edit
  const closeAllEditing = () => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((item) => {
        const newItem = { ...item };
        newItem.isEditing = false;
        return newItem;
      });

      return newTodos;
    });
  };

  const doAddComplete = (addingItem) => {
    console.log(" doAddComplete 001: ", idxCnt.current);
    idxCnt.current = idxCnt.current + 1;
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: idxCnt.current,
          itemTitle: addingItem,
          isChecked: false,
          isEditing: false,
        },
      ];
    });
    console.log(" doAddComplete 002: ", idxCnt.current);
    closeAllEditing();
  };

  const onCheckAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo /* itemTitle: "auto todo 1", isChecked: true, isEditing: false */,
        isChecked: true,
      }))
    );
  };

  const onUncheckAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo /* itemTitle: "auto todo 1", isChecked: true, isEditing: false */,
        isChecked: false,
      }))
    );
  };

  const onDelAll = () => {
    setTodos([]);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id != over.id) {
      setTodos((item) => {
        const oldIdx = todos.findIndex((item) => item.id === active.id);
        const newIdx = todos.findIndex((item) => item.id === over.id);
        return arrayMove(todos, oldIdx, newIdx);
      });
    }
  };

  return (
    <div>
      <div id="app">{title}</div>
      <div id="toolbar">
        <button onClick={onCheckAll}>Check all</button>
        <button onClick={onUncheckAll}>Uncheck all</button>
        <button onClick={onDelAll}>Delete all</button>
      </div>
      <div id="todolist" style={{ width: "400px" }}>
        <DndContext
          onDragStart={() => {}}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis]}
        >
          <SortableContext items={todos}>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                itemTitle={todo.itemTitle}
                isChecked={todo.isChecked}
                isEditing={todo.isEditing}
                id={todo.id}
                startEdit={startEdit}
                delItem={delItem}
                doToggleCheck={doToggleCheck}
                doEditComplete={doEditComplete}
                endEdit={endEdit}
              />
            ))}
          </SortableContext>
        </DndContext>

        <TodoItemAdder doAddComplete={doAddComplete} />
      </div>
    </div>
  );
}

export default App;
