"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function Add(name: any, refresh: any) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button
        onClick={async () => {
          await Add(name, router.refresh);
          setName("");
        }}
      >
        Insert
      </button>
    </div>
  );
}
