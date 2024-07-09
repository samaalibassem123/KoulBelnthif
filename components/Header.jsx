"use client";
import {
  SignInButton,
  UserButton,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";

export default function Header() {
  const { isSignedIn, user } = useUser();
  return (
    <div className="h-[100px] w-full p-5 bg-transparent text-xl font-semibold select-none ">
      {isSignedIn ? (
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-5">
            <UserButton />
            <p className="text-3xl ">{user.username}</p>
          </div>

          <SignOutButton>
            <button className="border-[2px] border-black p-2 rounded-xl text-white bg-black">
              Sign-out
            </button>
          </SignOutButton>
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
