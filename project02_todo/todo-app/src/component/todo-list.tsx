"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styling/styling.css";
async function Add(name: any, refresh?: any) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

const getTodos = async () => {
  let todos = await fetch("/api/todo/list", {
    method: "GET",
  });
  return todos.json();
};

async function updatetodo(
  id: any,
  refresh: { (): void; (): void },
  isDone: boolean
) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
}
async function DeleteTodo(id: any, refresh: { (): void; (): void }) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
}
//masla todo api mn h , usmyn put method ni h
async function updateEditedTodo(id: any, name: any, refresh: any) {
  await fetch(`/api/todo/UpdateName`, {
    method: "PUT",
    body: JSON.stringify({ id, name }),
  });
  refresh();
}

let editTodo: any;
export default function AddTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  let [todos, setTodos]: any = useState([]);
  let [toggleSubmit, setTogggleSubmit] = useState(true);
  let [EditItemID, setEditItemID] = useState(null);
  let [Editname, setEditName] = useState("");

  let newTodo: any;
  //edit earlier todo
  editTodo = (id: any) => {
    newTodo = todos.find((t: any) => t.id === id); // when todos id matched with triggered id of edit todo function of edit todo button return it
    setEditName(newTodo.name); // set edit todo fetched(newtodo) name into set edit item id
    setTogggleSubmit(false);
    setEditItemID(newTodo.id);
  };
  useEffect(() => {
    const fetchData = async () => {
      const check = await getTodos();
      setTodos(check.todos);
    };
    fetchData();
  }, [todos]);

  return (
    <div>
      {
        //add input
        toggleSubmit ? (
          <input
            placeholder="add text"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        ) : (
          //edit input
          <input
            placeholder="change Text"
            type="text"
            onChange={(e) => {
              setEditName(e.target.value);
            }}
            value={Editname}
          />
        )
      }

      {
        //add button
        toggleSubmit ? (
          <button
            title="add item"
            onClick={async () => {
              await Add(name, router.refresh);
              setName("");
            }}
          >
            Insert
          </button>
        ) : (
          //edit button
          <button
            title="update item"
            onClick={async () => {
              await updateEditedTodo(EditItemID, Editname, router.refresh);

              setTogggleSubmit(true);
              setEditItemID(null);
              setEditName("");
            }}
          >
            edit
          </button>
        )
      }

      {/*  ............................................Todo list.......................................  */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((t: any, i: any) => {
          return (
            <li
              style={{
                color: t.isDone ? "green" : "black",
                fontStyle: "oblique",
                listStyle: "none",
                padding: "5px 0",
                fontWeight: "bold",
              }}
              key={t.id}
              className="card"
            >
              {i}
              {<Todo todo={t} />}
            </li>
          );
        })}
      </ul>
      {<br />}
      {<br />}
      {todos.length === 0 && <label>No Tasks Added Yet !</label>}
    </div>
  );
}

function Todo({ todo }: any) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => updatetodo(todo.id, router.refresh, e.target.checked)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button onClick={() => DeleteTodo(todo.id, router.refresh)}>
        Discard !
      </button>
      {<button onClick={() => editTodo(todo.id)}>edit</button>}
    </>
  );
}
