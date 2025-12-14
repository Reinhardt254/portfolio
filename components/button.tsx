"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import animationData from "@/public/lottie/arrowright.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface componentProps {
  link: string;
  text: string;
}
const Button: React.FC<componentProps> = ({ link, text }) => {
  return (
    <div>
      <Link
        href={link}
        className="flex justify-start items-center text-lg font-semibol text-blue-500"
      >
        {text}
        <Lottie animationData={animationData} className="h-14 w-10" />
      </Link>
    </div>
  );
};

export default Button;
