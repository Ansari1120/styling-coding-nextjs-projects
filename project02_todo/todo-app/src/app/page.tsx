// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import AddTodos from "../component/add-todos";
import TodoList from "../component/todo-list";

export default function Home() {
  return (
    <>
      <div>
        <AddTodos />
      </div>
      <div>
        <TodoList />
      </div>
    </>
  );
}
