// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })

import AddTodos from "./add-todos";
import Listing from "./hawai";

export default function Home() {
  return (
    <>
      <div>
        <AddTodos />
      </div>
      <div>
      <Listing/>

      </div>
    </>
  );
}
