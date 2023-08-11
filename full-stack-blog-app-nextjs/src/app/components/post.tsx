"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { Trash2, FileEdit } from "lucide-react";
import Image from "next/image";
import ImageUpload from "./ImageUpload";
import BASE_URL from "@/lib/URL";
interface userType {
  title: string;
  description: string;
  imageSrc: string;
  authorImg?: string;
  authorName?: string;
  blogLikes?: number;
  session?: any;
}
const Post = (props: any) => {
  const router = useRouter();
  const { post,session } = props;
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [postToEdit, setPostToEdit] = useState<userType>({
    title: post.title,
    description: post.description,
    imageSrc: post.imageSrc,
    authorImg: session?.user?.image,
    authorName: session?.user?.name,
    blogLikes: 0,
  });
  const [openModalDelete, setOpenModalDelete] = useState(false);
  console.log(postToEdit);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.loading("Editing Post please wait.... 🚀", { id: post.id });
    axios
      .patch(`/api/post/${post.id}`, postToEdit)
      .then((res) => {
        console.log(res);
        toast.success("Blog Edited Successfully", { id: post.id });
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalEdit(false);
      });
  };
  const handleDelete = () => {
    toast.loading("Deleting Post please wait.... 🚀", { id: post.id });
    axios
      .delete(`/api/post/${post.id}`)
      .then((res) => {
        console.log(res);
        toast.success("Blog Deleted Successfully", { id: post.id });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenModalDelete(false);
        router.refresh();
      });
  };

  const setCustomValue = (id: any, value: any) => {
    setPostToEdit((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div
      className="my-5 bg-slate-300 bg-opacity-50 rounded-lg border-2 p-4"
      key={post.id}
    >
      <div>
        <Toaster />
        <div className="flex gap-2 justify-between items-center">
          {post.imageSrc !== null ? (
            <Image
              className="rounded-md"
              src={post.imageSrc}
              width={400}
              height={400}
              alt="Image"
            />
          ) : (
            <p>No image available</p>
          )}

          <div className="w-[530px] flex flex-col gap-4 leading-[1.5]">
            <h1 className="text-2xl font-semibold">{post.title}</h1>

            <p className="text-xl pt-2">{post.description}</p>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <button
          onClick={() => setOpenModalEdit(true)}
          className="text-blue-500 mr-3"
        >
          <FileEdit />
        </button>
        {openModalEdit && (
          <Modal openModal={openModalEdit} setOpenModal={setOpenModalEdit}>
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-2xl pb-3">Edit Post</h1>
              <div>
                <ImageUpload
                  value={postToEdit.imageSrc}
                  onChange={(value) => setCustomValue("imageSrc", value)}
                />
              </div>
              <input
                type="text"
                placeholder="title"
                name="Title"
                className="w-full p-2 mb-2 rounded-md"
                value={postToEdit.title || ""}
                onChange={(e) => {
                  setPostToEdit((prevState: any) => ({
                    ...prevState,
                    title: e.target.value,
                  }));
                }}
              />
              <input
                type="text"
                placeholder="description"
                name="Description"
                className="w-full p-2 mb-2 rounded-md"
                value={postToEdit.description || ""}
                onChange={(e) => {
                  setPostToEdit((prevState: any) => ({
                    ...prevState,
                    description: e.target.value,
                  }));
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
        )}

        <button
          onClick={() => setOpenModalDelete(true)}
          className="text-red-500 mr-3"
        >
          <Trash2 />
        </button>
        <Modal openModal={openModalDelete} setOpenModal={setOpenModalDelete}>
          <h1 className="text-2xl pb-3">
            Are You Sure You Want to Delete this Post?
          </h1>
          <div>
            <button
              onClick={handleDelete}
              className="text-blue-700 font-bold mr-5"
            >
              Yes
            </button>
            <button
              onClick={() => setOpenModalDelete(false)}
              className="text-blue-700 font-bold mr-5"
            >
              No
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Post;
