"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SignOutButton from "./signOutButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import BASE_URL from "@/lib/URL";
import Modal from "./Modal";
import ImageUpload from "./ImageUpload";
import AdminProfileSettings from "../settings/page";

interface userType {
  name: string;
  email: string;
  image: string;
}

interface MyComponentProps {
  session: any; // Modify this type based on the session data structure
}

const ProfileContext = (props: MyComponentProps) => {
  const { session } = props;
  console.log("ping poo", session);
  const router = useRouter();
  const [openProfile, setOpenProfile] = useState(false);
  const [openEditSettings, setOpenEditSettings] = useState(false);
  const dropdownRef: any = useRef(null); // Reference to the dropdown element
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
  useEffect(() => {
    // Function to close dropdown when clicked outside
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    // Attach the click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={dropdownRef} className="flex flex-col ">
        <div>
          <button
            onClick={() => setOpenProfile(!openProfile)}
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="lg:ml-32"
            type="button"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              width={44}
              height={44}
              className="rounded-full"
              src={
                session?.user?.image ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
              }
              alt={session?.user?.name || "user photo"}
            />
          </button>
        </div>
        <div
          id="dropdownAvatar"
          className={`mt-12 absolute ${
            !openProfile && `hidden`
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 mr-20`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{session?.user?.name}</div>
            <div className="font-medium truncate">{session?.user?.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <button
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  // Handle Dashboard action here
                }}
              >
                Admin Info
              </button>
            </li>
            <li>
              {/* <Link
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href={"/components/profileUpdate"}
              >
                Settings
              </Link> */}
              {/* <button
                onClick={() => router.push('/settings')}
              >
                settings
              </button> */}
              {/* <Link
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href={{
                  pathname: "/settings",
                  query: {
                    session: session?.name,
                  },
                }}
              >
                Settings
              </Link> */}
              <button onClick={() => setOpenEditSettings(true)}>
                settings
              </button>
              {openEditSettings && (
                <AdminProfileSettings
                  session={session}
                  openEditSettings={openEditSettings}
                  setOpenEditSettings={setOpenEditSettings}
                />
              )}
              {/* {openEditSettings && (
                <Modal
                  openModal={openEditSettings}
                  setOpenModal={setOpenEditSettings}
                >
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
              )} */}
            </li>
          </ul>
          <div>
            <SignOutButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContext;
