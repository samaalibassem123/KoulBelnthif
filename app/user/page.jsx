"use client";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function page() {
  const { isSignedIn, user } = useUser();

  if (isSignedIn) {
    redirect("/user/" + user.id);
  } else {
    redirect("/signin");
  }
}
