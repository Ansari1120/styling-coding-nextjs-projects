"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import ImageUpload from "./ImageUpload";
import ReactQuill from "react-quill"; // Import the react-quill library
import "react-quill/dist/quill.snow.css";
import "./page.module.css";
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
  const maxHeight = window.innerHeight * 0.8; // Set a maximum height (80% of screen height)
  const [openModal, setOpenModal] = useState<any>(false);
  const [userInput, setUserInput] = useState<userType>({
    title: "",
    imageSrc: "",
    description: "",
    authorImg: session?.user?.image,
    authorName: session?.user?.name,
    blogLikes: 0,
  });

  const handleEditorChange = (content: string) => {
    setUserInput({ ...userInput, description: content });
  };

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
          <button
            type="submit"
            className="bg-blue-700 text-white px-5 py-2 rounded-md float-right"
          >
            Submit
          </button>
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
        </form>
        <div
          className="overflow-y-auto overflow-x-auto w-full"
          style={{ maxHeight: `${maxHeight}px` }}
        >
          <ReactQuill
            className="bg-white mb-2 rounded-md"
            value={userInput.description || ""}
            onChange={handleEditorChange}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddPost;
