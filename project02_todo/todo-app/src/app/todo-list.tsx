import Todo from "./todo";
import { useState, useEffect } from "react";
// const getTodos = async () => {
//   let todos = await fetch("http://localhost:3001/api/todo/list");
//   return todos.json();
// };
// export default async function TodoList() {
//   const { todos } = await getTodos();
//   return (
//     <>
//       {
//         <ul style={{ listStyleType: "none", padding: 0 }}>
//           {todos.map((t: any) => {
//             return (
//               <li
//                 style={{
//                   color: t.isDone ? "green" : "orange",
//                   fontStyle: "oblique",
//                   listStyle: "none",
//                   padding: "5px 0",
//                 }}
//                 key={t.id}
//               >
//                 <Todo todo={t} />
//               </li>
//             );
//           })}
//         </ul>
//       }
//     </>
//   );
// }

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("http://localhost:3001/api/todo/list"); //fetching data from api
      const todos = await response.json();
      setTodos(todos);
    }

    fetchTodos();
  }, []);

  return (
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
            <Todo todo={t} />
          </li>
        );
      })}
    </ul>
  );
}
