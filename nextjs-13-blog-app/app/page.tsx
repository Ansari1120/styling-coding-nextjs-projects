import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { posts } from "../data/posts";
const inter = Inter({ subsets: ["latin"] });

type Posts = {
  id: string;
  title: string;
  date: string;
};
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Home</h1>
      </div>
      <div>
        <div>
          {posts.map(({ id, title, date }: Posts) => (
            <div key={id}>
              <Link href={`/post/${id}`}>{title}</Link>
              <br />
              <p>{date}</p>
              <br />
            </div>
          ))}
        </div>
      </div>
      <Link href="/post">Posts</Link>

      <Link href="/account">Account</Link>
    </main>
  );
}
