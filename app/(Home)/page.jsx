"use client";
import Header from "@/components/Header";
import Section from "@/components/Home/Section";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { isSignedIn } = useUser();
  if (isSignedIn) {
    redirect("/user");
  } else {
    return (
      <main className="flex flex-col select-none">
        <Header />
        <Section />
      </main>
    );
  }
}
