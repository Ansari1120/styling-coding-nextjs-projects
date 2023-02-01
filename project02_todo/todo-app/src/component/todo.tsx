"use client";
import { useRouter } from "next/navigation";
async function updatetodo(
  id: any,
  isDone: boolean,
  refresh: { (): void; (): void }
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

export default function Todo({ todo }: any) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        onChange={(e) => updatetodo(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>
      <button onClick={() => DeleteTodo(todo.id, router.refresh)}>
        Discard !
      </button>
    </>
  );
}
