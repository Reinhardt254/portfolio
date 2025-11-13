import Errormessage from "@/components/errormessage";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { headers } from "next/headers";

export default async function DasboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/sign-in");
  }

  // Check if user is the admin by email
  const adminEmail = "reinhardtlagat@gmail.com"; // Replace with your admin email

  if (session.user.email !== adminEmail) {
    redirect("/");
  }

  return <>{children}</>;
}
