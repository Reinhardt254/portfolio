import Errormessage from "@/components/errormessage";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Toaster } from "react-hot-toast";
import { headers } from "next/headers";
import DashboardSidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
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

  return (
    <div className="flex min-h-screen bg-slate-950">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <main className="flex-1 p-6 overflow-auto bg-slate-900">
          <Toaster position="top-right" />
          {children}
        </main>
      </div>
    </div>
  );
}
