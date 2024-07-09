import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex p-2  w-full h-screen  justify-center items-center">
      <SignIn />
    </main>
  );
}
