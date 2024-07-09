import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex w-full p-2 justify-center items-center">
      <SignUp />
    </main>
  );
}
