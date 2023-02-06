// "use client"
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });
//in file system based routing we need to create links between pages to navigate between page to page.
// instead of using <a></a> anchor text to navigate laods whole page we import link component feature from nextjs
// so this linke refresh at client side nighter browser or server side.

// we can also have another option for navigation called useRouter which is genrally used with buttons for
//onlick events handling , buttons navigation with inputs data fetching responsing etc inside functions.
//in order to navigate on function call.

// button is a client component.

// by default components are server side components

// we need to tell next js it is client component in order to use component. so we add "use client" at top of the file
export default function Post() {
  // const router = useRouter();
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>Posts</h1>
        </div>
        <br />
        <br />
        <Link href="./">Back to Home</Link>
        {/* <button onClick={()=> router.push('/')}>Back to home</button> */}
      </main>
    </>
  );
}

// if we have many pages we organize them in the form of route groups
// route groups are the folder comes between main folder and sub folder looks like (abc) or [abc]
