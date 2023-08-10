"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import BASE_URL from "@/lib/URL";
import Modal from "../components/Modal";
import ImageUpload from "../components/ImageUpload";
// import Modal from "./Modal";
// import ImageUpload from "./ImageUpload";
interface userType {
  name: string;
  email: string;
  image: string;
}
interface MyComponentProps {
  session: any;
  openEditSettings: boolean;
  setOpenEditSettings: any;
}
const AdminProfileSettings = (props: MyComponentProps) => {
  const { session, openEditSettings, setOpenEditSettings } = props;
  const router = useRouter();
  //   const searchParams = useSearchParams();
  //   const session: any = searchParams.get("session");
  const [openProfile, setOpenProfile] = useState(false);
  //   const [openEditSettings, setOpenEditSettings] = useState(false);
  console.log("payload", session);
  const [postToEdit, setPostToEdit] = useState<userType>({
    name: session?.user?.name,
    email: session?.user?.email,
    image: session?.user?.image,
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.loading("Editing Post please wait.... 🚀", { id: session?.user?.id });
    axios
      .patch(
        `${BASE_URL}/api/auth/adminregister/${session?.user?.id}`,
        postToEdit
      )
      .then((res) => {
        console.log(res);
        toast.success("Blog Edited Successfully", { id: session?.user?.id });
        router.refresh();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setOpenEditSettings(false);
      });
  };
  const setCustomValue = (id: any, value: any) => {
    setPostToEdit((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };
  return (
    <div className="mt-20 mx-20">
      <Modal openModal={openEditSettings} setOpenModal={setOpenEditSettings}>
        <form className="w-full" onSubmit={handleSubmit}>
          <h1 className="text-2xl pb-3">Edit Post</h1>
          <div>
            <ImageUpload
              value={postToEdit.image}
              onChange={(value) => setCustomValue("image", value)}
            />
          </div>
          <input
            type="text"
            placeholder="Edit Name"
            name="Edit Name"
            className="w-full p-2 mb-2 rounded-md"
            value={postToEdit.name || ""}
            onChange={(e) => {
              setPostToEdit((prevState: any) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
          />
          <input
            type="email"
            placeholder="Email"
            name="Edit Email"
            className="w-full p-2 mb-2 rounded-md"
            value={postToEdit.email || ""}
            onChange={(e) => {
              setPostToEdit((prevState: any) => ({
                ...prevState,
                email: e.target.value,
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
    </div>
  );
};

export default AdminProfileSettings;
