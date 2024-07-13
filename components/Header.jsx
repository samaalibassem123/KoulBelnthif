"use client";
import { SignInButton, UserButton, useUser, useClerk } from "@clerk/nextjs";
import Calories from "./Calories";

export default function Header() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  return (
    <div className=" z-10 h-fit sticky top-0 bg-[#F59E0B] w-full p-5  shadow-md text-xl font-semibold select-none ">
      {isSignedIn ? (
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-5">
            <UserButton />
            <p className="lg:text-3xl text-md ">{user.username}</p>
          </div>
          <div className="lg:block hidden">
            <Calories />
          </div>

          <button
            onClick={() => signOut({ redirectUrl: "/" })}
            className="border-[2px] border-black p-3 rounded-xl text-white
            bg-black hover:bg-black/50 transition-all ease-in-out"
          >
            {" "}
            Sign-out
          </button>
        </div>
      ) : (
        <SignInButton>
          <button className="border-[3px] font-bold border-black p-2 px-5 rounded-3xl float-right animate-pulse hover:animate-none hover:bg-black hover:text-white">
            Sign-in
          </button>
        </SignInButton>
      )}
    </div>
  );
}
