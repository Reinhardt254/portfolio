import Button from "@/components/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <main className=" bg-slate-950 h-full flex justify-center items-center py-6 projects-page">
      <div className=" w-full space-y-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-start font-semibold text-gray-300 text-3xl pt-8 pb-3  max-sm:pt-0">
            My recent work
          </h1>

          <div className="w-full content-divider" />
        </div>
        <div className="space-y-4  pt-5 w-full flex flex-col justify-center items-center h-full">
          <section className="md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4  w-full sm:w-full box-border">
            <div className="justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2 box-border">
              <div className="">
                <Link href="https://quoteme-reinhardt254.vercel.app">
                  <ExternalLink
                    size={24}
                    color="white"
                    fill="white"
                    className=""
                  />
                </Link>
              </div>
              <div className="">
                <Link href="https://github.com/Reinhardt254/Quote-Me">
                  <Github size={24} color="white" fill="white" className="" />
                </Link>
              </div>
            </div>
            <div className="flex-col md:flex-row flex relative max-sm:justify-center max-sm:items-center w-full">
              <Image
                alt="project"
                src="/projects/quotes.png"
                width={400}
                height={200}
                className="rounded-t-md w-full h-auto md:w-1/2 md:h-auto object-contain"
              />
              <p className="pt-2 text-base text-gray-400 md:pl-10 md:w-1/2 px-0 md:px-0 w-full max-sm:pt-5">
                A quotes web app that implements CRUD functionalities. It has a
                REST api built by NextJS and the front end is built with NextJs
                and Tailwind. The web app allows users to read quotes, create
                their own accounts, delete or update. The authentication was
                implemented using Next Auth.
              </p>
            </div>
            <div className="w-full">
              <div className="pb-2 mt-0 ">
                <div className="flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-sm  rounded-b-lg pb-3 px-3">
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3 shadow-2xl shadow-blue-600">
                    NextJS
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3 shadow-2xl shadow-blue-600">
                    Javascript
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Tailwind
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    MongoDB
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Mongoose
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    NextAuth
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4  w-full  sm:w-full">
            <div className="justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2">
              <div className="">
                <Link href="https://e-commerce-saas-admin.vercel.app/">
                  <ExternalLink
                    size={24}
                    color="white"
                    fill="white"
                    className=""
                  />
                </Link>
              </div>
              <div className="">
                <Link href="https://github.com/Reinhardt254/e-commerce-saas-Admin">
                  <Github size={24} color="white" fill="white" className="" />
                </Link>
              </div>
            </div>
            <div className="flex-col sm:flex-row flex relative max-sm:justify-center max-sm:items-center">
              <Image
                alt="project"
                src="/projects/admin.png"
                width={400}
                height={200}
                className="rounded-t-md w-full h-auto md:w-1/2 md:h-auto object-contain"
              />
              <p className="pt-2 text-base text-gray-400 md:pl-10 md:w-1/2 px-0 md:px-0 max-sm:pt-5">
                An Admin dashboard application for an ecommerce store that
                implements all admin related tasks complete with a chart to show
                statistics. The dashboard is built with NextJS and Prisma with a
                MySQL database. The dashboard allows the admin to create a store
                or stores and they can add products with their attributes. The
                dashboard takes it futher by implementing apis for a creation of
                a client store.
              </p>
            </div>
            <div>
              <div className="pb-2">
                <div className="flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl  rounded-b-lg pb-3 px-3">
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    NextJS
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    TypeScript
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Tailwind
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Prisma
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    MySQL
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Clerk Auth
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Shadcn Ui
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Stripe
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4  w-full  sm:w-full">
            <div className="justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2">
              <div className="">
                <Link href="https://e-commerce-client-store.vercel.app/">
                  <ExternalLink
                    size={24}
                    color="white"
                    fill="white"
                    className=""
                  />
                </Link>
              </div>
              <div className="">
                <Link href="https://github.com/Reinhardt254/e-commerce-client-store">
                  <Github size={24} color="white" fill="white" className="" />
                </Link>
              </div>
            </div>
            <div className="flex-col sm:flex-row flex relative max-sm:justify-center max-sm:items-center">
              <Image
                alt="project"
                src="/projects/client.png"
                width={400}
                height={200}
                className="rounded-t-md w-full h-auto md:w-1/2 md:h-auto object-contain"
              />
              <p className="pt-2 text-base text-gray-400 md:pl-10 md:w-1/2 px-0 md:px-0 max-sm:pt-5">
                A client-facing eCommerce store built with Next.js and Prisma,
                backed by a MySQL database. The store provides a seamless
                shopping experience, allowing customers to browse products with
                detailed attributes. It is powered by APIs that connect directly
                to the admin dashboard, enabling real-time updates on product
                listings, inventory, and store configurations. Designed for
                efficiency, the platform ensures a dynamic and user-friendly
                interface for customers.
              </p>
            </div>
            <div>
              <div className="pb-2">
                <div className="flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl  rounded-b-lg pb-3 px-3">
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    NextJS
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    TypeScript
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Tailwind
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Shadcn Ui
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300 mt-3">
                    Stripe
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="md:px-10 px-2 shadow-sm shadow-blue-200 rounded-md pt-4  w-full  sm:w-full">
            <div className="justify-start h-full w-full sm:w-auto flex pl-5 space-x-3 pb-2">
              <div className="">
                <Link href="https://g-p-3.vercel.app">
                  <ExternalLink
                    size={24}
                    color="white"
                    fill="white"
                    className=""
                  />
                </Link>
              </div>
              <div className="">
                <Link href="https://github.com/Reinhardt254/g-p-3">
                  <Github size={24} color="white" fill="white" className="" />
                </Link>
              </div>
            </div>
            <div className="flex-col sm:flex-row flex relative max-sm:justify-center max-sm:items-center w-full">
              <Image
                alt="project"
                src="/projects/gpt.png"
                width={400}
                height={200}
                className="rounded-t-md w-full h-auto md:w-1/2 md:h-auto"
              />
              <p className="pt-2 text-base text-gray-400 md:pl-10 md:w-1/2 px-0 md:px-0 max-sm:pt-5">
                A website with eye catching ui built with React and SAAS. The
                website is inspired with the recent rise of AI technoligies
                including chatgpt. The website is responsive in all applications
                with a working navbar in both large and small devices
              </p>
            </div>
            <div>
              <div className=" mt-3 pb-10">
                <div className="flex space-x-3 font-semibold text-sm flex-wrap md:w-2/5 shadow-xl rounded-b-lg pb-3 px-3">
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300">
                    React
                  </p>
                  <p className="bg-blue-900 rounded-3xl px-3 py-1 text-center text-gray-300">
                    SAAS
                  </p>
                </div>
              </div>
            </div>
          </section>
          <div className="pb-10 pt-5 pl-2">
            <Button link="/contact" text="Convinced? Hire me" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
