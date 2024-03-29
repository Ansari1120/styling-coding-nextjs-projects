import SignOutButton from "./components/signOutButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import PublicBlogs from "./public_blogs/page";
export default async function Home() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/login");
  }
  return <PublicBlogs />;
}

{
  /* <div className="justify-center items-center mt-16 bg-scroll bg-my_bg_image bg-cover mx-auto ">
<h1 className="bg-orange-300 text-3xl font-bold p-4 rounded-md">
  Hey there! This is your homepage
</h1>
<p>{JSON.stringify(session)}</p>
<SignOutButton />
<PublicBlogs />
</div> */
}
