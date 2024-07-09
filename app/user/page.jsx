import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function page() {
  const user = await currentUser();
  if (user) {
    redirect("/user/" + user.id);
  }
}
