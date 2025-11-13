"use client";

import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { AlignCenter, BarChart3, X, User, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Navbar = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [session, setSession] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const fetchSession = async () => {
      const { data } = await authClient.getSession();
      // Better Auth returns { session: {...}, user: {...} } as separate properties
      if (data?.session && data?.user) {
        setSession({ ...data.session, user: data.user });
      } else {
        setSession(null);
      }
    };

    fetchSession();
  }, [pathname]);

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      setSession(null);
      setUserMenuOpen(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  const adminEmail = "reinhardtlagat@gmail.com"; // Admin email

  const allRoutes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/skills",
      label: "About",
      active: pathname === "/skills",
    },
    {
      href: "/experience",
      label: "Experience",
      active: pathname === "/experience",
    },
    {
      href: "/projects",
      label: "Projects",
      active: pathname === "/projects",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
      adminOnly: true, // Mark dashboard as admin-only
    },
  ];

  // Filter routes based on admin status
  const routes = allRoutes.filter((route) => {
    if (route.adminOnly) {
      return session?.user?.email === adminEmail;
    }
    return true;
  });

  return (
    <div className="flex flex-row pt-5 pb-2  px-2 bg-slate-950 justify-between  items-center w-screen">
      <div className="pl-3 flex space-x-0 font-bold flex-row  items-center justify-center">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="profile"
            width={40}
            height={40}
            className="rounded-full shadow-2xl shadow-blue-300"
          />
        </Link>
      </div>

      <div className="max-sm:hidden">
        <div className="flex space-x-3">
          {routes.map((route) => (
            <div key={route.label}>
              <Link
                href={route.href}
                className={cn(route.active ? "text-blue-100" : "text-blue-300")}
              >
                <p className="hover:text-white">{route.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex  mr-7 space-x-4 font-bold text-lg flex-row justify-center items-center h-full">
        <div className="text-gray-200">
          <Link href="https://www.linkedin.com/in/reinhardtdev">
            <Image
              src="/socials/linkdn.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-gray-200">
          <Link href="https://github.com/Reinhardt254">
            <Image
              src="/socials/github.jpg"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-gray-200">
          <Link href="https://twitter.com/_chirchirkip">
            <Image
              src="/socials/x.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="text-gray-200">
          <Link href="https://instagram.com/reinhardt_dev?igshid=OGQ5ZDc2ODk2ZA==">
            <Image
              src="/socials/insta.png"
              alt="profile"
              width={20}
              height={20}
              className="rounded"
            />
          </Link>
        </div>
        <div className="pl-5 max-sm:hidden relative">
          {session?.user ? (
            <div className="relative cursor-pointer">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <User size={20} color="white" />
              </button>
              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-700">
                      <p className="text-sm text-gray-300">
                        {session?.user?.name || "User"}
                      </p>
                      <p className="text-xs text-gray-400">
                        {session?.user?.email || "No email"}
                      </p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 flex items-center space-x-2 transition-colors cursor-pointer"
                    >
                      <LogOut size={16} />
                      <span>Sign out</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-2xl text-gray-300 text-sm font-semibold transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      <div className="sm:hidden mr-8">
        <div onClick={() => setToggleDropDown(true)}>
          <AlignCenter size={24} color="white" />
        </div>
      </div>
      {/* =======================Small devices=========================== */}
      {toggleDropDown && (
        <div
          className="z-50 h-screen w-screen absolute inset-0"
          onClick={() => {
            setUserMenuOpen(false);
            setToggleDropDown(false);
          }}
        >
          <div className="h-full w-full flex">
            <div
              className="w-1/3 bg-black opacity-70"
              onClick={() => setToggleDropDown(false)}
            ></div>
            <div className="bg-slate-950 w-2/3  relative">
              <div onClick={() => setToggleDropDown(false)} className="">
                <X
                  size={24}
                  color="white"
                  className="top-4 right-10 absolute "
                />
              </div>
              <div className=" absolute bottom-10 pl-2 left-1/2 -translate-x-1/2">
                {session?.user ? (
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600">
                      <User size={16} color="white" />
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="text-gray-300 text-sm flex items-center space-x-1"
                    >
                      <LogOut size={14} />
                      <span>Sign out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-gray-300 text-sm"
                  >
                    Sign In
                  </Link>
                )}
              </div>
              <div className="flex flex-col items-center justify-center h-4/5 space-y-5">
                {routes.map((route) => (
                  <div key={route.label}>
                    <Link
                      href={route.href}
                      onClick={() => setToggleDropDown(false)}
                      className={cn(
                        route.active ? "text-blue-100" : "text-blue-300"
                      )}
                    >
                      <p className="text-xl">{route.label}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================Large devices=============================== */}
    </div>
  );
};

export default Navbar;
