import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="-mx-[26px]  lg:mx-[500px]">
      <SignIn />
    </div>
  );
}
