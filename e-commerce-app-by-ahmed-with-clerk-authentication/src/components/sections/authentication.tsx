"use client";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useAuth, UserProfile } from "@clerk/nextjs";

export function MenuBar() {
  const router = useRouter();
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  return (
    <Menubar>
      {!userId ? (
        <>
          <MenubarMenu>
            <Link href={"/sign-in"}>
              <MenubarTrigger>SignIn</MenubarTrigger>
            </Link>
          </MenubarMenu>
          <MenubarMenu>
            <Link href={"/sign-up"}>
              <MenubarTrigger>SignUp</MenubarTrigger>
            </Link>
          </MenubarMenu>
        </>
      ) : (
        <>
          <MenubarMenu>
            <MenubarTrigger>
              <SignOutButton>
                <button onClick={() => router.push("/sign-in")}>
                  Sign out
                </button>
              </SignOutButton>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profile</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">
                  <UserProfile />
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </>
      )}
    </Menubar>
  );
}
