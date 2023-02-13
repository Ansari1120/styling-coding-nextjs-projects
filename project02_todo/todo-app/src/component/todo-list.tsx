"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  IconButton,
  Input,
  SimpleGrid,
  List,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

async function Add(name: any, refresh?: any) {
  if (name.length > 0) {
    await fetch(`/api/todo/add`, {
      method: "POST",
      body: JSON.stringify({ name }),
    });
    refresh();
  } else {
    alert("input required !");
  }
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
    newTodo = todos.find((t: any) => t.id === id); // when todos id matched with triggered id of edit todo function of edit todo IconButton return it
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
      <Box textAlign={"center"}>
        {
          //add Input
          toggleSubmit ? (
            <Input
              mb="20px"
              width={{ base: "170px", md: "200px", lg: "400px" }}
              placeholder="add text"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          ) : (
            //edit Input
            <Input
              width={{ base: "170px", md: "200px", lg: "400px" }}
              mb="20px"
              variant="filled"
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
          //add IconButton
          toggleSubmit ? (
            <IconButton
              w={"50px"}
              h={"30px"}
              ml="40px"
              mb="5px"
              title="add item"
              icon={<AddIcon />}
              onClick={async () => {
                await Add(name, router.refresh);
                setName("");
              }}
              aria-label={""}
            >
              Insert
            </IconButton>
          ) : (
            //edit IconButton
            <IconButton
              icon={<EditIcon />}
              w={"50px"}
              h={"30px"}
              ml="40px"
              mb="5px"
              title="update item"
              onClick={async () => {
                await updateEditedTodo(EditItemID, Editname, router.refresh);

                setTogggleSubmit(true);
                setEditItemID(null);
                setEditName("");
              }}
              aria-label={""}
            >
              Edit
            </IconButton>
          )
        }

        {/*  ............................................Todo list.......................................  */}
        <SimpleGrid
          bg="rgba(218, 218, 218, 0.8)"
          minW="300px"
          margin={"auto"}
          spacing="8"
          p="10"
          rounded="lg"
          color="gray.950"
          // marginLeft={"200"}
          // marginRight={"200"}
        >
          <Box boxShadow="dark-lg" padding="6" rounded="md" bg="gray.300">
            {todos.map((t: any, i: any) => {
              return (
                <List
                  marginX={"auto"}
                  style={{
                    color: t.isDone ? "green" : "black",
                    textDecoration: t.isDone ? "line-through" : "",
                    fontStyle: "oblique",
                    listStyle: "none",
                    fontWeight: "bold",
                    borderBottom: "2px solid black",
                  }}
                  marginBottom={"2"}
                  key={t.id}
                >
                  <div>
                    {i}
                    {" - "}
                    {<Todo todo={t} />}
                  </div>
                </List>
              );
            })}
          </Box>
        </SimpleGrid>
        {<br />}
        {<br />}
        {todos.length === 0 && <label>No Tasks Added Yet !</label>}
      </Box>
    </div>
  );
}

function Todo({ todo }: any) {
  const router = useRouter();
  return (
    <>
      <input
        style={{
          marginRight: "8px",
        }}
        type="checkbox"
        onChange={(e) => updatetodo(todo.id, router.refresh, e.target.checked)}
        checked={todo.isDone}
      />
      <span>{todo.name}</span>

      <Stack direction={"row"} justifyContent={"center"} marginY="2">
        <IconButton
          icon={<DeleteIcon />}
          w={"50px"}
          h={"30px"}

          onClick={() => DeleteTodo(todo.id, router.refresh)}
          aria-label={""}
        >
          Discard !
        </IconButton>

        <IconButton
          icon={<EditIcon />}
          w={"50px"}
          h={"30px"}
          
          onClick={() => editTodo(todo.id)}
          aria-label={""}
        >
          Edit
        </IconButton>
      </Stack>
    </>
  );
}
