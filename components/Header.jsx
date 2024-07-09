"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn, user } = useUser();
  return (
    <div className="h-[100px] w-full p-5 bg-transparent text-xl font-semibold select-none ">
      {isSignedIn ? (
        <div className="flex items-center gap-2">
          <UserButton />
          <p>{user.username}</p>
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
