"use client";
import Todo from "./todo";
import { useState, useEffect } from "react";

const getTodos = async () => {
  let todos = await fetch("/api/todo/list");
  return todos.json();
};

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todoData = await getTodos();
      setTodos(todoData.todos);
    };

    fetchData();
  }, [todos]);

  return (
    <>
      {todos.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {todos.map((t: any) => {
            return (
              <li
                style={{
                  color: t.isDone ? "green" : "orange",
                  fontStyle: "oblique",
                  listStyle: "none",
                  padding: "5px 0",
                }}
                key={t.id}
              >
                {<Todo todo={t} />}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
