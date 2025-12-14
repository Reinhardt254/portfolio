"use client";

import Button from "@/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { ChevronDownSquare } from "lucide-react";
import dynamic from "next/dynamic";
import animationData from "@/public/lottie/message.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const messageSchema = z.object({
  name: z.string().min(3, "name should be at least three characters"),
  email: z.string().email(),
  message: z.string().min(1, "please enter a message, it cannot be empty"),
});

type TmessageSchema = z.infer<typeof messageSchema>;

const Contact = () => {
  const [disabled, setIsDisabled] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setIsDisabled(true);
    try {
      await axios.post("/api/messages", data);
      toast.success("successfully sent");
    } catch (error) {
      toast.error("an error occured");
    } finally {
      setIsDisabled(false);
      reset();
    }
  };

  return (
    <main className="h-full bg-slate-950 pb-10 flex justify-center items-center max-sm:pb-20">
      <div className="h-full md:w-[600px] w-full px-0  box-border min-h-[80vh]  max-sm:min-h-auto justify-center items-center">
        <Toaster />
        <div className="pr-0 box-border w-full ">
          <div className="pt-10 flex justify-space-between items-center w-full pb-2">
            <h1 className="text-blue-300 text-2xl md:text-4xl text-start font-semibold pl-0 ">
              Send me a message
            </h1>
            <Lottie animationData={animationData} className="h-8 w-auto pl-2" />
          </div>

          <p className="text-gray-400 text-md">
            I'm always looking for new opportunities and collaborations. If you have any questions or want to work together, please feel free to contact me.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex space-y-4 h-full flex-col justify-center items-center pt-7"
          >
            <input
              {...register("name")}
              type="name"
              placeholder="name"
              className="px-4 py-3 rounded  bg-gray-300 w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="px-4 py-3 rounded  bg-gray-300 w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <textarea
              {...register("message")}
              placeholder="Enter message here"
              className="px-4 py-2 rounded h-60  bg-gray-300 w-full"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <button
              disabled={disabled}
              type="submit"
              className="bg-blue-700 disabled:bg-gray-500 py-2 px-5 rounded"
            >
              <p className="text-gray-300">Submit</p>
            </button>
            <div>
              <div>
                <div className="flex pt-3">
                  <p className="text-gray-400 text-lg">send an email instead</p>
                  <Link href="mailto:reinhardtlagat@gmail.com">
                    <p className="text-blue-500 pl-2 hover:text-gray-400 text-lg">
                      email
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* <div className="pt-10">
          <Button text="Go back home" link="/" />
        </div> */}
      </div>
    </main>
  );
};

export default Contact;
