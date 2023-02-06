import { posts } from "../../../../data/posts";
// all posts present above value posts

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

//Dynamic posts generations.
async function getPosts(id: string) {
  const post = posts.find((post) => post.id === id);
  return post;
}

// we need to tell next js it is client component in order to use component. so we add "use client" at top of the file
export default async function Posts({ params }: { params: { id: string } }) {
  //id value in the browser caught in params
  // const router = useRouter();
  const { id } = params; //get id value after destructuring from object params.
  const post = await getPosts(id);
  return (
    <>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1>{post!.title}</h1>
          <br />
          <br />
          <h1>{post!.date}</h1>
        </div>
      </main>
    </>
  );
}

// if we have many pages we organize them in the form of route groups
// route groups are the folder comes between main folder and sub folder looks like (abc) or [abc]

//generating static params as well its a next js built in function

export async function generateStaticParams() {
  //valid ids that next js generate statically when the first time page loads and keep it to itself
  //provided when its id called statically

  const ids: string[] = ["1", "2"];
  return ids.map((id) => ({ id: id })); //return triggered id as an object from array ids
  //next js trying to generate posts at builtime
}
