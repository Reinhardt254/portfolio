"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  HomeIcon,
  MessageCircleIcon,
  BookOpenIcon,
  PenIcon,
  LogOutIcon,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    label: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircleIcon,
  },
  {
    label: "Blog Posts",
    href: "/dashboard/blog",
    icon: BookOpenIcon,
  },
  {
    label: "Create Blog",
    href: "/dashboard/blog/create",
    icon: PenIcon,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="fixed sidebar-container left-0 top-[56px] flex flex-col w-64 h-screen bg-slate-950 text-white z-50 max-h-[calc(100vh-60px)] overflow-y-auto">
      {/* Profile Section */}
      <div className="flex flex-col items-center justify-center p-6 border-b border-slate-800 ">
        <div className="mb-4">
          <Image
            src="/admin/profile.jpg"
            width={100}
            height={100}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="text-center">
          <p className="text-blue-300 text-lg font-semibold">Reinhardt Lagat</p>
          <p className="text-blue-400 text-sm">Software Engineer</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={cn(
                "flex items-center w-full gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-blue-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="flex items-center w-full gap-3 px-4 py-3 text-red-400 rounded-lg transition-colors hover:bg-slate-800 hover:text-red-300"
        >
          <LogOutIcon className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
