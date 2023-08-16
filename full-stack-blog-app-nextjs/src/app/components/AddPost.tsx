"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import BASE_URL from "@/lib/URL";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
interface userType {
  title?: string;
  imageSrc?: string;
  description?: string;
  authorImg?: string;
  authorName?: string;
  blogLikes?: number;
  session?: any;
}
const AddPost = (props: userType) => {
  const { session } = props;
  const router = useRouter();
  const [openModal, setOpenModal] = useState<any>(false);
  const [userInput, setUserInput] = useState<userType>({
    title: "",
    imageSrc: "",
    description: "",
    authorImg: session?.user?.image,
    authorName: session?.user?.name,
    blogLikes: 0,
  });
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast.loading("Adding Post please wait.... 🚀", { id: "1" });
    axios
      .post(`http://localhost:3000/api/post`, userInput)
      .then((res) => {
        console.log(res);
        toast.success("Blog Post Added Sucessfully ");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUserInput({
          title: "",
          description: "",
          imageSrc: "",
        });
        setOpenModal(false);
        router.refresh();
      });
  };
  const setCustomValue = (id: any, value: any) => {
    setUserInput((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };
  // useEffect(() => {
  //   async function getSession() {
  //     const session:any = await getServerSession(options);
  //     setAdminSession(session);
  //   }
  //   getSession();
  // }, []);
  return (
    <div>
      <Toaster />
      <button
        onClick={() => setOpenModal(true)}
        className="bg-blue-500 text-white p-3 cursor-pointer rounded-md"
      >
        Add New Post
      </button>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3 ">Add New Post</h1>
          <div>
            <ImageUpload
              value={userInput.imageSrc || ""}
              onChange={(value) => setCustomValue("imageSrc", value)}
            />
          </div>
          <input
            type="text"
            placeholder="title"
            name="Title"
            className="w-full p-2 mb-2 rounded-md"
            value={userInput.title || ""}
            onChange={(e) => {
              setUserInput({ ...userInput, title: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="description"
            name="Description"
            className="w-full p-2 mb-2 rounded-md"
            value={userInput.description || ""}
            onChange={(e) => {
              setUserInput({ ...userInput, description: e.target.value });
            }}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPost;
