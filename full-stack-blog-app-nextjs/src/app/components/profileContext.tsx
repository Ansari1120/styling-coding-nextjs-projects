"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SignOutButton from "./signOutButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import BASE_URL from "@/lib/URL";


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
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef: any = useRef(null); // Reference to the dropdown element
  
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
  const userJSON = JSON.stringify(session);
  return (
    <>
      <div ref={dropdownRef} className="flex flex-col top-0 right-0">
        <div>
          <button
            onClick={() => setOpenProfile(!openProfile)}
            id="dropdownUserAvatarButton"
            data-dropdown-toggle="dropdownAvatar"
            className="lg:ml-32 ml-24"
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
          className={`mt-12 absolute rounded-md ${
            !openProfile && `hidden`
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 lg:mr-20 mr-96`}
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
                User Info
              </button>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                href={`/settings?data=${encodeURIComponent(userJSON)}`}
              >
                Settings
              </Link>
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
